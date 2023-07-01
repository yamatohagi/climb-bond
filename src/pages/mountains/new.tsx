import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email', { required: true })} placeholder="Email" />
      {errors.email && <span>This field is required</span>}

      <Input {...register('password', { required: true })} placeholder="Password" type="password" />
      {errors.password && <span>This field is required</span>}

      <Button type="submit">Submit</Button>
    </form>
  );
}
