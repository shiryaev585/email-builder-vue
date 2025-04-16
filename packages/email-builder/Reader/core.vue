<template>
  <!-- FIXME: check all types -->
  <BuildBlockComponent :blocks="READER_DICTIONARY" v-bind="document[rootBlockId]"  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { Avatar, AvatarPropsSchema } from '@usewaypoint/block-avatar';
import { Button, ButtonPropsSchema } from '@usewaypoint/block-button';
import { Divider, DividerPropsSchema } from '@usewaypoint/block-divider';
import { Heading, HeadingPropsSchema } from '@usewaypoint/block-heading';
import { Html, HtmlPropsSchema } from '@usewaypoint/block-html';
import { Image, ImagePropsSchema } from '@usewaypoint/block-image';
import { Spacer, SpacerPropsSchema } from '@usewaypoint/block-spacer';
import { Text, TextPropsSchema } from '@usewaypoint/block-text';

import { ColumnsContainer as ColumnsContainerReader, ColumnsContainerPropsSchema } from '@usewaypoint/block-columns-container';
import { Container as ContainerReader, ContainerPropsSchema } from '@usewaypoint/block-container';
import { EmailLayoutPropsSchema } from '../blocks/EmailLayout/EmailLayoutPropsSchema';
import BuildBlockComponent from '../../document-core/BuildBlockComponent.vue';
import type { TReaderProps } from '@usewaypoint/email-builder';

defineProps<TReaderProps>()

// FIXME: use function buildblockconfigdictionary
const READER_DICTIONARY = {
  ColumnsContainer: {
    schema: ColumnsContainerPropsSchema,
    // Component: get('./ColumnsContainerReader.vue'),
    Component: ColumnsContainerReader,
  },
  Container: {
    schema: ContainerPropsSchema,
    // Component: get('./ContainerReader.vue'),
    Component: ContainerReader,
  },
  EmailLayout: {
    schema: EmailLayoutPropsSchema,
    // Component: get('./EmailLayoutReader.vue'),
    Component: EmailLayoutReader,
  },
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
