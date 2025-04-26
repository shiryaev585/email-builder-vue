import { z } from 'zod';

const COLOR_SCHEMA = z
  .string()
  .regex(/^#[0-9a-fA-F]{6}$/)
  .nullable()
  .optional();

const FONT_FAMILY_SCHEMA = z
  .enum([
    'MODERN_SANS',
    'BOOK_SANS',
    'ORGANIC_SANS',
    'GEOMETRIC_SANS',
    'HEAVY_SANS',
    'ROUNDED_SANS',
    'MODERN_SERIF',
    'BOOK_SERIF',
    'MONOSPACE',
  ])
  .nullable()
  .optional();

export const EmailLayoutPropsSchema = z.object({
  // FIXME: type
  document: z.record(z.any()),
  backdropColor: COLOR_SCHEMA,
  borderColor: COLOR_SCHEMA,
  borderRadius: z.number().optional().nullable(),
  canvasColor: COLOR_SCHEMA,
  textColor: COLOR_SCHEMA,
  fontFamily: FONT_FAMILY_SCHEMA,
  childrenIds: z.array(z.string()).optional().nullable(),
});

// export type EmailLayoutProps = z.infer<typeof EmailLayoutPropsSchema>;
// FIXME: type
export type EmailLayoutProps = {
  document: Record<string, any>;
  backdropColor?: string | null;
  borderColor?: string | null;
  borderRadius?: number | null;
  canvasColor?: string | null;
  textColor?: string | null;
  fontFamily?: string | null;
  childrenIds?: string[] | null;
};
