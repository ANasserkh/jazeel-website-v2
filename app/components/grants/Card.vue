<script setup>
import { format } from 'date-fns';

 defineProps({
    grant: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <NuxtLink :to="`/grants/${grant.id}?internal=${grant.is_from_portal}`" class="grant-card">
        <div class="grant-card-head-area">
            <div class="grant-card-donor-row">
                <div class="grant-card-logo"><img :src="grant.donor_img" :alt="grant.donor_name"></div>
                <div class="grant-card-donor-info">
                    <div class="grant-card-donor-name">{{ grant.donor_name }}</div>
                    <div class="grant-card-badges">
                        <GrantsStatusBadge status :deadline="grant.deadline" :remaining="grant.remaining" />
                    </div>
                </div>
            </div>
        </div>
        <div class="grant-card-body">
            <h3 class="grant-card-title">{{ grant.title }}</h3>
            <p class="grant-card-desc" v-html="grant.description"></p>
            <div class="grant-card-tags">
                <span class="grant-tag" v-for="program in grant.programs"> {{ program.name }} </span>
            </div>
            <div class="grant-card-meta">
                <div class="grant-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <rect width="18" height="18" x="3" y="4" rx="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <strong>{{ grant.deadline === null ? 'مفتوحة' : format(grant.deadline, 'dd/MM/yyyy') }}</strong>
                </div>
                <div v-if="grant.remaining" class="grant-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    متبقي <strong> {{ grant.remaining }} يوم</strong>
                </div>
                <div class="grant-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <template v-if="grant.countries.length > 1">
                        {{ grant.countries.length }} منطقة
                    </template>
                    <template v-if="grant.countries.length == 1">
                        {{ grant.countries[0] }}
                    </template>
                </div>
                <div v-if="grant.is_from_portal" class="grant-meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                    </svg>
                    التقديم عبر جزيل
                </div>
            </div>
        </div>
        <div class="grant-card-footer">
            <span class="grant-card-cta grant-card-cta-primary">عرض التفاصيل</span>
        </div>
    </NuxtLink>
</template>