export const JET_PRIVATE_KEY_BINARY = Buffer.from(
  process.env.JWT_PRIVATE_KEY || '',
  'base64',
);

export const JET_PUBLIC_KEY_BINARY = Buffer.from(
  process.env.JET_PUBLIC_KEY_BINARY || '',
  'base64',
);

export const expiresIn = 60 * 60 * 2;
export const algorithm = 'RS256';
