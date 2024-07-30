'use client';
import { fileSchema, FileSchemaType } from '@/validations/fileSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const useFilesForm = () => {
  const handleFormSubmit: SubmitHandler<FileSchemaType> = useCallback(
    (data) => {
      console.log(data);
    },
    [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FileSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(fileSchema),
  });

  return {
    errors,
    handleFormSubmit,
    handleSubmit,
    isSubmitting,
    isValid,
    register,
  };
};
