<template>
  <component :is="instance" v-if="instance" v-bind="data" />
</template>

<script setup lang="ts">
import type { TReaderBlockProps } from '..';
import { computed, provide } from 'vue';

import Avatar, { AvatarPropsSchema } from '@flyhub-dev/block-avatar';
import Button, { ButtonPropsSchema } from '@flyhub-dev/block-button';
import Divider, { DividerPropsSchema } from '@flyhub-dev/block-divider';
import Heading, { HeadingPropsSchema } from '@flyhub-dev/block-heading';
import Html, { HtmlPropsSchema } from '@flyhub-dev/block-html';
import Image, { ImagePropsSchema } from '@flyhub-dev/block-image';
import Spacer, { SpacerPropsSchema } from '@flyhub-dev/block-spacer';
import Text, { TextPropsSchema } from '@flyhub-dev/block-text';

// import { ColumnsContainer as ColumnsContainerReader, ColumnsContainerPropsSchema } from '@flyhub-dev/block-columns-container';
// import { Container as ContainerReader, ContainerPropsSchema } from '@flyhub-dev/block-container';
import { EmailLayoutPropsSchema } from '../blocks/EmailLayout/EmailLayoutPropsSchema';
import { useInspectorDrawer } from '../../editor-sample/src/documents/editor/editor.store';

const props = defineProps<TReaderBlockProps>();

// FIXME: use a context similar to react's useContext, embeding the ReaderBlock
const inspectorDrawer = useInspectorDrawer();

const instance = computed(() => {
  const block = inspectorDrawer.document[props.id];

  if (!block) return undefined;

// FIXME: create function which converts into key: value
  return READER_DICTIONARY[block.type].Component;
})

const data = computed(() => {
  const block = inspectorDrawer.document[props.id];

  if (!block) return undefined;

// FIXME: returns block.data or block?
  return block.data;
});

const READER_DICTIONARY = {
  // ColumnsContainer: {
  //   schema: ColumnsContainerPropsSchema,
  //   // Component: get('./ColumnsContainerReader.vue'),
  //   Component: ColumnsContainerReader,
  // },
  // Container: {
  //   schema: ContainerPropsSchema,
  //   // Component: get('./ContainerReader.vue'),
  //   Component: ContainerReader,
  // },
  // EmailLayout: {
  //   schema: EmailLayoutPropsSchema,
  //   // Component: get('./EmailLayoutReader.vue'),
  //   Component: EmailLayoutReader,
  // },
  Avatar: {
    schema: AvatarPropsSchema,
    // Component: get('./Avatar.vue'),
    Component: Avatar,
  },
  Button: {
    schema: ButtonPropsSchema,
    // Component: get('./Button.vue'),
    Component: Button,
  },
  Divider: {
    schema: DividerPropsSchema,
    // Component: get('./Divider.vue'),
    Component: Divider,
  },
  Heading: {
    schema: HeadingPropsSchema,
    // Component: get('./Heading.vue'),
    Component: Heading,
  },
  Html: {
    schema: HtmlPropsSchema,
    // Component: get('./Html.vue'),
    Component: Html,
  },
  Image: {
    schema: ImagePropsSchema,
    // Component: get('./Image.vue'),
    Component: Image,
  },
  Spacer: {
    schema: SpacerPropsSchema,
    // Component: get('./Spacer.vue'),
    Component: Spacer,
  },
  Text: {
    schema: TextPropsSchema,
    // Component: get('./Text.vue'),
    Component: Text,
  },
};
</script>
