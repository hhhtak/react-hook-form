import jwt from 'jsonwebtoken';
import { algorithm, JET_PUBLIC_KEY_BINARY } from '../constants';

export const jwtVerify = (payload: any) => {
  try {
    return jwt.verify(payload, JET_PUBLIC_KEY_BINARY, {
      algorithms: [algorithm],
    });
  } catch (error) {
    throw new Error('verify failed');
  }
};
