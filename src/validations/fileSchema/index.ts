import { z } from 'zod';

const IMAGE_TYPES = ['image/jpg', 'image/jpeg', 'image/png'];
const MAX_IMAGE_SIZE = 10;

// バイトをメガバイトに変換する
const sizeInMB = (sizeInBytes: number, decimalsNum = 2) => {
  const result = sizeInBytes / (1024 * 1024);
  return +result.toFixed(decimalsNum);
};

const validationFile = z
  // Schemaを定義したときに型を付与
  .custom<FileList>()
  // 必須チェック
  .refine((file) => file.length !== 0, { message: '入力必須項目です' })
  // refine()で扱いやすくするため整形
  .transform((file) => file[0])
  // ファイルサイズ制限チェック
  .refine((file) => sizeInMB(file.size) <= MAX_IMAGE_SIZE, {
    message: `ファイルサイズの最大は${MAX_IMAGE_SIZE}MBです`,
  })
  // 画像形式チェック
  .refine((file) => IMAGE_TYPES.includes(file.type), {
    message: `拡張子は${IMAGE_TYPES.join('・')}です`,
  });

export const fileSchema = z.object({
  formFile: validationFile,
  formFile2: validationFile,
});

export type FileSchemaType = z.infer<typeof fileSchema>;
