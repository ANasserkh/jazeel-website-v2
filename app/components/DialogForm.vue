<script setup>

defineProps({
    title: String,
    subtitle: String,
});

const dialog = defineModel({ default: false });

watch(dialog, (val) => {

    if (val) {

        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';

    }

})
const modal = ref(null)
function closeModal(e) {

    if (getData(e.target) === getData(modal.value))
        dialog.value = false;
}

function getData(el) {
    const attrNames = el.getAttributeNames();
    const dataVAttr = attrNames.find(name => name.startsWith('data-v-'));
    if (dataVAttr) {
        return el.getAttribute(dataVAttr);
    }
    return null;
}
</script>
<template>
    <div ref="modal" @click="closeModal" class="fixed inset-0 z-[100] items-center justify-center" :class="{
        hidden: !dialog,
        flex: dialog
    }" style="background:rgba(7,19,63,0.4);backdrop-filter:blur(4px);">
        <div class="bg-white rounded-2xl shadow-sys-lg w-full max-w-md mx-4 p-7 sm:p-8 relative"
            style="animation:fadeUp 0.3s ease;">
            <button @click="dialog = !dialog"
                class="absolute top-4 left-4 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-neutral-bg transition-colors">
                <svg width="18" height="18" fill="none" stroke="#5B6470" stroke-width="2">
                    <path d="M5 5l8 8M13 5l-8 8" />
                </svg>
            </button>
            <h3 class="tex-xl font-extrabold text-navy mb-1">{{ title }}</h3>
            <p class="text-[0.9375rem] text-jgreen font-semibold mb-6">{{ subtitle }}</p>

            <slot></slot>
        </div>
    </div>
</template>