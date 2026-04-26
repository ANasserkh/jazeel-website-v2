<script setup>

useSeoMeta({
    title: 'دليل المانحين — جزيل | تعرّف على الجهات المانحة الداعمة للقطاع غير الربحي',
    description: 'دليل شامل للجهات المانحة والداعمة المسجلة في منصة جزيل، يتضمن معلومات الجهة ومجالات دعمها ونطاقها الجغرافي.'
})

const view = ref('grid');

const selectedDonor = ref(null);
const isModalOpen = ref(false);

function openModal(donor) {
    selectedDonor.value = donor;
    isModalOpen.value = true;
    if (process.client) {
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    isModalOpen.value = false;
    if (process.client) {
        document.body.style.overflow = '';
    }
}


const config = useRuntimeConfig();

const pagination = ref({
    search:"",
    page: 1,
    rows: 20
});

const { data: donors, refresh, execute, status } = await useFetch(`${config.public.apiBase}/donors/paginate`, {
    query: pagination.value,
    watch: false
});
execute();

const stats = ref({
    donors: 0,
    grants: 0,
    programs: 0,
    locations: 0
})

await useFetch(`${config.public.apiBase}/donors/stats`, {
    onResponse: ({ response }) => {
        stats.value = response._data
    }
});


function onFilter(params) {
    pagination.value.type = params.type;
    pagination.value.program = params.program;
    pagination.value.location = params.location;
    pagination.value.page = 1;
    refresh();
}

const search = ref();
watchDebounced(search, (val) => {
    pagination.value.search = val.trim();
    refresh();
}, {
    debounce: 1000,
})
</script>

<template>
    <div class="donors-directory-page">
        <!-- ═══════════════════ HERO ═══════════════════ -->
        <section class="pt-28 pb-10 sm:pt-36 sm:pb-14"
            style="background: linear-gradient(160deg, #07133F 0%, #0d1f5c 45%, #101d4c 100%); position: relative; overflow: hidden;">
            <div
                style="position:absolute;inset:0;background:radial-gradient(circle at 30% 70%, rgba(25,181,139,0.06) 0%, transparent 50%);">
            </div>
            <div
                style="position:absolute;inset:0;background:radial-gradient(circle at 80% 20%, rgba(124,58,237,0.04) 0%, transparent 50%);">
            </div>
            <div class="max-w-7xl mx-auto px-5 sm:px-8 text-center relative z-10">
                <div class="reveal visible">
                    <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-5"
                        style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.6);">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                        </svg>
                        دليل الجهات المانحة
                    </span>
                </div>
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 reveal visible"
                    style="line-height:1.3;">
                    تعرّف على <span style="color:#19B58B;">الجهات المانحة</span> في جزيل
                </h1>
                <p class="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-8 reveal visible"
                    style="line-height:1.75;">
                    دليل شامل للجهات المانحة والمؤسسات الداعمة المسجلة في المنصة، مع تفاصيل مجالات الدعم والنطاق
                    الجغرافي.
                </p>
                <div class="flex flex-wrap justify-center gap-8 reveal visible">
                    <div class="text-center">
                        <div class="text-3xl font-extrabold text-white mb-1">{{ stats.donors }}</div>
                        <div class="text-xs text-white/35 font-medium">جهة مانحة</div>
                    </div>
                    <div class="w-px h-12 bg-white/10 self-center"></div>
                    <div class="text-center">
                        <div class="text-3xl font-extrabold mb-1" style="color:#19B58B;">{{ stats.grants }}</div>
                        <div class="text-xs text-white/35 font-medium">فرصة نشطة</div>
                    </div>
                    <div class="w-px h-12 bg-white/10 self-center"></div>
                    <div class="text-center">
                        <div class="text-3xl font-extrabold text-white mb-1">{{ stats.programs }}</div>
                        <div class="text-xs text-white/35 font-medium">مجالات دعم</div>
                    </div>
                    <div class="w-px h-12 bg-white/10 self-center"></div>
                    <div class="text-center">
                        <div class="text-3xl font-extrabold text-white mb-1">{{ stats.locations }}</div>
                        <div class="text-xs text-white/35 font-medium">مناطق جغرافية</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════════════════ TOOLBAR ═══════════════════ -->
        <section class="py-5 bg-white border-b border-neutral-border/40 sticky top-[68px] z-40"
            style="backdrop-filter:blur(12px);background:rgba(255,255,255,0.97);">
            <div class="max-w-7xl mx-auto px-5 sm:px-8">
                <!-- Row 1: Search + Actions -->
                <div class="flex flex-col md:flex-row gap-3 items-start md:items-center mb-4">
                    <div class="relative flex-1 w-full">
                        <svg class="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-light" width="18" height="18"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                        <input  type="text" v-model="search" class="search-input ps-24"
                            placeholder="ابحث عن جهة مانحة بالاسم أو المجال...">
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="view-toggle">
                            <button :class="{ active: view === 'grid' }" @click="view = 'grid'" title="عرض شبكة">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="3" width="7" height="7" rx="1" />
                                    <rect x="3" y="14" width="7" height="7" rx="1" />
                                    <rect x="14" y="14" width="7" height="7" rx="1" />
                                </svg>
                                شبكة
                            </button>
                            <button :class="{ active: view === 'table' }" @click="view = 'table'" title="عرض جدول">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M12 3v18" />
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M3 9h18" />
                                    <path d="M3 15h18" />
                                </svg>
                                جدول
                            </button>
                        </div>

                    </div>
                </div>
                <donors-filter-bar @filter="onFilter" />
            </div>
        </section>

        <!-- ═══════════════════ DONORS CONTENT ═══════════════════ -->
        <section class="py-10 sm:py-14 bg-neutral-bg min-h-[400px]">
            <div class="max-w-7xl mx-auto px-5 sm:px-8">
                <!-- Grid View -->
                <div v-if="view === 'grid' && status !== 'pending'"
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <donors-card v-for="donor in donors.data" :key="donor.id" :donor
                        @click="openModal(donor)"></donors-card>
                </div>

                <!-- Table View -->
                <div v-if="view === 'table'" class="table-view active">
                    <div class="bg-white rounded-2xl border border-neutral-border overflow-hidden shadow-sys">
                        <div class="overflow-x-auto">
                            <table class="donors-table">
                                <thead>
                                    <tr>
                                        <th>الجهة المانحة</th>
                                        <th>النوع</th>
                                        <th>مجالات الدعم</th>
                                        <th>الفرص النشطة</th>
                                        <th>الإجراء</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <donors-list-item v-for="donor in donors.data" :key="donor.id" :donor="donor"
                                        @click="openModal(donor)" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- No Results -->
                <div v-if="donors.data?.length === 0" class="text-center py-16">
                    <svg class="mx-auto mb-4" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8B929B"
                        stroke-width="1.5">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                        <path d="m8 8 6 6" />
                        <path d="m14 8-6 6" />
                    </svg>
                    <h3 class="text-lg font-bold text-navy mb-2">لا توجد نتائج</h3>
                    <p class="text-sm text-neutral-text">جرّب تعديل كلمات البحث أو تغيير الفلاتر</p>
                </div>

            </div>
        </section>

        <!-- ═══════════════════ MODAL ═══════════════════ -->
        <div v-if="isModalOpen" class="modal-overlay active" @click.self="closeModal">
            <div class="modal-content">
                <button class="modal-close" @click="closeModal">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B6470" stroke-width="2.5">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
                <div v-if="selectedDonor">
                    <div
                        style="background:linear-gradient(135deg,#07133F,#0d1f5c);padding:2rem 2rem 1.5rem;border-radius:20px 20px 0 0;">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center p-2.5 flex-shrink-0">
                                <img :src="selectedDonor.logo" :alt="selectedDonor.name"
                                    class="w-full h-full object-contain brightness-0 invert">
                            </div>
                            <div>
                                <h2 class="text-xl font-extrabold text-white">{{ selectedDonor.name }}</h2>
                                <div class="flex flex-wrap gap-4 mt-4">

                                    <a target="_blank" v-if="selectedDonor.website" :href="selectedDonor.website">

                                        <div class="flex items-center gap-2 text-xs text-white/40">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2">
                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                                <path
                                                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                            </svg>
                                            {{ selectedDonor.website }}
                                        </div>
                                    </a>
                                    <a target="_blank" v-if="selectedDonor.phone" :href="selectedDonor.phone">

                                        <div class="flex items-center gap-2 text-xs text-white/40">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2">
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                            {{ selectedDonor.phone }}
                                        </div>
                                    </a>
                                    <a target="_blank" v-if="selectedDonor.email" :href="selectedDonor.email">

                                        <div class="flex items-center gap-2 text-xs text-white/40">
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2">
                                                <path
                                                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                            {{ selectedDonor.email }}
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-6">
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="text-xs font-bold px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB]">{{
                                selectedDonor.type }}</span>
                            <span v-for="field in selectedDonor.programs" :key="field" class="donor-tag">{{ field
                                }}</span>
                        </div>

                        <h3 class="text-sm font-bold text-navy mb-2">نبذة عن الجهة</h3>
                        <p class="text-sm text-neutral-text leading-relaxed mb-5">{{ selectedDonor.description }}</p>


                        <div class="grid grid-cols-2 gap-3 mb-5">
                            <div class="bg-neutral-bg rounded-xl p-4 text-center">
                                <div class="text-2xl font-extrabold text-navy">{{ selectedDonor.grants_no }}</div>
                                <div class="text-xs text-neutral-light mt-1">فرصة منح نشطة</div>
                            </div>
                            <div class="bg-neutral-bg rounded-xl p-4 text-center">
                                <div class="text-2xl font-extrabold" style="color:#19B58B;">{{
                                    selectedDonor.programs_no }}
                                </div>
                                <div class="text-xs text-neutral-light mt-1">مجالات دعم</div>
                            </div>
                        </div>

                        <div class="flex gap-3">
                            <NuxtLink to="/grants" class="btn-primary flex-1 justify-center" style="padding:0.7rem;">
                                استكشف الفرص
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2.5">
                                    <path d="m12 19-7-7 7-7" />
                                </svg>
                            </NuxtLink>
                            <NuxtLink to="/donor-portal"
                                class="flex-1 text-center py-3 px-4 rounded-xl border border-neutral-border text-sm font-bold text-navy hover:bg-neutral-bg transition-all">
                                زيارة البوابة
                            </NuxtLink>
                        </div>

                        <div class="mt-5 pt-4 border-t border-neutral-border/40 text-center">
                            <p class="text-[0.68rem] text-neutral-light">المعلومات المعروضة من دليل المانحين — <span
                                    class="text-jgreen font-bold">منصة جزيل</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ═══════════════════ CTA ═══════════════════ -->
        <section class="py-14 sm:py-18"
            style="background: linear-gradient(160deg, #07133F 0%, #0d1f5c 50%, #0a1745 100%);">
            <div class="max-w-3xl mx-auto px-5 sm:px-8 text-center">
                <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-4">هل أنت جهة مانحة؟</h2>
                <p class="text-base text-white/45 max-w-xl mx-auto mb-8 leading-relaxed">
                    انضم إلى دليل المانحين في جزيل وانشر فرص المنح الخاصة بك لتصل لأكثر من 850 جمعية مسجلة في المنصة.
                </p>
                <div class="flex flex-wrap justify-center gap-3">
                    <NuxtLink to="/donor-portal" class="btn-primary" style="padding:0.875rem 2.25rem;">
                        سجّل جهتك المانحة
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round">
                            <path d="m12 19-7-7 7-7" />
                            <path d="M19 12H5" />
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="/grants"
                        class="text-white/60 hover:text-white font-bold text-sm flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-white/30 transition-all">
                        استكشف فرص المنح</NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>


<style>
.donors-directory-page {
    font-family: 'Tajawal', sans-serif;
}

.reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

.btn-primary {
    background: #19B58B;
    color: #fff;
    border: none;
    padding: 0.75rem 1.75rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.9375rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
}

.btn-primary:hover {
    background: #149572;
    box-shadow: 0 4px 16px rgba(25, 181, 139, 0.2);
}

.donor-card {
    background: #fff;
    border: 1px solid #E5E8EB;
    border-radius: 16px;
    padding: 1.75rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.donor-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(7, 19, 63, 0.08);
    border-color: rgba(25, 181, 139, 0.25);
}

.donor-card::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #19B58B, #07133F);
    opacity: 0;
    transition: opacity 0.3s;
}

.donor-card:hover::after {
    opacity: 1;
}

.donor-logo-wrap {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 14px;
    background: #F8F9FA;
    border: 1px solid #E5E8EB;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    flex-shrink: 0;
    transition: all 0.25s ease;
}

.donor-card:hover .donor-logo-wrap {
    border-color: rgba(25, 181, 139, 0.25);
    background: #EAF8F3;
}

.donor-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 10px;
    border-radius: 100px;
    font-size: 0.7rem;
    font-weight: 600;
    background: #F8F9FA;
    color: #5B6470;
    border: 1px solid #E5E8EB;
}

.search-input {
    width: 100%;
    padding: 0.75rem 2.25rem 0.75rem 3rem;
    border-radius: 12px;
    border: 1.5px solid #E5E8EB;
    font-size: 0.9375rem;
    font-family: 'Tajawal', sans-serif;
    transition: all 0.2s;
    background: #fff;
    color: #07133F;
}

.search-input:focus {
    outline: none;
    border-color: #19B58B;
    box-shadow: 0 0 0 3px rgba(25, 181, 139, 0.08);
}

.search-input::placeholder {
    color: #8B929B;
}

.filter-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 0.8125rem;
    font-weight: 600;
    background: #fff;
    color: #5B6470;
    border: 1.5px solid #E5E8EB;
    cursor: pointer;
    transition: all 0.2s;
}

.filter-pill:hover {
    border-color: #19B58B;
    color: #19B58B;
}

.filter-pill.active {
    background: #07133F;
    color: #fff;
    border-color: #07133F;
}

.stat-mini {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.78rem;
    color: #5B6470;
}

.stat-mini svg {
    width: 13px;
    height: 13px;
    color: #19B58B;
}

.view-toggle {
    display: inline-flex;
    border: 1.5px solid #E5E8EB;
    border-radius: 10px;
    overflow: hidden;
}

.view-toggle button {
    padding: 7px 14px;
    border: none;
    background: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: #8B929B;
    transition: all 0.2s;
    font-family: 'Tajawal';
}

.view-toggle button.active {
    background: #07133F;
    color: #fff;
}

.view-toggle button:not(:last-child) {
    border-left: 1.5px solid #E5E8EB;
}

[dir="rtl"] .view-toggle button:not(:last-child) {
    border-left: none;
    border-right: 1.5px solid #E5E8EB;
}

.view-toggle button:first-child {
    border-right: none;
}

.select-filter {
    padding: 7px 14px;
    border-radius: 10px;
    border: 1.5px solid #E5E8EB;
    font-size: 0.8125rem;
    font-weight: 600;
    color: #5B6470;
    background: #fff;
    cursor: pointer;
    font-family: 'Tajawal';
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238B929B' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: left 12px center;
    padding-left: 32px;
    transition: all 0.2s;
}

.select-filter:focus {
    outline: none;
    border-color: #19B58B;
}

.donors-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
}

.donors-table thead th {
    padding: 12px 16px;
    font-size: 0.78rem;
    font-weight: 700;
    color: #5B6470;
    text-align: right;
    background: #F8F9FA;
    border-bottom: 2px solid #E5E8EB;
    white-space: nowrap;
}

.donors-table thead th:first-child {
    border-radius: 0 12px 0 0;
}

.donors-table thead th:last-child {
    border-radius: 12px 0 0 0;
}

.donors-table tbody tr {
    transition: background 0.2s;
    cursor: pointer;
}

.donors-table tbody tr:hover {
    background: #f0fdf8;
}

.donors-table tbody td {
    padding: 14px 16px;
    font-size: 0.875rem;
    border-bottom: 1px solid #f0f0f0;
    vertical-align: middle;
}

.donors-table tbody tr:last-child td {
    border-bottom: none;
}

.modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    background: rgba(7, 19, 63, 0.5);
    backdrop-filter: blur(6px);
    display: none;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
}

.modal-overlay.active {
    display: flex;
}

.modal-content {
    background: #fff;
    border-radius: 20px;
    max-width: 640px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(7, 19, 63, 0.15);
    position: relative;
    animation: modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalIn {
    from {
        opacity: 0;
        transform: scale(0.95) translateY(10px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.modal-close {
    position: absolute;
    top: 16px;
    left: 16px;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    border: 1px solid #E5E8EB;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 5;
}

.modal-close:hover {
    background: #fee2e2;
    border-color: #fca5a5;
}

.export-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 18px;
    border-radius: 10px;
    font-size: 0.8125rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: #fff;
    border: none;
    font-family: 'Tajawal';
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.2);
}

.export-btn:hover {
    box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);
    transform: translateY(-1px);
}

.results-count {
    font-size: 0.8125rem;
    color: #8B929B;
    font-weight: 500;
}

.results-count strong {
    color: #07133F;
    font-weight: 700;
}
</style>