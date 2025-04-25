export { default as renderToStaticMarkup } from './renderers/renderToStaticMarkup';

export type TReaderProps = {
  // FIXME: type
  // document: Record<string, z.infer<typeof ReaderBlockSchema>>;
  document: Record<string, any>;
  rootBlockId: string;
};

export type TReaderBlockProps = {
  id: string;
};

