'use client';

import { useForm } from 'react-hook-form';
import validator from 'validator';

import FormError from './FormError';
import { useGenerateForm } from '@/lib/hooks/useGenerateForm';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<API.URLInput>();

  const { isCreating, onSubmit } = useGenerateForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='shadow-sm border rounded-2xl px-6 py-4 flex flex-col gap-9'
    >
      {/* Origin URL */}
      <fieldset className='fieldset flex flex-col justify-center relative'>
        <legend className='fieldset-legend text-xl'>Your Origin URL</legend>
        <label className="w-full">
          <textarea
            className={`textarea textarea-xl h-28 w-full ${errors.originURL ? 'input-error' : ''
              }`}
            placeholder='The URL you want to shorten'
            {...register('originURL', {
              required: 'Origin URL is required',
              validate: (value) => {
                return validator.isURL(value) || 'Invalid URL';
              },
            })}
          />
        </label>
        {errors.originURL && <FormError>{errors.originURL.message}</FormError>}
      </fieldset>

      {/* Custom URL code */}
      <fieldset className='fieldset flex justify-center'>
        <legend className='fieldset-legend text-xl'>
          Custom your short URL(Optional)
        </legend>

        <label className='input input-xl w-full'>
          https://alexshorturl.com/
          <input
            type='text'
            className='grow'
            maxLength={8}
            placeholder='Custom URL code'
            {...register('urlCode')}
          />
        </label>
      </fieldset>

      <fieldset className='fieldset flex justify-center'>
        <button className='btn btn-primary flex-1' disabled={isCreating}>
          {isCreating && <span className='loading loading-spinner'></span>}
          Generate
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
