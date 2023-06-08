import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { ClimbingType } from 'src/generated/graphql';
import { createDefaultValues } from 'src/service/zodHelper';
import { z } from 'zod';

const postSchema = z.object({
  name: z.string().nonempty({ message: '何でもいいよ！' }),
  climbingType: z.nativeEnum(ClimbingType, { required_error: '好きな方を入れてね' }),
  imageFile: z.any(),
});

export type PostInput = z.infer<typeof postSchema>;

export default function usePostForm() {
  const postMethods = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: createDefaultValues(postSchema),
  });
  return postMethods;
}
