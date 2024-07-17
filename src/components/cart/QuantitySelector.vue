<template>
    <div>
        <el-input-number v-model="num" :min="0" :max="stock" @change="handleChange" />
    </div>
</template>

<script lang="ts" setup>
import { ElInputNumber } from 'element-plus';
import { ref } from 'vue';

const props = defineProps({
  stock: {type: Number, required: true},
  productId: {type: Number, required: true}
});

const emit = defineEmits<{
  remove: [id: number]
}>();

const num = ref(1);
const handleChange = (value: number) => {
  if (value === 0) {
    emit('remove', props.productId);
  }
}

</script>
