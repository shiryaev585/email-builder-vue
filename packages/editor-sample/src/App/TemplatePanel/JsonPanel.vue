<template>
  <HighlightedCodePanel type="json" :value="code" />
</template>

<script setup lang="ts">
import { useInspectorDrawer } from '../../documents/editor/editor.store'

const inspectorDrawer = useInspectorDrawer()

const code = computed(() => {
  return JSON.stringify(inspectorDrawer.document, null, '  ')
})
</script>
