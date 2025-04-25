<template>
  <!-- FIXME: check all types -->
  <BuildBlockComponent :blocks="READER_DICTIONARY" v-bind="document[rootBlockId]"  />
</template>

<script setup lang="ts">
import Avatar, { AvatarPropsSchema } from '@flyhub-dev/block-avatar';
import Button, { ButtonPropsSchema } from '@flyhub-dev/block-button';
import Divider, { DividerPropsSchema } from '@flyhub-dev/block-divider';
import Heading, { HeadingPropsSchema } from '@flyhub-dev/block-heading';
import Html, { HtmlPropsSchema } from '@flyhub-dev/block-html';
import Image, { ImagePropsSchema } from '@flyhub-dev/block-image';
import Spacer, { SpacerPropsSchema } from '@flyhub-dev/block-spacer';
import Text, { TextPropsSchema } from '@flyhub-dev/block-text';

import { EmailLayoutPropsSchema } from '../blocks/EmailLayout/EmailLayoutPropsSchema';
import EmailLayoutReader from '../blocks/EmailLayout/EmailLayoutReader.vue';
// import ColumnsContainerPropsSchema from '../blocks/ColumnsContainer/ColumnsContainerPropsSchema';
// import ColumnsContainerReader from '../blocks/ColumnsContainer/ColumnsContainerReader';
// import { ContainerPropsSchema } from '../blocks/Container/ContainerPropsSchema';
// import ContainerReader from '../blocks/Container/ContainerReader';

import BuildBlockComponent from '../../document-core/BuildBlockComponent.vue';
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
