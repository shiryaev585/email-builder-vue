<template>
  <UButton color="neutral" style="display: flex; flex-direction: column; align-items: center;">
    <UButton @click.prevent="$emit('click')">
      <!-- FIXME: style -->
      <UIcon :name="icon" style="font-size: 1.5rem" />
    </UButton>
    <span>{{ label }}</span>
  </UButton>
</template>

<script setup lang="ts">
type BlockMenuButtonProps = {
  label: string;
  icon: string;
}

defineEmits<{
  (e: 'click'): void
}>()

defineProps<BlockMenuButtonProps>()
</script>
