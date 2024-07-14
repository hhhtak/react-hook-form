'use client';
import { contactSchema, ContactType } from '@/validations/contactSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export const useContactForm = () => {
  const handleFormSubmit: SubmitHandler<ContactType> = useCallback((data) => {
    console.log(data);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactType>({
    mode: 'onBlur',
    resolver: zodResolver(contactSchema),
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
