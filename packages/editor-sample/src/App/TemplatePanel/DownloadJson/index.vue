<template>
  <a :href="href" download="emailTemplate.json">
    <button>
      baixar (implemnetar botão com tooltip, buscar por "emailTemplate.json" ocmo texto)
    </button>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useInspectorDrawer } from '../../../documents/editor/editor.store'

const inspectorDrawer = useInspectorDrawer()

const href = computed(() => {
  const doc = inspectorDrawer.document
  return `data:text/plain,${encodeURIComponent(JSON.stringify(doc, null, '  '))}`;
})
</script>
