'use client';

import { FC } from 'react';
import { useContactForm } from './useContactForm.hook';

export const ContactForm: FC = () => {
  const {
    handleSubmit,
    handleFormSubmit,
    register,
    errors,
    isSubmitting,
    isValid,
  } = useContactForm();

  return (
    <form
      method="post"
      onSubmit={(event) => {
        handleSubmit(handleFormSubmit)(event);
      }}
      className="flex flex-col space-y-10"
    >
      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">メールアドレス</div>
        <input
          type="text"
          {...register('email')}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="例）mail@example.com"
        />
        {errors.email && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {errors.email.message}
          </div>
        )}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">電話番号</div>
        <input
          type="text"
          {...register('telephone')}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="例）09012345678"
        />
        {errors.telephone && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {errors.telephone.message}
          </div>
        )}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">お名前</div>
        <input
          type="text"
          {...register('lastName')}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="例）山田"
        />
        {errors.lastName && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {errors.lastName.message}
          </div>
        )}
        <input
          type="text"
          {...register('firstName')}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="例）太郎"
        />
        {errors.firstName && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {errors.firstName.message}
          </div>
        )}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">企業名</div>
        <input
          type="text"
          {...register('organizationName')}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="例）株式会社◯✕△"
        />
        {errors.organizationName && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {errors.organizationName.message}
          </div>
        )}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">お問い合わせ内容</div>
        <textarea
          {...register('message')}
          className="h-36 border px-2 py-1"
        ></textarea>

        {errors.message && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {errors.message.message}
          </div>
        )}
      </label>

      <div className="flex flex-col items-center space-y-1">
        <div className="flex flex-row items-center space-x-2">
          <label className="flex flex-row items-center space-x-2">
            <input
              type="checkbox"
              value="true"
              {...register('agree')}
              className="h-5 w-5"
            />
            <p>個人情報取り扱いに同意する</p>
          </label>
        </div>
        {errors.agree && (
          <div className="text-red-500 pl-1 pt-1 text-center text-xs">
            {errors.agree.message}
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white  disabled:bg-gray-300 md:self-center"
      >
        送信する
      </button>
    </form>
  );
};
