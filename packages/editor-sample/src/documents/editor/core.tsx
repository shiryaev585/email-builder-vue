import EditorBlockWrapper from '../blocks/helpers/block-wrappers/EditorBlockWrapper.vue';
import { EmailLayoutPropsSchema } from '@flyhub-dev/email-builder/blocks/EmailLayout/EmailLayoutPropsSchema';
import EmailLayoutEditor from '../blocks/EmailLayout/EmailLayoutEditor.vue';
import Heading, { HeadingPropsSchema } from '@flyhub-dev/block-heading';
import Text, { TextPropsSchema } from '@flyhub-dev/block-text';
import Button, { ButtonPropsSchema } from '@flyhub-dev/block-button';
import Image, { ImagePropsSchema } from '@flyhub-dev/block-image';
import Avatar, { AvatarPropsSchema } from '@flyhub-dev/block-avatar';
import Divider, { DividerPropsSchema } from '@flyhub-dev/block-divider';
import Spacer, { SpacerPropsSchema } from '@flyhub-dev/block-spacer';
import Html, { HtmlPropsSchema } from '@flyhub-dev/block-html';

import ColumnsContainerEditor from '../blocks/ColumnsContainer/ColumnsContainerEditor.vue'
import ColumnsContainerPropsSchema from '../blocks/ColumnsContainer/ColumnsContainerPropsSchema'
import ContainerEditor from '../blocks/Container/ContainerEditor.vue'
import ContainerPropsSchema from '../blocks/Container/ContainerPropsSchema'

import { buildBlockConfigurationDictionary, buildBlockConfigurationSchema } from '@flyhub-dev/document-core/builders';
import type { z } from 'zod';

export const EDITOR_DICTIONARY = buildBlockConfigurationDictionary({
  Avatar: {
    schema: AvatarPropsSchema,
    Component: (props) => (
      <EditorBlockWrapper>
        <Avatar {...props} />
      </EditorBlockWrapper>
    ),
  },
  Button: {
    schema: ButtonPropsSchema,
    Component: (props) => (
      <EditorBlockWrapper>
        <Button {...props} />
      </EditorBlockWrapper>
    ),
  },
  Container: {
    schema: ContainerPropsSchema,
    Component: (props) => (
      <EditorBlockWrapper>
        <ContainerEditor {...props} />
      </EditorBlockWrapper>
    ),
  },
  ColumnsContainer: {
    schema: ColumnsContainerPropsSchema,
    Component: (props) => (
      <EditorBlockWrapper>
        <ColumnsContainerEditor {...props} />
      </EditorBlockWrapper>
    ),
  },
  Heading: {
    schema: HeadingPropsSchema,
    Component: (props) => (
      <EditorBlockWrapper>
        <Heading {...props} />
      </EditorBlockWrapper>
    ),
  },
  Html: {
    schema: HtmlPropsSchema,
    Component: (props) => (
      <EditorBlockWrapper>
        <Html {...props} />
      </EditorBlockWrapper>
    ),
  },
  Image: {
    schema: ImagePropsSchema,
    Component: (data) => {
      const props = {
        ...data,
        props: {
          ...data.props,
          url: data.props?.url ?? 'https://placehold.co/600x400@2x/F8F8F8/CCC?text=Your%20image',
        },
      };
      return (
        <EditorBlockWrapper>
          <Image {...props} />
        </EditorBlockWrapper>
      );
    },
  },
  Text: {
    schema: TextPropsSchema,
    Component: (props) => (
      <EditorBlockWrapper>
        <Text {...props} />
      </EditorBlockWrapper>
    ),
  },
  EmailLayout: {
    schema: EmailLayoutPropsSchema,
    Component: (p) => <EmailLayoutEditor {...p} />,
  },
  Spacer: {
    schema: SpacerPropsSchema,
    Component: (props) => (
      <EditorBlockWrapper>
        <Spacer {...props} />
      </EditorBlockWrapper>
    ),
  },
  Divider: {
    schema: DividerPropsSchema,
    Component: (props) => (
      <EditorBlockWrapper>
        <Divider {...props} />
      </EditorBlockWrapper>
    ),
  },
});

const _EditorBlockSchema = buildBlockConfigurationSchema(EDITOR_DICTIONARY)
export type TEditorBlock = z.infer<typeof _EditorBlockSchema>
export type TEditorConfiguration = Record<string, TEditorBlock>
