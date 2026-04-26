<script setup>
import { watchDebounced } from '@vueuse/core'

useSeoMeta({
    title: 'فرص المنح — جزيل',
    description: 'استكشف فرص المنح المتاحة للجمعيات والمنظمات غير الربحية عبر منصة جزيل',
})


const config = useRuntimeConfig();

const pagination = ref({
    deadline_status: 1,
    source_type: 1,
    page: 1,
    rows: 20
});


const { data: grants, refresh, status } = await useFetch(`${config.public.apiBase}/grants`, {
    query: pagination.value,
    watch: false
});


const { data: stats } = await useFetch(`${config.public.apiBase}/grants/stats`);

const pages = computed(() => {
    return Math.ceil(grants.value?.total / pagination.value.rows);
});

function next() {
    if (pagination.value.page === pages.value) return
    pagination.value.page++;
    refresh();

}

function previous() {
    if (pagination.value.page === 1) return;
    pagination.value.page--;
    refresh();

}

function jump(page) {
    pagination.value.page = page;
    refresh();
}


function onFilter(param) {

    pagination.value.deadline_status = param.deadline_status;
    pagination.value.source_type = param.source_type;
    pagination.value.programs = param.program ? [param.program] : [];
    pagination.value.countries = param.country ? [param.country] : [];
    refresh();
}


const search = ref();
watchDebounced(search, (val) => {
    pagination.value.search = val;
    refresh();
}, {
    debounce: 1000,
})
</script>
<template>
    <!-- Hero -->
    <section class="grants-hero pt-10">
        <div class="jz-container">
            <div class="grants-hero-content">
                 <h1>اكتشف فرص المنح <span>المناسبة لمنظمتك</span></h1>
                <p class="grants-hero-desc">منصة مركزية تجمع فرص التمويل والدعم من أبرز الجهات المانحة في المملكة،
                    وتساعدك على التقديم بكفاءة وثقة.</p>
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
                <div class="grants-search">
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
    <!-- Filter Bar -->
    <GrantsFilterBar @filter="onFilter" />
    <!-- Results -->
    <main style="flex:1;background:var(--jz-bg);">
        <div class="jz-container">
            <div v-if="status === 'success'" class="grants-results-header">
                <p class="grants-results-count">عرض <strong>{{ grants?.result.length }}</strong> فرصة من إجمالي
                    <strong>{{ grants?.total }}</strong> فرصة
                </p>
            </div>
            <div v-if="status === 'pending'" class="grants-grid mt-10">
                <grants-card-loader v-for="i in 3" />
            </div>
            <div v-else class="grants-grid  ">
                <template v-for="grant in grants?.result">
                    <GrantsCard :grant />
                </template>
                <div v-if="grants?.result.length === 0" class="grants-empty-state">
                    <div class="jz-empty">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                        <h3>لا توجد فرص منح تطابق بحثك</h3>
                        <p>جرّب تعديل فلاتر البحث أو الكلمات المفتاحية للحصول على نتائج أفضل، أو اشترك في التنبيهات
                            لتصلك
                            الفرص الجديدة.</p>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div class="grants-pagination">
                <button @click="previous" class="grants-page-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
                <button v-for="i in pages" class="grants-page-btn" @click="jump(i)" :class="{
                    active: i == pagination.page
                }">{{ i }}</button>

                <button @click="next" class="grants-page-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>
            </div>

        </div>
    </main>

    <section class="grants-newsletter">
        <div class="jz-container">
            <div class="grants-newsletter-content">
                <div class="grants-newsletter-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                </div>
                <h2>لا تفوّت أي فرصة منح جديدة</h2>
                <p>اشترك في التنبيهات وسنرسل لك إشعاراً فورياً بكل فرصة منح جديدة تناسب اهتماماتك</p>
                <div class="grants-newsletter-form">
                    <input type="email" placeholder="بريدك الإلكتروني">
                    <button>اشترك الآن</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style src="./grant.css"></style>