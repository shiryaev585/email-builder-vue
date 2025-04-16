<template>
  <UDrawer
    :open="inspectorDrawer.inspectorDrawerOpen"
    direction="right"
    :overlay="false" 
    :handle="false"
    :dismissible="false"
    :modal="false"
    fixed
  >
    <template #body>
      <UTabs
        :items="tabs"
        :style="{
          '--drawer-width': `${INSPECTOR_DRAWER_WIDTH}px`,
        }"
        class="w-[var(--drawer-width)]">
        <template #styles>
          <StylesPanel />
        </template>
        <template #inspect>
          <ConfigurationPanel />
        </template>
      </UTabs>
    </template>
  </UDrawer>
</template>

<script setup lang="ts">
import { useInspectorDrawer } from '../../documents/editor/editor.store';
import StylesPanel from './StylesPanel.vue';
import ConfigurationPanel from './ConfigurationPanel/index.vue';

const INSPECTOR_DRAWER_WIDTH = 300

const tabs = [
  {
    label: 'Styles',
    slot: 'styles' as const
  },
  {
    label: 'Inspect',
    slot: 'inspect' as const
  }
]

const inspectorDrawer = useInspectorDrawer()
</script>
