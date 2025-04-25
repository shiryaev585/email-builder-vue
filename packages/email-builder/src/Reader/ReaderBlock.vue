<template>
  <component :is="instance" v-if="instance" v-bind="data" />
</template>

<script setup lang="ts">
import type { TReaderBlockProps } from '..';
import { computed } from 'vue';

import Avatar, { AvatarPropsSchema } from '@flyhub/email-block-avatar';
import Button, { ButtonPropsSchema } from '@flyhub/email-block-button';
import Divider, { DividerPropsSchema } from '@flyhub/email-block-divider';
import Heading, { HeadingPropsSchema } from '@flyhub/email-block-heading';
import Html, { HtmlPropsSchema } from '@flyhub/email-block-html';
import Image, { ImagePropsSchema } from '@flyhub/email-block-image';
import Spacer, { SpacerPropsSchema } from '@flyhub/email-block-spacer';
import Text, { TextPropsSchema } from '@flyhub/email-block-text';

import ColumnsContainerPropsSchema from '../blocks/ColumnsContainer/ColumnsContainerPropsSchema';
import ColumnsContainerReader from '../blocks/ColumnsContainer/ColumnsContainerReader.vue';

const props = defineProps<TReaderBlockProps>();

const instance = computed(() => {
  const block = props.block;

  if (!block) return undefined;

  // @ts-expect-error Element implicitly has an 'any'
  // FIXME: create function which converts into key: value
  return READER_DICTIONARY[block.type].Component;
})

const data = computed(() => {
  const block = props.block;

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
