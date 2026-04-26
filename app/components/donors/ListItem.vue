<script setup>
defineProps({
    donor: Object
})
</script>

<template>
    <tr>
        <td>
            <div class="flex items-center gap-3">
                <div
                    class="w-10 h-10 rounded-lg bg-neutral-bg border border-neutral-border flex items-center justify-center p-1.5 flex-shrink-0">
                    <img :src="donor.logo" :alt="donor.name" class="w-full h-full object-contain">
                </div>
                <div>
                    <div class="font-bold text-navy text-sm">{{ donor.name }}</div>
                </div>
            </div>
        </td>
        <td>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB]">{{ donor.type }}</span>
        </td>
        <td>
            <div class="flex flex-wrap gap-1">
                <span v-for="field in donor.programs" :key="field" class="donor-tag"
                    style="font-size:0.68rem;padding:2px 8px;">{{ field }}</span>
            </div>
        </td>
        <td><span class="font-bold text-navy">{{ donor.grants_no }}</span> <span
                class="text-neutral-light text-xs">فرصة</span></td>
        <td>
            <button class="text-xs font-bold text-jgreen hover:text-jgreen-dark flex items-center gap-1">
                التفاصيل
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="m12 19-7-7 7-7" />
                </svg>
            </button>
        </td>
    </tr>
</template>