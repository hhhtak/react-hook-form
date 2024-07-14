import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "components/ui/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => {
    return <Button>hogehoge</Button>;
  },
  // parameters: {
  //   nextjs: {
  //     router: {
  //       pathname: "/profile/[id]",
  //       asPath: "/profile/1",
  //       query: {
  //         id: "1",
  //       },
  //     },
  //   },
  // },
};

export const Small: Story = {
  render: () => {
    return <Button size="small">hogehoge</Button>;
  },
};
