import '@testing-library/jest-dom';
import jwt from 'jsonwebtoken';
import { vi } from 'vitest';
import { jwtSignUserId } from '.';

// vi.mockする場合
// vi.mock('jsonwebtoken', async () => ({
//   default: { sign: vi.fn(() => 'hoge') },
// }));

describe('jwtSignUserId', () => {
  test('正常系', () => {
    const userId = 1;
    vi.spyOn(jwt, 'sign').mockImplementation(() => 'hoge');
    expect(jwtSignUserId({ userId })).toStrictEqual('hoge');
  });

  test('異常系', () => {
    const userId = 1;
    vi.spyOn(jwt, 'sign').mockImplementation(() => {
      throw new Error('');
    });
    expect(() => jwtSignUserId({ userId })).toThrowError();
  });
});
