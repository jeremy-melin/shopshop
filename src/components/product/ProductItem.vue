<template>
    <div>
        {{ product?.name }} - {{  product?.price }}€
    </div>
</template>
<script setup lang="ts">
    defineProps({
        product: Object
    });
</script>
