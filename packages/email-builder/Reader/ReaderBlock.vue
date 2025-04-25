<template>
  <component :is="instance" v-if="instance" v-bind="data" />
</template>

<script setup lang="ts">
import type { TReaderBlockProps } from '..';
import { computed } from 'vue';

import Avatar, { AvatarPropsSchema } from '@flyhub-dev/block-avatar';
import Button, { ButtonPropsSchema } from '@flyhub-dev/block-button';
import Divider, { DividerPropsSchema } from '@flyhub-dev/block-divider';
import Heading, { HeadingPropsSchema } from '@flyhub-dev/block-heading';
import Html, { HtmlPropsSchema } from '@flyhub-dev/block-html';
import Image, { ImagePropsSchema } from '@flyhub-dev/block-image';
import Spacer, { SpacerPropsSchema } from '@flyhub-dev/block-spacer';
import Text, { TextPropsSchema } from '@flyhub-dev/block-text';

import ColumnsContainerPropsSchema from '../blocks/ColumnsContainer/ColumnsContainerPropsSchema';
import ColumnsContainerReader from '../blocks/ColumnsContainer/ColumnsContainerReader.vue';

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

  return block.data;
});

const READER_DICTIONARY = {
  // FIXME: implement
  ColumnsContainer: {
    schema: ColumnsContainerPropsSchema,
    Component: ColumnsContainerReader,
  },
  // FIXME: implement
  // Container: {
  //   schema: ContainerPropsSchema,
  //   Component: ContainerReader,
  // },
  // FIXME: implement
  // EmailLayout: {
  //   schema: EmailLayoutPropsSchema,
  //   Component: EmailLayoutReader,
  // },
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
