import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ビルド設定
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // エイリアス設定
    },
  },
  server: {
    // サーバー設定
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      // include: ['src/**/*.{ts,tsx}'],
      include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
      exclude: [
        'src/**/*.d.ts',
        'src/**/__tests__/**',
        // 'src/**/?(*.)+(spec|test).[tj]s?(x)',
        'src/setupTests.{js,ts}',
        // 'src/**/index.{js,ts,tsx}',
        // 'src/**/index.{js}',
        'src/**/*.stories.tsx', // Storybookストーリーファイル
        'src/**/_app.tsx',
        'src/**/_document.tsx',
        'node_modules',
        'dist',
      ],
      // include: ['src/**/*.test{.ts,.tsx}'], // すべてのTypeScriptファイルをカバレッジ対象にする
      // exclude: [
      //   'src/**/*.d.ts', // 型定義ファイルを除外
      //   'src/**/*.stories.tsx', // Storybookストーリーファイル
      //   'src/**/__tests__/**', // テストディレクトリを除外
      //   'src/**/?(*.)+(spec|test).[tj]s?(x)', // テストファイルを除外
      //   'src/**/_app.tsx',
      //   'src/**/_document.tsx',
      //   'src/setupTests.{js,ts}', // セットアップファイルを除外
      //   'node_modules', // node_modulesディレクトリを除外
      //   'dist', // ビルド出力ディレクトリを除外
      // ],
    },
  },
});
