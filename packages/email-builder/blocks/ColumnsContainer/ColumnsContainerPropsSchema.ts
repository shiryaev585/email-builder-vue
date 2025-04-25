import { z } from 'zod';

// import { ColumnsContainerPropsSchema as BaseColumnsContainerPropsSchema } from '@flyhub-dev/block-columns-container';
// import type { ColumnsContainerProps as BaseColumnsContainerProps } from '@flyhub-dev/block-columns-container';
import { ColumnsContainerPropsSchema as BaseColumnsContainerPropsSchema } from '../../../block-columns-container';
import type { ColumnsContainerProps as BaseColumnsContainerProps } from '../../../block-columns-container';

const BasePropsShape = BaseColumnsContainerPropsSchema.shape.props.unwrap().unwrap().shape;

const ColumnsContainerPropsSchema = z.object({
  style: BaseColumnsContainerPropsSchema.shape.style,
  props: z
    .object({
      ...BasePropsShape,
      columns: z.tuple([
        z.object({ childrenIds: z.array(z.string()) }),
        z.object({ childrenIds: z.array(z.string()) }),
        z.object({ childrenIds: z.array(z.string()) }),
      ]),
    })
    .optional()
    .nullable(),
});

export default ColumnsContainerPropsSchema;
// export type ColumnsContainerProps = z.infer<typeof ColumnsContainerPropsSchema>;

export type ColumnsContainerProps = Omit<BaseColumnsContainerProps, 'props'> & {
  props?: BaseColumnsContainerProps['props'] & {
    columns: [
      { childrenIds: string[] },
      { childrenIds: string[] },
      { childrenIds: string[] },
    ];
  } | null;
};
