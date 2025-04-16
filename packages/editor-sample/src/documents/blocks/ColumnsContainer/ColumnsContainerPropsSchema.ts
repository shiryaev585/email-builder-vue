import { z } from 'zod';

import { ColumnsContainerPropsSchema as BaseColumnsContainerPropsSchema } from '@flyhub-dev/block-columns-container';
import type { ColumnsContainerProps as BaseColumnsContainerProps } from '@flyhub-dev/block-columns-container';

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

type TColumn = { childrenIds: string[] };
export type ColumnsContainerProps = BaseColumnsContainerProps & {
  props?: BaseColumnsContainerProps['props'] & {
    columns: TColumn[];
  }
}
export default ColumnsContainerPropsSchema;
