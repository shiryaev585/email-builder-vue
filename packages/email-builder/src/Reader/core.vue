<template>
  <!-- FIXME: check all types -->
  <BuildBlockComponent :blocks="READER_DICTIONARY" v-bind="document[rootBlockId]"  />
</template>

<script setup lang="ts">
import Avatar, { AvatarPropsSchema } from '@flyhub/email-block-avatar';
import Button, { ButtonPropsSchema } from '@flyhub/email-block-button';
import Divider, { DividerPropsSchema } from '@flyhub/email-block-divider';
import Heading, { HeadingPropsSchema } from '@flyhub/email-block-heading';
import Html, { HtmlPropsSchema } from '@flyhub/email-block-html';
import Image, { ImagePropsSchema } from '@flyhub/email-block-image';
import Spacer, { SpacerPropsSchema } from '@flyhub/email-block-spacer';
import Text, { TextPropsSchema } from '@flyhub/email-block-text';

import { EmailLayoutPropsSchema } from '../blocks/EmailLayout/EmailLayoutPropsSchema';
import EmailLayoutReader from '../blocks/EmailLayout/EmailLayoutReader.vue';
// import ColumnsContainerPropsSchema from '../blocks/ColumnsContainer/ColumnsContainerPropsSchema';
// import ColumnsContainerReader from '../blocks/ColumnsContainer/ColumnsContainerReader';
// import { ContainerPropsSchema } from '../blocks/Container/ContainerPropsSchema';
// import ContainerReader from '../blocks/Container/ContainerReader';

import { BuildBlockComponent } from '@flyhub/email-document-core';
import type { TReaderProps } from '..';

defineProps<TReaderProps>()

// FIXME: use function buildblockconfigdictionary
const READER_DICTIONARY = {
  // ColumnsContainer: {
  //   schema: ColumnsContainerPropsSchema,
  //   Component: ColumnsContainerReader,
  // },
  // Container: {
  //   schema: ContainerPropsSchema,
  //   Component: ContainerReader,
  // },
  EmailLayout: {
    schema: EmailLayoutPropsSchema,
    Component: EmailLayoutReader,
  },
  Avatar: {
    schema: AvatarPropsSchema,
    Component: Avatar,
  },
  Button: {
    schema: ButtonPropsSchema,
    Component: Button,
  },
  Divider: {
    schema: DividerPropsSchema,
    Component: Divider,
  },
  Heading: {
    schema: HeadingPropsSchema,
    Component: Heading,
  },
  Html: {
    schema: HtmlPropsSchema,
    Component: Html,
  },
  Image: {
    schema: ImagePropsSchema,
    Component: Image,
  },
  Spacer: {
    schema: SpacerPropsSchema,
    Component: Spacer,
  },
  Text: {
    schema: TextPropsSchema,
    Component: Text,
  },
};
</script>
