<template>
  <UAlert v-if="!block" type="warning" title="Block not found" />
  <UAlert v-else-if="block.type !== 'EmailLayout'" type="warning" title='Expected "root" element to be of type "EmailLayout"' />
  <EmailLayoutSidebarPanel v-else :data="block.data" @update:data="handleUpdateData" />
</template>

<script setup lang="ts">
import { useInspectorDrawer } from '../../documents/editor/editor.store';
import { computed } from 'vue';
import EmailLayoutSidebarPanel from './ConfigurationPanel/input-panels/EmailLayoutSidebarPanel.vue';

const inspectorDrawer = useInspectorDrawer()

const block = computed(() => inspectorDrawer.document.root)

/** Functions */

// FIXME: type
function handleUpdateData(data: any) {
  inspectorDrawer.setDocument({
    root: {
      type: block.value.type,
      data,
    }
  })
}

</script>
