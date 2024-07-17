<template>
    <div>
        <el-input-number :model-value="quantity" :min="0" :max="stock" @change="handleChange" />
    </div>
</template>

<script lang="ts" setup>
import { ElInputNumber } from 'element-plus';

const props = defineProps({
  stock: {type: Number, required: true},
  productId: {type: String, required: true},
  quantity: {type: Number, required: false}
});

const emit = defineEmits<{
  remove: [id: string],
  update: [quantity: number],
}>();

const handleChange = (value: number) => {
  emit('update', value);

  if (value === 0) {
    emit('remove', props.productId);
  }
}

</script>
