<template>
  <div :style="style" />
</template>

<script lang="ts">
import { z } from 'zod';
import { computed } from 'vue';

export const SpacerPropsSchema = z.object({
  props: z
    .object({
      height: z.number().gte(0).optional().nullish(),
    })
    .optional()
    .nullable(),
});

export type SpacerProps = {
  props?: {
    height?: number | null,
  } | null,
}

export const SpacerPropsDefaults = {
  height: 16,
};
</script>

<script setup lang="ts">
const props = defineProps<SpacerProps>()

const style = computed(() => ({
  height: props.props?.height ?? SpacerPropsDefaults.height,
}))
</script>
