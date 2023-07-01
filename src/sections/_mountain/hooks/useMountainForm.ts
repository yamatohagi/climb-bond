import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createDefaultValues } from 'src/service/zodHelper';
import { z } from 'zod';

const MountainSchema = z.object({
  title: z.string(),
  userName: z.string().nonempty({ message: 'なまえは必須です' }),
  content: z.string().nonempty({ message: '内容は必須です' }),
});

export type MountainInput = z.infer<typeof MountainSchema>;

export default function useMountainForm() {
  const mountainFormMethods = useForm({
    resolver: zodResolver(MountainSchema),
    defaultValues: createDefaultValues(MountainSchema),
  });
  return mountainFormMethods;
}
