<template>
  <ReaderBlock v-for="childId in childrenIds" :key="childId" :id="childId" />
</template>

<script lang="ts">
export type EditorChildrenChange = {
  childrenIds: string[]
}
</script>

<script setup lang="ts">
import ReaderBlock from '../Reader/ReaderBlock.vue'

type EditorChildrenIdsProps = {
  childrenIds: string[] | null | undefined
}

defineProps<EditorChildrenIdsProps>()
</script>
