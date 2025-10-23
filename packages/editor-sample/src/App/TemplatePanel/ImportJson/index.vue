<template>
  <UModal v-model:open="open" title="Импорт JSON" :ui="{ close: 'cursor-pointer' }">
    <UTooltip text="Импорт JSON">
      <UButton
        variant="ghost"
        color="neutral"
        icon="material-symbols:upload"
        class="cursor-pointer"
      />
    </UTooltip>

    <template #body>
      <div class="space-y-4">
        <p>
          Скопируйте и вставьте JSON-файл (<a
            href="https://gist.githubusercontent.com/jordanisip/efb61f56ba71bd36d3a9440122cb7f50/raw/30ea74a6ac7e52ebdc309bce07b71a9286ce2526/emailBuilderTemplate.json"
            target="_blank"
            class="text-blue-500 hover:underline"
          >пример</a>).
        </p>

        <UAlert v-if="error" variant="subtle" color="error" :title="error" />

        <form @submit.prevent="handleSubmit">
          <UTextarea
            variant="outline"
            required
            :highlight="error !== null"
            :color="error ? 'error' : 'neutral'"
            :rows="10"
            class="w-full"
            @update:model-value="handleChange"
          />
        </form>

        <p class="text-xs mt-2">Это перезапишет Ваш текущий шаблон.</p>

      </div>
    </template>

    <template #footer>
      <div class="flex justify-end w-full gap-2">
        <UButton variant="ghost" color="neutral" label="Отмена" @click="open = false" class="cursor-pointer" />
        <UButton label="Импорт" @click="handleSubmit" :disabled="error !== null" class="cursor-pointer" />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useInspectorDrawer } from '../../../documents/editor/editor.store';
import validateJsonStringValue from './validateJsonStringValue';

const inspectorDrawer = useInspectorDrawer();

/** Refs */

const value = ref('');
const error = ref<string | null>(null);
const open = ref(false);

/** Functions */

function handleChange(v: string) {
  value.value = v; 
  error.value = validateJsonStringValue(v).error ?? null;
};

function handleSubmit() {
  const { error: err, data } = validateJsonStringValue(value.value);
  error.value = err ?? null;

  if (!data) return;

  inspectorDrawer.resetDocument(data);
  open.value = false;
};
</script>
