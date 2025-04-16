<template>
  <HighlightedCodePanel type="html" :value="code" />
</template>

<script setup lang="ts">
import { renderToStaticMarkup } from '@usewaypoint/email-builder'
import { useInspectorDrawer } from '../../documents/editor/editor.store'

const inspectorDrawer = useInspectorDrawer()

const code = computed(() => {
  return renderToStaticMarkup(inspectorDrawer.document, {
    rootBlockId: 'root'
  })
})
</script>

