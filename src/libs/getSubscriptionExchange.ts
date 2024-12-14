import { Exchange, subscriptionExchange } from "@urql/core"
import { SubscriptionClient } from "subscriptions-transport-ws"

export const getSubscriptionExchange = () => {
    const apiAuthorization = {
        [process.env.APP_ENV === "local" ? "x-api-key" : "Authorization"] : process.env.X_API_KEY
    }

    const wsHeader = {...apiAuthorization, host: process.env.GRAPHQL_WS_HOST}
    const wsPayload = {} // 空でも指定が必要
    const encodeWsHeader = btoa(JSON.stringify(wsHeader))
    const encodeWsPayload = btoa(JSON.stringify(wsPayload))

    const wsEndPoint = [
        process.env.GRAPHQL_WS_ENDPOINT,
        "?header=", encodeWsHeader, "&payload=", encodeWsPayload
    ].join("")

    const wsClient = new SubscriptionClient(wsEndPoint, {
        reconnect: true, // 指定がないと動かない
        reconnectionAttempts: 10,
        timeout: 60 * 1000 * 2, // 2分ごとにkeep aliveを実施
        connectionParams: () => apiAuthorization
    })

    const operationResult:Exchange = subscriptionExchange({
        forwardSubscription: (operation)=> {
            const operationPayload ={
                ...operation,
                query: operation.query || "",
                operationName: operation.operationName,
                variables: operation.variables || {},
                data: JSON.stringify({query: operation.query, variables: operation.variables}),
                extentions: {
                    ...operation.extensions,
                    authorization:{
                        Authorization: process.env.X_API_KEY,
                        host: process.env.GRAPHQL_WS_HOST,
                    }
                }
            }
            return wsClient.request(operationPayload)
        }
    })

    return operationResult
}
