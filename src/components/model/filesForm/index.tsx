'use client';

import { FC } from 'react';
import { useFilesForm } from './useFilesForm.hook';

export const FilesForm: FC = () => {
  const {
    // handleSubmit,
    // handleFormSubmit,
    // register,
    // errors,
    // isSubmitting,
    isValid,
  } = useFilesForm();

  return (
    <form
      method="post"
      onSubmit={(event) => {
        event;
      }}
      className="flex flex-col space-y-10"
    >
      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">ファイル</div>
        <input
          type="file"
          // {...register('email')}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          // placeholder="例）mail@example.com"
        />
        {/* {errors.email && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {errors.email.message}
          </div>
        )} */}
      </label>

      <button
        type="submit"
        disabled={!isValid}
        className="bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white  disabled:bg-gray-300 md:self-center"
      >
        送信する
      </button>
    </form>
  );
};
