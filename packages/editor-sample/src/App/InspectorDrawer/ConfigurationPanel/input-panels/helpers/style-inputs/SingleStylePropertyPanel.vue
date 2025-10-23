<template>
  <NullableColorInput v-if="name === 'backgroundColor'" label="Цвет фона" :default-value="defaultValue" @change="handleChange" />
  <NullableColorInput v-else-if="name === 'borderColor'" label="Цвет границы" :default-value="defaultValue" @change="handleChange" />
  <SliderInput
    v-else-if="name === 'borderRadius'"
    icon-label="material-symbols:rounded-corner"
    label="Скругление границы"
    :default-value="defaultValue"
    :step="4"
    :min="0"
    :max="48"
    @change="handleChange"
  />
  <NullableColorInput v-else-if="name === 'color'" label="Цвет текста" :default-value="defaultValue" @change="handleChange" />
  <NullableFontFamily v-else-if="name === 'fontFamily'" label="Шрифт" :default-value="defaultValue" @change="handleChange" />
  <FontSizeInput v-else-if="name === 'fontSize'" label="Размер шрифта" :model-value="defaultValue" @change="handleChange" />
  <FontWeightInput v-else-if="name === 'fontWeight'" label="Жирность шрифта" :model-value="defaultValue" @change="handleChange" />
  <TextAlignInput v-else-if="name === 'textAlign'" label="Выравнивание" :model-value="defaultValue" @change="handleChange" />
  <PaddingInput v-else-if="name === 'padding'" label="Внутренний отступ" :model-value="defaultValue" @change="handleChange" />
</template>

<script setup lang="ts">
import type { TStyle } from '../../../../../../documents/blocks/helpers/TStyle';
import NullableColorInput from '../inputs/ColorInput/NullableColorInput.vue';
import NullableFontFamily from '../inputs/NullableFontFamily.vue';
import FontSizeInput from '../inputs/FontSizeInput.vue';
import FontWeightInput from '../inputs/FontWeightInput.vue';
import TextAlignInput from '../inputs/TextAlignInput.vue';
import PaddingInput from '../inputs/PaddingInput.vue';
import SliderInput from '../inputs/SliderInput.vue';
import { computed } from 'vue';

type StylePropertyPanelProps = {
  name: keyof TStyle,
  modelValue: TStyle,
}

const props = defineProps<StylePropertyPanelProps>()

const emit = defineEmits<{
  (e: 'update:model-value', args: TStyle): void
}>()

/** Computed */

const defaultValue = computed(() => props.modelValue[props.name] ?? null)

/** Functions */

function handleChange(newValue: unknown) {
  emit('update:model-value', {
    ...props.modelValue,
    [props.name]: newValue,
  })
}
</script>
