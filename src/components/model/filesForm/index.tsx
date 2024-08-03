'use client';

import { FC } from 'react';
import { useFilesForm } from './useFilesForm.hook';

export const FilesForm: FC = () => {
  const {
    errors,
    handleFormSubmit,
    handleSubmit,
    isSubmitting,
    isValid,
    register,
  } = useFilesForm();

  return (
    <form
      method="post"
      onSubmit={(event) => {
        handleSubmit(handleFormSubmit)(event);
      }}
      className="flex flex-col space-y-10"
    >
      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">ファイル</div>
        <input
          type="file"
          {...register('formFile')}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
        />
        {errors.formFile && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {errors.formFile.message}
          </div>
        )}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">ファイル</div>
        <input
          type="file"
          {...register('formFile2')}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
        />
        {errors.formFile2 && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {errors.formFile2.message}
          </div>
        )}
      </label>

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
