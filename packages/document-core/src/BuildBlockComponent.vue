<template>
  <component :is="blocks[type].Component" v-bind="data" />
</template>

<script setup generic="T extends BaseZodDictionary" lang="ts">
import type { BaseZodDictionary, /*BlockConfiguration,*/ DocumentBlocksDictionary } from './utils';

defineProps<{ blocks: DocumentBlocksDictionary<T>, type: any, data: any }>()

// FIXME: types
// defineProps<{
//   blocks: DocumentBlocksDictionary<T>;
// } & BlockConfiguration<T>>(
</script>
