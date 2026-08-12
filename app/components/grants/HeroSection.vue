<script setup lang="ts">

defineProps<{
    total?: number
}>()
const search = defineModel();
const config = useRuntimeConfig();


const route = useRoute();


const calender = computed(() => {
    return route.path.search("calender") > 0;
})

const { data: stats } = await useFetch<any>(`${config.public.apiBase}/grants/stats`);

const months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
]

const currentMonth = computed(() => {
    const now = new Date();
    return months[now.getMonth()];
})
</script>
<template>
    <section class="grants-hero pt-10">
        <div class="jz-container">
            <div class="grants-hero-content">
                <template v-if="calender">
                    <h1>رزنامة جزيل <span class="block">لشهر {{ currentMonth }}</span></h1>
                    <p class="grants-hero-desc">استكشف فرص التمويل والدعم المتاحة في المملكة، وابدأ رحلة التقديم بخطوات
                        واثقة وكفاءة عالية.</p>

                    <div class="grants-stats">
                        <div class="grants-stat">
                            <div class="grants-stat-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>
                            <div>
                                <div class="grants-stat-num">{{ total ?? 0 }}</div>
                                <div class="grants-stat-label">فرصة نشطة</div>
                            </div>
                        </div>

                        <nuxt-link to="/grants" class="btn-primary ">
                            تصفح المزيد من المنح
                        </nuxt-link>
                    </div>
                </template>

                <template v-else>
                    <h1>اكتشف فرص المنح <span>المناسبة لمنظمتك</span></h1>
                    <p class="grants-hero-desc">منصة مركزية تجمع فرص التمويل والدعم من أبرز الجهات المانحة في المملكة،
                        وتساعدك على التقديم بكفاءة وثقة.</p>
                </template>

                <div class="grants-stats" v-if="!calender">
                    <div class="grants-stat">
                        <div class="grants-stat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <div>
                            <div class="grants-stat-num">{{ stats?.grants ?? 0 }}</div>
                            <div class="grants-stat-label">فرصة نشطة</div>
                        </div>
                    </div>
                    <div class="grants-stat">
                        <div class="grants-stat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                            </svg>
                        </div>
                        <div>
                            <div class="grants-stat-num">{{ stats?.donors ?? 0 }}</div>
                            <div class="grants-stat-label">جهة مانحة</div>
                        </div>
                    </div>
                    <div class="grants-stat">
                        <div class="grants-stat-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </div>
                        <div>
                            <div class="grants-stat-num">{{ stats?.programs ?? 0 }}</div>
                            <div class="grants-stat-label">مجال متاح</div>
                        </div>
                    </div>
                </div>
                <div v-if="!calender" class="grants-search">
                    <svg class="grants-search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    <input type="text" v-model="search" class="grants-search-input"
                        placeholder="ابحث بعنوان الفرصة، اسم الجهة المانحة...">
                </div>
            </div>
        </div>
    </section>
</template>