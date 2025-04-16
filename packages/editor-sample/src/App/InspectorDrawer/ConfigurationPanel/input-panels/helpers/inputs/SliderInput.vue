<template>
  <UFormField :label="label">
    <RawSliderInput
      v-bind="rest"
      :model-value="value"
      @update:model-value="handleChange"
    />
  </UFormField>
</template>

<script setup lang="ts">
import RawSliderInput from './raw/RawSliderInput.vue';
import { computed, ref } from 'vue';

type Props = {
  label: string,
  iconLabel: string,

  step?: number,
  marks?: boolean,
  units?: string,
  min?: number,
  max?: number,

  defaultValue: number,
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'change', args: number): void
}>()

/** Refs */

const value = ref(props.defaultValue)

/** Computed */

const rest = computed(() => {
  const { label: _, ...rest } = props;

  return rest
})

/** Functions */

function handleChange(newValue: number) {
  value.value = newValue;
  emit('change', newValue);
}
</script>
