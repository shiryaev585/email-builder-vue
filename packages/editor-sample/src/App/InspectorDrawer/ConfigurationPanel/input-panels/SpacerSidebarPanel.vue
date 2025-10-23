<template>
  <BaseSidebarPanel title="Блок разделителя">
    <SliderInput
      label="Высота"
      icon-label="material-symbols:height"
      units="px"
      :step="4"
      :min="4"
      :max="128"
      :default-value="data.props?.height ?? SpacerPropsDefaults.height"
      @change="handleUpdateData({ ...data, props: { ...data.props, height: $event } })"
    />
  </BaseSidebarPanel>
</template>

<script setup lang="ts">
import BaseSidebarPanel from './helpers/BaseSidebarPanel.vue';
import SliderInput from './helpers/inputs/SliderInput.vue';
import type { SpacerProps } from '@flyhub/email-block-spacer';
import { SpacerPropsSchema, SpacerPropsDefaults } from '@flyhub/email-block-spacer';
import { ref } from 'vue';
import Zod from 'zod';

type SpacerSidebarPanelProps = {
  data: SpacerProps
};

defineProps<SpacerSidebarPanelProps>();

const emit = defineEmits<{
  (e: 'update:data', args: SpacerProps): void;
}>();

/** Refs */

const errors = ref<Zod.ZodError | null>(null);

/** Functions */

function handleUpdateData(data: unknown) {
  const res = SpacerPropsSchema.safeParse(data);

  if (res.success) {
    emit('update:data', res.data);
    errors.value = null;
  }
  else {
    errors.value = res.error;
  }
};
</script>
