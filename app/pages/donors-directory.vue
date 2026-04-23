<script setup>

useSeoMeta({
    title: 'دليل المانحين — جزيل | تعرّف على الجهات المانحة الداعمة للقطاع غير الربحي',
    description: 'دليل شامل للجهات المانحة والداعمة المسجلة في منصة جزيل، يتضمن معلومات الجهة ومجالات دعمها ونطاقها الجغرافي.'
})

const donors = [
    {
        id: 1, name: 'الراجحي الإنسانية', subtitle: 'مؤسسة سليمان بن عبدالعزيز الراجحي الخيرية',
        type: 'مؤسسة خيرية', logo: '/images/donors/alrajhi.png',
        desc: 'مؤسسة رائدة في العمل الخيري والإنساني، تركز على دعم المشاريع التنموية والتعليمية والصحية في المملكة العربية السعودية.',
        fields: ['تعليم', 'صحة', 'تمكين'], region: 'المملكة', grants: 5,
        founded: '1421هـ', website: 'alrajhi-humanitarian.com',
        details: 'تأسست مؤسسة الراجحي الإنسانية كأحد أبرز المؤسسات الخيرية في المملكة، وتقدم برامج شاملة تشمل: بناء المساجد، دعم التعليم، الرعاية الصحية، كفالة الأيتام، ومشاريع التمكين الاقتصادي. تمتلك المؤسسة شراكات مع أكثر من 120 جمعية محلية.',
        achievements: ['دعم أكثر من 200 مشروع تنموي', 'كفالة أكثر من 15,000 يتيم', 'بناء 80+ مسجد في مناطق المملكة']
    },
    {
        id: 2, name: 'مركز الملك سلمان للإغاثة', subtitle: 'مركز إغاثي وإنساني دولي',
        type: 'جهة حكومية', logo: '/images/donors/king-salman.png',
        desc: 'مركز إنساني دولي رائد يقدم المساعدات الإغاثية والإنسانية والتنموية للمحتاجين حول العالم بأكثر من 80 دولة.',
        fields: ['إنسانية', 'إغاثة', 'تنمية'], region: 'دولي', grants: 8,
        founded: '1436هـ', website: 'ksrelief.org',
        details: 'مركز الملك سلمان للإغاثة والأعمال الإنسانية هو الذراع الإنساني للمملكة العربية السعودية. يعمل على تقديم المساعدات في مجالات الصحة والتعليم والأمن الغذائي والمأوى والحماية.',
        achievements: ['مشاريع في أكثر من 80 دولة', 'إنفاق إنساني يتجاوز 6 مليارات ريال', 'أكثر من 2,500 مشروع مُنفَّذ']
    },
    {
        id: 3, name: 'منصة إحسان', subtitle: 'المنصة الوطنية للعمل الخيري',
        type: 'منصة وطنية', logo: '/images/donors/ehsan.png',
        desc: 'منصة وطنية تسعى لتسهيل العمل الخيري وتوحيد جهود التبرع والعطاء في المملكة العربية السعودية.',
        fields: ['خيري', 'تمكين', 'مجتمعي'], region: 'المملكة', grants: 3,
        founded: '1442هـ', website: 'ehsan.sa',
        details: 'إحسان هي المنصة الوطنية للعمل الخيري في المملكة، تتيح للأفراد والمؤسسات المساهمة في المشاريع الخيرية بسهولة وشفافية عبر قنوات رقمية موثوقة.',
        achievements: ['أكثر من 3 ملايين متبرع', 'دعم أكثر من 500 جمعية', 'تجاوز حجم التبرعات 4 مليارات ريال']
    },
    {
        id: 4, name: 'بنك التنمية الاجتماعية', subtitle: 'جهة حكومية تمويلية',
        type: 'جهة حكومية', logo: '/images/donors/sdb.png',
        desc: 'يقدم حلولاً تمويلية للأفراد والمنشآت الصغيرة ويساهم في تمكين الأسر المنتجة والمشاريع الاجتماعية.',
        fields: ['تمويل', 'تمكين', 'ريادة أعمال'], region: 'المملكة', grants: 4,
        founded: '1391هـ', website: 'sdb.gov.sa',
        details: 'بنك التنمية الاجتماعية هو مؤسسة حكومية تعنى بتقديم الحلول التمويلية والتأهيلية للأفراد والمنشآت الصغيرة والناشئة لتحقيق الاستقلال المالي.',
        achievements: ['تمويل أكثر من 100,000 مشروع', 'دعم 50,000+ أسرة منتجة', 'محفظة تمويلية تتجاوز 80 مليار ريال']
    },
    {
        id: 5, name: 'الهيئة العامة للأوقاف', subtitle: 'جهة حكومية تنظيمية',
        type: 'وقف', logo: '/images/donors/awqaf.png',
        desc: 'تعمل على تنظيم قطاع الأوقاف وتطويره وتعزيز إسهامه في التنمية الاقتصادية والاجتماعية.',
        fields: ['أوقاف', 'تنمية', 'مجتمعي'], region: 'المملكة', grants: 6,
        founded: '1437هـ', website: 'awqaf.gov.sa',
        details: 'الهيئة العامة للأوقاف هي الجهة المنظمة لقطاع الأوقاف في المملكة، تسعى لتطوير القطاع وتعزيز الحوكمة والشفافية في إدارة الأوقاف.',
        achievements: ['تسجيل أكثر من 5,000 وقف', 'إطلاق منصة نظارة الرقمية', 'تنظيم أكثر من 30 ورشة تدريبية']
    },
    {
        id: 6, name: 'وقف أبانمي', subtitle: 'وقف خيري أهلي',
        type: 'وقف', logo: '/images/donors/abanumay.png',
        desc: 'وقف أهلي يركز على دعم المشاريع التعليمية والصحية والاجتماعية وبناء القدرات المؤسسية.',
        fields: ['تعليم', 'صحة', 'بناء قدرات'], region: 'المملكة', grants: 2,
        founded: '1430هـ', website: 'abanumay.org',
        details: 'وقف أبانمي من الأوقاف الأهلية المتميزة في المملكة، يهتم بدعم المشاريع النوعية في التعليم والصحة وبناء القدرات المؤسسية للمنظمات غير الربحية.',
        achievements: ['دعم 40+ مشروع تعليمي', 'بناء قدرات 25 جمعية', 'تقديم 15 منحة بحثية']
    },
    {
        id: 7, name: 'مؤسسة الجميح الخيرية', subtitle: 'مؤسسة خيرية أهلية',
        type: 'مؤسسة خيرية', logo: '/images/donors/aljumaih.png',
        desc: 'مؤسسة تهتم بدعم المشاريع التنموية والمبادرات المجتمعية والتعليمية في المملكة العربية السعودية.',
        fields: ['مجتمعي', 'تعليم', 'تنمية'], region: 'المملكة', grants: 3,
        founded: '1425هـ', website: 'aljumaih.org',
        details: 'مؤسسة الجميح الخيرية من المؤسسات الأهلية الفاعلة في العمل الخيري بالمملكة، تدعم مجموعة واسعة من المشاريع التنموية والاجتماعية.',
        achievements: ['دعم 60+ مشروع مجتمعي', 'رعاية 10 مبادرات تعليمية', 'المساهمة في 5 مشاريع إسكان']
    }
];

const view = ref('grid');
const searchQuery = ref('');
const fieldFilter = ref('all');
const regionFilter = ref('all');
const typeFilter = ref('all');

const filteredDonors = computed(() => {
    return donors.filter(d => {
        const matchField = fieldFilter.value === 'all' || d.fields.some(f => f === fieldFilter.value);
        const matchRegion = regionFilter.value === 'all' || d.region === regionFilter.value;
        const matchType = typeFilter.value === 'all' || d.type.includes(typeFilter.value);
        const matchSearch = !searchQuery.value ||
            d.name.includes(searchQuery.value) ||
            d.desc.includes(searchQuery.value) ||
            d.fields.some(f => f.includes(searchQuery.value));
        return matchField && matchRegion && matchType && matchSearch;
    });
});

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
                        <div class="text-3xl font-extrabold text-white mb-1">12</div>
                        <div class="text-xs text-white/35 font-medium">جهة مانحة</div>
                    </div>
                    <div class="w-px h-12 bg-white/10 self-center"></div>
                    <div class="text-center">
                        <div class="text-3xl font-extrabold mb-1" style="color:#19B58B;">38</div>
                        <div class="text-xs text-white/35 font-medium">فرصة نشطة</div>
                    </div>
                    <div class="w-px h-12 bg-white/10 self-center"></div>
                    <div class="text-center">
                        <div class="text-3xl font-extrabold text-white mb-1">6</div>
                        <div class="text-xs text-white/35 font-medium">مجالات دعم</div>
                    </div>
                    <div class="w-px h-12 bg-white/10 self-center"></div>
                    <div class="text-center">
                        <div class="text-3xl font-extrabold text-white mb-1">4</div>
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
                        <input type="text" v-model="searchQuery" class="search-input ps-10"
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
                <!-- Row 2: Filters -->
                <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <div class="flex flex-wrap gap-2 flex-1">
                        <span class="text-xs font-bold text-navy/40 self-center ml-2">مجال الدعم:</span>
                        <button class="filter-pill" :class="{ active: fieldFilter === 'all' }"
                            @click="fieldFilter = 'all'">الكل</button>
                        <button v-for="field in ['تعليم', 'صحة', 'تمكين', 'إنسانية', 'تمويل', 'أوقاف']"
                            class="filter-pill" :class="{ active: fieldFilter === field }" @click="fieldFilter = field">
                            {{ field }}
                        </button>
                    </div>
                    <div class="flex gap-2 items-center">
                        <select class="select-filter" v-model="regionFilter">
                            <option value="all">كل المناطق</option>
                            <option value="المملكة">المملكة</option>
                            <option value="دولي">دولي</option>
                            <option value="الخليج">الخليج</option>
                        </select>
                        <select class="select-filter" v-model="typeFilter">
                            <option value="all">نوع الجهة</option>
                            <option value="مؤسسة خيرية">مؤسسة خيرية</option>
                            <option value="جهة حكومية">جهة حكومية</option>
                            <option value="وقف">وقف</option>
                            <option value="منصة وطنية">منصة وطنية</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════════════════ DONORS CONTENT ═══════════════════ -->
        <section class="py-10 sm:py-14 bg-neutral-bg min-h-[400px]">
            <div class="max-w-7xl mx-auto px-5 sm:px-8">

                <!-- Grid View -->
                <div v-if="view === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div v-for="donor in filteredDonors" :key="donor.id" class="donor-card reveal visible"
                        @click="openModal(donor)">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="donor-logo-wrap">
                                <img :src="donor.logo" :alt="donor.name" class="w-full h-full object-contain">
                            </div>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-base font-bold text-navy mb-0.5 truncate">{{ donor.name }}</h3>
                                <p class="text-xs text-neutral-text truncate">{{ donor.subtitle }}</p>
                                <span class="inline-block mt-1.5 text-[0.68rem] font-bold px-2 py-0.5 rounded-full">{{
                                    donor.type }}</span>
                            </div>
                        </div>
                        <p class="text-sm text-neutral-text leading-relaxed mb-4 line-clamp-2">{{ donor.desc }}</p>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                            <span v-for="field in donor.fields" :key="field" class="donor-tag">{{ field }}</span>
                        </div>
                        <div class="flex items-center justify-between pt-3 border-t border-neutral-border/40">
                            <div class="flex gap-3">
                                <div class="stat-mini">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                    <span><strong class="text-navy">{{ donor.grants }}</strong> فرصة</span>
                                </div>
                                <div class="stat-mini">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>{{ donor.region }}</span>
                                </div>
                            </div>
                            <span class="text-xs font-bold text-jgreen flex items-center gap-1">
                                عرض التفاصيل
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2.5">
                                    <path d="m12 19-7-7 7-7" />
                                </svg>
                            </span>
                        </div>
                    </div>
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
                                        <th>النطاق الجغرافي</th>
                                        <th>الفرص النشطة</th>
                                        <th>الإجراء</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="donor in filteredDonors" :key="donor.id" @click="openModal(donor)">
                                        <td>
                                            <div class="flex items-center gap-3">
                                                <div
                                                    class="w-10 h-10 rounded-lg bg-neutral-bg border border-neutral-border flex items-center justify-center p-1.5 flex-shrink-0">
                                                    <img :src="donor.logo" :alt="donor.name"
                                                        class="w-full h-full object-contain">
                                                </div>
                                                <div>
                                                    <div class="font-bold text-navy text-sm">{{ donor.name }}</div>
                                                    <div class="text-xs text-neutral-light">{{ donor.subtitle }}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="text-xs font-bold px-2.5 py-1 rounded-full">{{ donor.type
                                            }}</span>
                                        </td>
                                        <td>
                                            <div class="flex flex-wrap gap-1">
                                                <span v-for="field in donor.fields" :key="field" class="donor-tag"
                                                    style="font-size:0.68rem;padding:2px 8px;">{{ field }}</span>
                                            </div>
                                        </td>
                                        <td class="text-sm">{{ donor.region }}</td>
                                        <td><span class="font-bold text-navy">{{ donor.grants }}</span> <span
                                                class="text-neutral-light text-xs">فرصة</span></td>
                                        <td>
                                            <button
                                                class="text-xs font-bold text-jgreen hover:text-jgreen-dark flex items-center gap-1">
                                                التفاصيل
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2.5">
                                                    <path d="m12 19-7-7 7-7" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- No Results -->
                <div v-if="filteredDonors.length === 0" class="text-center py-16">
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
                                <p class="text-sm text-white/50">{{ selectedDonor.subtitle }}</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-4 mt-4">
                            <div class="flex items-center gap-2 text-xs text-white/40">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {{ selectedDonor.region }}
                            </div>
                            <div class="flex items-center gap-2 text-xs text-white/40">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                </svg>
                                تأسست: {{ selectedDonor.founded }}
                            </div>
                            <div class="flex items-center gap-2 text-xs text-white/40">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                                {{ selectedDonor.website }}
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex flex-wrap gap-2 mb-5">
                            <span class="text-xs font-bold px-3 py-1 rounded-full">{{ selectedDonor.type }}</span>
                            <span v-for="field in selectedDonor.fields" :key="field" class="donor-tag">{{ field
                                }}</span>
                        </div>

                        <h3 class="text-sm font-bold text-navy mb-2">نبذة عن الجهة</h3>
                        <p class="text-sm text-neutral-text leading-relaxed mb-5">{{ selectedDonor.details }}</p>

                        <h3 class="text-sm font-bold text-navy mb-3">أبرز الإنجازات</h3>
                        <div class="space-y-2 mb-6">
                            <div v-for="a in selectedDonor.achievements" :key="a" class="flex items-start gap-2.5">
                                <div
                                    class="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#19B58B"
                                        stroke-width="3">
                                        <path d="m5 12 5 5L20 7" />
                                    </svg>
                                </div>
                                <span class="text-sm text-neutral-text">{{ a }}</span>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3 mb-5">
                            <div class="bg-neutral-bg rounded-xl p-4 text-center">
                                <div class="text-2xl font-extrabold text-navy">{{ selectedDonor.grants }}</div>
                                <div class="text-xs text-neutral-light mt-1">فرصة منح نشطة</div>
                            </div>
                            <div class="bg-neutral-bg rounded-xl p-4 text-center">
                                <div class="text-2xl font-extrabold" style="color:#19B58B;">{{
                                    selectedDonor.fields.length }}
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


<style scoped>
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
    padding: 0.75rem 1.25rem 0.75rem 3rem;
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