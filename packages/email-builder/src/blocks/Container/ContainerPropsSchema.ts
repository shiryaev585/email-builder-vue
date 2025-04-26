import { z } from 'zod';

import { ContainerPropsSchema as BaseContainerPropsSchema } from '@flyhub/email-block-container';
import type { ContainerProps as BaseContainerProps } from '@flyhub/email-block-container';

export const ContainerPropsSchema = z.object({
  // FIXME: type
  document: z.record(z.any()),
  style: BaseContainerPropsSchema.shape.style,
  props: z
    .object({
      childrenIds: z.array(z.string()).optional().nullable(),
    })
    .optional()
    .nullable(),
});

// export type ContainerProps = z.infer<typeof ContainerPropsSchema>;
export type ContainerProps = BaseContainerProps & {
  // FIXME: type
  document: Record<string, any>;
  props?: {
    childrenIds?: string[] | null;
  } | null;
}
