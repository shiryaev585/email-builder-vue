<template>
  <button>
    importar (implemnetar botão com tooltip, buscar por "Import JSON" ocmo texto)
  </button>

  <ImportJsonDialog v-model="open" />
</template>

<script setup lang="ts">
import ImportJsonDialog from './ImportJsonDialog.vue'
import { ref } from 'vue'

const open = ref(false)
</script>
