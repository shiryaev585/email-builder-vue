<template>
  <RadioGroupInput
    :label="label"
    :model-value="modelValue ?? 'left'"
    :items="[
      { icon: 'material-symbols:vertical-align-top', value: 'top' },
      { icon: 'material-symbols:vertical-align-center', value: 'center' },
      { icon: 'material-symbols:vertical-align-bottom', value: 'right' },
    ]"
    @update:model-value="$emit('change', $event)"
  />
</template>

<script setup lang="ts">
import RadioGroupInput from './RadioGroupInput.vue';

type Props = {
  label: string,
  modelValue: string | null,
}

defineProps<Props>()

defineEmits<{
  (e: 'change', args: string): void
}>()
</script>
