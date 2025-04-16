<template>
  <UDropdownMenu v-model:open="open" arrow :items="BUTTONS">
    <slot />

    <template #item="{ item }">
      <BlockButton
        :label="item.label"
        :icon="item.icon"
        @click="handleClick(item)"
      />
    </template>
  </UDropdownMenu>
</template>

<script setup lang="ts">
import type { TEditorBlock } from '../../editor/core';
import { BUTTONS } from './buttons';
import BlockButton from './BlockButton.vue';
import { ref, watch } from 'vue';

const open = ref(false)

const emit = defineEmits<{
  (e: 'select', args: TEditorBlock): void
  (e: 'open', args: boolean): void
}>()

/** Functions */

function handleClick(item: typeof BUTTONS[number]) {
  const block = item.block()
  emit('select', block)
}

/** Watch */

watch(open, () => {
  emit('open', open.value)
})
</script>
