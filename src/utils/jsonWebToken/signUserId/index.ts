import jwt from 'jsonwebtoken';
import { algorithm, expiresIn, JET_PRIVATE_KEY_BINARY } from '../constants';

type UserId = {
  userId: number;
};

export const jwtSignUserId = (payload: UserId) => {
  try {
    return jwt.sign(payload, JET_PRIVATE_KEY_BINARY, {
      expiresIn,
      algorithm,
    });
  } catch (error) {
    throw new Error('sign failed');
  }
};
