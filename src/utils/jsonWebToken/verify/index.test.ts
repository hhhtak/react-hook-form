import '@testing-library/jest-dom';
import jwt from 'jsonwebtoken';
import { vi } from 'vitest';
import { jwtVerify } from '.';

describe('jwtVerify', () => {
  test('正常系', () => {
    const hoge = 1;
    vi.spyOn(jwt, 'verify').mockImplementation(() => ({ hoge }));
    expect(jwtVerify('hoge')).toStrictEqual({ hoge });
  });

  test('異常系', () => {
    vi.spyOn(jwt, 'verify').mockImplementation(() => {
      throw new Error('');
    });
    expect(() => jwtVerify('hoge')).toThrowError();
  });
});
