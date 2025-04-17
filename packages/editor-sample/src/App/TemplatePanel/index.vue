<template>
  <UTabs :items="tabs" variant="link" class="h-full" :ui="{ content: 'h-full' }">
    <template #editor>
      <!-- FIXME: copy style mobile from original -->
      <div :style="mainBoxStyle">
        <EditorBlock id="root" />
      </div>
    </template>
    <template #preview>
      <!-- <div :style="mainBoxStyle"> -->
      <!--   <Reader :document="document" root-block-id="root" /> -->
      <!-- </div> -->
    </template>
    <template #html>
      <!-- <HtmlPanel /> -->
    </template>
    <template #json>
      <!-- <JsonPanel /> -->
    </template>
  </UTabs>
</template>

<script setup lang="ts">
import EditorBlock from '../../documents/editor/EditorBlock.vue'
import { computed } from 'vue'
// FIXME: implement
// import HtmlPanel from './HtmlPanel.vue'
// FIXME: implement
// import JsonPanel from './JsonPanel.vue'
// FIXME: implement
// import Reader from '../../packages/email-builder/Reader/core.vue'
import { useInspectorDrawer } from '../../documents/editor/editor.store'
// FIXME: implement
// import ShareButton from './ShareButton.vue'

// FIXME: implement handleChangeSelectedScreenSize

const inspectorDrawer = useInspectorDrawer()

const tabs = [
  {
    icon: 'material-symbols:edit-outline',
    slot: 'editor' as const
  },
  {
    icon: 'material-symbols:preview-outline',
    slot: 'preview' as const
  },
  {
    icon: 'material-symbols:code',
    slot: 'html' as const
  },
  {
    icon: 'material-symbols:data-object',
    slot: 'json' as const
  }
]

const mainBoxStyle = computed(() => {
  const baseStyle = {
    height: '100%',
  }

  if (inspectorDrawer.selectedScreenSize === 'mobile') {
    return {
      ...baseStyle,
      margin: '32px auto',
      width: 370,
      height: 800,
      boxShadow: 'rgba(33, 36, 67, 0.04) 0px 10px 20px, rgba(33, 36, 67, 0.04) 0px 2px 6px, rgba(33, 36, 67, 0.04) 0px 0px 1px',
    }
  }

  return baseStyle
})
</script>
