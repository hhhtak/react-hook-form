import jwt from 'jsonwebtoken';

const JET_PRIVATE_KEY_BINARY = Buffer.from(
  process.env.JWT_PRIVATE_KEY || '',
  'base64',
);

const JET_PUBLIC_KEY_BINARY = Buffer.from(
  process.env.JET_PUBLIC_KEY_BINARY || '',
  'base64',
);

const expiresIn = 60 * 60 * 2;
const algorithm = 'RS256';

export const jwtSign = (payload: any) => {
  const aaa = jwt.sign(payload, JET_PRIVATE_KEY_BINARY, {
    expiresIn,
    algorithm,
  });
  console.log('jwtSign:', aaa);
  return jwt.sign(payload, JET_PRIVATE_KEY_BINARY, {
    expiresIn,
    algorithm,
  });
};

export const jwtVerify = (payload: any) => {
  try {
    return jwt.verify(payload, JET_PUBLIC_KEY_BINARY, {
      algorithms: [algorithm],
    });
  } catch (error) {
    throw new Error('verify failed');
  }
};
