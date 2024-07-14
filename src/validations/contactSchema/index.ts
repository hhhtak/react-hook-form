import { z } from 'zod';

export const contactSchema = z.object({
  email: z
    .string({ required_error: '入力が必須の項目です' })
    .min(1, { message: '入力が必須の項目です' })
    .max(255, { message: '255文字以内で入力してください' })
    .email({ message: 'メールアドレスの形式で入力してください' }),
  telephone: z
    .string({ required_error: '入力が必須の項目です' })
    .min(10, { message: '電話番号を入力してください' })
    .max(14, { message: '入力値が長すぎます' }),
  firstName: z
    .string({ required_error: '入力が必須の項目です' })
    .min(1, { message: '入力が必須の項目です' })
    .max(20, { message: '入力値が長すぎます' }),
  lastName: z
    .string({ required_error: '入力が必須の項目です' })
    .min(1, { message: '入力が必須の項目です' })
    .max(20, { message: '入力値が長すぎます' }),
  organizationName: z
    .string({ required_error: '入力が必須の項目です' })
    .min(1, { message: '入力が必須の項目です' })
    .max(50, { message: '入力値が長すぎます' }),
  message: z
    .string({ required_error: '入力が必須の項目です' })
    .min(1, { message: '入力が必須の項目です' })
    .max(4098, { message: '入力値が長すぎます' }),
  agree: z.literal('true', {
    errorMap: () => ({ message: '同意が必須です' }),
  }),
});

export type ContactType = z.infer<typeof contactSchema>;
