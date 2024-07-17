<template>
    <div>
        {{ product?.name }}
    </div>
</template>
<script setup lang="ts">
    defineProps({
        product: Object
    });
</script>
