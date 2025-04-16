<template>
  <td v-if="columnsCount !== 2 || index !== 2" :style="style">
    <slot />
  </td>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ColumnsContainerPropsDefaults, FIXED_WIDTHS_SCHEMA } from './index.vue';

type Props = {
  index: number,
  props: {
    fixedWidths: z.infer<typeof FIXED_WIDTHS_SCHEMA>;
    columnsCount: 2 | 3;
    columnsGap: number;
    contentAlignment: 'top' | 'middle' | 'bottom';
  }
}

const props = defineProps<Props>()

const contentAlignment = computed(() => props.props?.contentAlignment ?? ColumnsContainerPropsDefaults.contentAlignment)
const columnsCount = computed(() => props.props?.columnsCount ?? ColumnsContainerPropsDefaults.columnsCount)

const style = computed(() => ({
  boxSizing: 'content-box',
  verticalAlign: contentAlignment.value,
  paddingLeft: getPaddingBefore(props.index, props.props) + 'px',
  paddingRight: getPaddingAfter(props.index, props.props) + 'px',
  width: props.props.fixedWidths?.[index] ?? undefined,
})) 

/** Functions */

function getPaddingBefore(index: number, { columnsGap, columnsCount }: ColumnsContainerProps['props']) {
  if (index === 0) {
    return 0;
  }
  if (columnsCount === 2) {
    return columnsGap / 2;
  }
  if (index === 1) {
    return columnsGap / 3;
  }
  return (2 * columnsGap) / 3;
}

function getPaddingAfter(index: number, { columnsGap, columnsCount }: ColumnsContainerProps['props']) {
  if (columnsCount === 2) {
    if (index === 0) {
      return columnsGap / 2;
    }
    return 0;
  }

  if (index === 0) {
    return (2 * columnsGap) / 3;
  }
  if (index === 1) {
    return columnsGap / 3;
  }
  return 0;
}

</script>
