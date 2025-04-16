<template>
  <BaseSidebarPanel title="Html block">
    <UFormField label="Content">
      <UInput
        :model-value="data.props?.contents ?? ''"
        @update:model-value="handleUpdateData({ ...data, props: { ...data.props, contents: $event as string } })"
      />
      <MultiStylePropertyPanel
        :names="['color', 'backgroundColor', 'fontFamily', 'fontWeight', 'textAlign', 'padding']"
        :model-value="data.style"
        @update:model-value="handleUpdateData({ ...data, style: $event })"
      />
  </uformfield></BaseSidebarPanel>
</template>

<script setup lang="ts">
import BaseSidebarPanel from './helpers/BaseSidebarPanel.vue';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel.vue';
import type { HtmlProps} from '@flyhub-dev/block-html/index.vue';
import { HtmlPropsSchema } from '@flyhub-dev/block-html/index.vue';
import { ref } from 'vue';

type HtmlSidebarPanelProps = {
  data: HtmlProps
}

defineProps<HtmlSidebarPanelProps>()

const emit = defineEmits<{
  (e: 'update:data', args: HtmlProps): void
}>()

/** Refs */

const errors = ref<Zod.ZodError | null>(null)

/** Functions */

function handleUpdateData(data: unknown) {
  const res = HtmlPropsSchema.safeParse(data);

  if (res.success) {
    emit('update:data', res.data);
    errors.value = null;
  } else {
    errors.value = res.error;
  }
}
</script>
