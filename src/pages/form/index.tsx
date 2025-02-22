import { ContactForm } from '@/components/model/contactForm';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const Form = () => {
  const [getNumber, setNumber] = useState(0);
  const { push } = useRouter();

  useEffect(() => {
    console.log('hogehoge:', getNumber);
    return () => {
      console.log('unmount');
    };
    // comment
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = useCallback(() => {
    console.log('hogehoge');
    const aaa = getNumber + 1;
    setNumber(aaa);
    push('/');
  }, [getNumber, push]);

  return (
    <main className="container relative mx-auto">
      <div className="mx-auto lg:w-[800px] py-10 px-10">
        <h1 className="text-2xl font-bold text-center pb-10">お問い合わせ</h1>
        <ContactForm />
      </div>
      <div className="m-10">
        <Button onClick={handleSubmit}>
          <p className="bg-white">hogehoge</p>
        </Button>
      </div>
    </main>
  );
};

export default Form;
