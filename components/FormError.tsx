function FormError({ children }: { children: React.ReactNode }) {
  return (
    <p role='alert' className='text-red-600 absolute -bottom-1/5'>
      {children || 'Input Error'}
    </p>
  );
}

export default FormError;
