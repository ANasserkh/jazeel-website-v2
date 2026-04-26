<script setup>
defineProps({
    donor: Object
})
</script>
<template>

    <div class="donor-card reveal visible">
        <div class="flex items-start gap-4 mb-4">
            <div class="donor-logo-wrap">
                <img :src="donor.logo" :alt="donor.name" class="w-full h-full object-contain">
            </div>
            <div class="flex-1 min-w-0">
                <h3 class="text-base font-bold text-navy mb-0.5 truncate">{{ donor.name }}</h3>
                <p class="text-xs text-neutral-text truncate">{{ donor.subtitle }}</p>
                <span
                    class="inline-block mt-1.5 text-[0.68rem] font-bold px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB]">{{
                        donor.type }}</span>
            </div>
        </div>
        <p class="text-sm text-neutral-text leading-relaxed mb-4 line-clamp-2">{{ donor.description }}</p>
        <div class="flex flex-wrap gap-1.5 mb-4">
            <span v-for="field in donor.programs" :key="field" class="donor-tag">{{ field }}</span>
        </div>
        <div class="flex items-center justify-between pt-3 border-t border-neutral-border/40">
            <div class="flex gap-3">
                <div class="stat-mini">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span><strong class="text-navy">{{ donor.grants_no }}</strong> فرصة</span>
                </div>
                <!-- <div class="stat-mini">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{{ donor.region }}</span>
                </div> -->
            </div>
            <span class="mt-auto text-xs font-bold text-jgreen flex items-center gap-1">
                عرض التفاصيل
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="m12 19-7-7 7-7" />
                </svg>
            </span>
        </div>
    </div>
</template>