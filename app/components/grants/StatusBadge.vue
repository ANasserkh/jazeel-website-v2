<script setup >
const { deadline, remaining, status } = defineProps({
    deadline: Date | String,
    remaining: Number,
    status: Boolean
})

const isOpen = computed(() => {
    return deadline == null || remaining > 3
});

const closed = computed(() => {
    return deadline != null || remaining <= 0
});


const statusClass = computed(() => {
    if (deadline == null || remaining > 3) return status ? 'grant-status-open' : 'gd-badge-open';

    if (deadline != null || remaining <= 0) return status ? 'grant-status-closed' : 'gd-badge-closed';

    if (deadline != null || (remaining <= 3 && remaining > 0)) return status ? 'grant-status-closing' : 'gd-badge-closing';
});

</script>
<template>
    <span :class="`${status ? 'grant-status' : 'gd-badge'} ${statusClass}`">
        {{ deadline == null || deadline > 0 ? 'مفتوحة' : 'مغلقة' }}
    </span>
</template>