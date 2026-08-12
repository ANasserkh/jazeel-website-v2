<script setup>
import { watchDebounced } from '@vueuse/core'

useSeoMeta({
    title: 'فرص المنح — جزيل',
    description: 'استكشف فرص المنح المتاحة للجمعيات والمنظمات غير الربحية عبر منصة جزيل',
})

const {
    email,
    subscribe,
    loading,
    isValid
} = useNewsletterSubscribe();


const config = useRuntimeConfig();
const route = useRoute();
const calender = computed(() => {
    return route.path.search("calender") > 0
})

const calenderFilter = computed(() => {
    if (!calender.value) {
        return {
            start: null,
            end: null
        }
    }

    const now = new Date();
    return {
        start: new Date(now.getFullYear(), now.getMonth(), 1).toDateString(),
        end: new Date(now.getFullYear(), now.getMonth() + 1, 0).toDateString()
    }
})

const pagination = ref({
    deadline_status: 1,
    source_type: 1,
    page: 1,
    rows: 20,
    ...calenderFilter.value
});


const { data: grants, refresh, status } = await useFetch(`${config.public.apiBase}/grants/v2`, {
    query: pagination,
    watch: false
});
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
    <GrantsHeroSection v-model="search" :total="grants?.total"></GrantsHeroSection>
    <!-- Filter Bar -->
    <GrantsFilterBar v-if="!calender" @filter="onFilter" />
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
                    <input v-model="email" type="email" placeholder="بريدك الإلكتروني"
                        :class="{ '!border-red-500': !isValid }">
                    <button @click="subscribe">
                        <span v-if="!loading">
                            اشترك الآن
                        </span>
                        <span v-else class="flex items-center gap-2">
                            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style src="./grant.css"></style>