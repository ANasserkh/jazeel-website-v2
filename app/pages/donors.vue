<script setup>
useSeoMeta({
    title: 'دليل المانحين — جزيل | تعرّف على الجهات المانحة الداعمة للقطاع غير الربحي',
    description: 'دليل شامل للجهات المانحة والداعمة المسجلة في منصة جزيل، يتضمن معلومات الجهة ومجالات دعمها ونطاقها الجغرافي.'
})

const donors = [
    {
        id: 1, name: 'الراجحي الإنسانية', subtitle: 'مؤسسة سليمان بن عبدالعزيز الراجحي الخيرية',
        type: 'مؤسسة خيرية', logo: '/donors/alrajhi.png',
        desc: 'مؤسسة رائدة في العمل الخيري والإنساني، تركز على دعم المشاريع التنموية والتعليمية والصحية في المملكة العربية السعودية.',
        fields: ['تعليم', 'صحة', 'تمكين'], region: 'المملكة', grants: 5,
        founded: '1421هـ', website: 'alrajhi-humanitarian.com',
        details: 'تأسست مؤسسة الراجحي الإنسانية كأحد أبرز المؤسسات الخيرية في المملكة، وتقدم برامج شاملة تشمل: بناء المساجد، دعم التعليم، الرعاية الصحية، كفالة الأيتام، ومشاريع التمكين الاقتصادي. تمتلك المؤسسة شراكات مع أكثر من 120 جمعية محلية.',
        achievements: ['دعم أكثر من 200 مشروع تنموي', 'كفالة أكثر من 15,000 يتيم', 'بناء 80+ مسجد في مناطق المملكة']
    },
    {
        id: 2, name: 'مركز الملك سلمان للإغاثة', subtitle: 'مركز إغاثي وإنساني دولي',
        type: 'جهة حكومية', logo: '/donors/king-salman.png',
        desc: 'مركز إنساني دولي رائد يقدم المساعدات الإغاثية والإنسانية والتنموية للمحتاجين حول العالم بأكثر من 80 دولة.',
        fields: ['إنسانية', 'إغاثة', 'تنمية'], region: 'دولي', grants: 8,
        founded: '1436هـ', website: 'ksrelief.org',
        details: 'مركز الملك سلمان للإغاثة والأعمال الإنسانية هو الذراع الإنساني للمملكة العربية السعودية. يعمل على تقديم المساعدات في مجالات الصحة والتعليم والأمن الغذائي والمأوى والحماية.',
        achievements: ['مشاريع في أكثر من 80 دولة', 'إنفاق إنساني يتجاوز 6 مليارات ريال', 'أكثر من 2,500 مشروع مُنفَّذ']
    },
    {
        id: 3, name: 'منصة إحسان', subtitle: 'المنصة الوطنية للعمل الخيري',
        type: 'منصة وطنية', logo: '/donors/ehsan.png',
        desc: 'منصة وطنية تسعى لتسهيل العمل الخيري وتوحيد جهود التبرع والعطاء في المملكة العربية السعودية.',
        fields: ['خيري', 'تمكين', 'مجتمعي'], region: 'المملكة', grants: 3,
        founded: '1442هـ', website: 'ehsan.sa',
        details: 'إحسان هي المنصة الوطنية للعمل الخيري في المملكة، تتيح للأفراد والمؤسسات المساهمة في المشاريع الخيرية بسهولة وشفافية عبر قنوات رقمية موثوقة.',
        achievements: ['أكثر من 3 ملايين متبرع', 'دعم أكثر من 500 جمعية', 'تجاوز حجم التبرعات 4 مليارات ريال']
    },
    {
        id: 4, name: 'بنك التنمية الاجتماعية', subtitle: 'جهة حكومية تمويلية',
        type: 'جهة حكومية', logo: '/donors/sdb.png',
        desc: 'يقدم حلولاً تمويلية للأفراد والمنشآت الصغيرة ويساهم في تمكين الأسر المنتجة والمشاريع الاجتماعية.',
        fields: ['تمويل', 'تمكين', 'ريادة أعمال'], region: 'المملكة', grants: 4,
        founded: '1391هـ', website: 'sdb.gov.sa',
        details: 'بنك التنمية الاجتماعية هو مؤسسة حكومية تعنى بتقديم الحلول التمويلية والتأهيلية للأفراد والمنشآت الصغيرة والناشئة لتحقيق الاستقلال المالي.',
        achievements: ['تمويل أكثر من 100,000 مشروع', 'دعم 50,000+ أسرة منتجة', 'محفظة تمويلية تتجاوز 80 مليار ريال']
    },
    {
        id: 5, name: 'الهيئة العامة للأوقاف', subtitle: 'جهة حكومية تنظيمية',
        type: 'وقف', logo: '/donors/awqaf.png',
        desc: 'تعمل على تنظيم قطاع الأوقاف وتطويره وتعزيز إسهامه في التنمية الاقتصادية والاجتماعية.',
        fields: ['أوقاف', 'تنمية', 'مجتمعي'], region: 'المملكة', grants: 6,
        founded: '1437هـ', website: 'awqaf.gov.sa',
        details: 'الهيئة العامة للأوقاف هي الجهة المنظمة لقطاع الأوقاف في المملكة، تسعى لتطوير القطاع وتعزيز الحوكمة والشفافية في إدارة الأوقاف.',
        achievements: ['تسجيل أكثر من 5,000 وقف', 'إطلاق منصة نظارة الرقمية', 'تنظيم أكثر من 30 ورشة تدريبية']
    },
    {
        id: 6, name: 'وقف أبانمي', subtitle: 'وقف خيري أهلي',
        type: 'وقف', logo: '/donors/abanumay.png',
        desc: 'وقف أهلي يركز على دعم المشاريع التعليمية والصحية والاجتماعية وبناء القدرات المؤسسية.',
        fields: ['تعليم', 'صحة', 'بناء قدرات'], region: 'المملكة', grants: 2,
        founded: '1430هـ', website: 'abanumay.org',
        details: 'وقف أبانمي من الأوقاف الأهلية المتميزة في المملكة، يهتم بدعم المشاريع النوعية في التعليم والصحة وبناء القدرات المؤسسية للمنظمات غير الربحية.',
        achievements: ['دعم 40+ مشروع تعليمي', 'بناء قدرات 25 جمعية', 'تقديم 15 منحة بحثية']
    },
    {
        id: 7, name: 'مؤسسة الجميح الخيرية', subtitle: 'مؤسسة خيرية أهلية',
        type: 'مؤسسة خيرية', logo: '/donors/aljumaih.png',
        desc: 'مؤسسة تهتم بدعم المشاريع التنموية والمبادرات المجتمعية والتعليمية في المملكة العربية السعودية.',
        fields: ['مجتمعي', 'تعليم', 'تنمية'], region: 'المملكة', grants: 3,
        founded: '1425هـ', website: 'aljumaih.org',
        details: 'مؤسسة الجميح الخيرية من المؤسسات الأهلية الفاعلة في العمل الخيري بالمملكة، تدعم مجموعة واسعة من المشاريع التنموية والاجتماعية.',
        achievements: ['دعم 60+ مشروع مجتمعي', 'رعاية 10 مبادرات تعليمية', 'المساهمة في 5 مشاريع إسكان']
    }
];

</script>

<template>


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
            <div class="reveal" style="animation: fadeUp 0.6s ease both;">
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
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 reveal"
                style="animation: fadeUp 0.6s 0.1s ease both;line-height:1.3;">
                تعرّف على <span class="text-red-500">الجهات المانحة</span> في جزيل
            </h1>
            <p class="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-8 reveal"
                style="animation: fadeUp 0.6s 0.15s ease both;line-height:1.75;">
                دليل شامل للجهات المانحة والمؤسسات الداعمة المسجلة في المنصة، مع تفاصيل مجالات الدعم والنطاق الجغرافي.
            </p>
            <div class="flex flex-wrap justify-center gap-8 reveal" style="animation: fadeUp 0.6s 0.2s ease both;">
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
                    <input type="text" id="searchInput" class="search-input"
                        placeholder="ابحث عن جهة مانحة بالاسم أو المجال...">
                </div>
                <div class="flex items-center gap-2">
                    <div class="view-toggle">
                        <button class="active" data-view="grid" title="عرض شبكة">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <rect x="3" y="3" width="7" height="7" rx="1" />
                                <rect x="14" y="3" width="7" height="7" rx="1" />
                                <rect x="3" y="14" width="7" height="7" rx="1" />
                                <rect x="14" y="14" width="7" height="7" rx="1" />
                            </svg>
                            شبكة
                        </button>
                        <button data-view="table" title="عرض جدول">
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
                    <button class="export-btn" onclick="exportPDF()">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <path d="M12 18v-6" />
                            <path d="m9 15 3 3 3-3" />
                        </svg>
                        تصدير PDF
                    </button>
                </div>
            </div>
            <!-- Row 2: Filters -->
            <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <div class="flex flex-wrap gap-2 flex-1">
                    <span class="text-xs font-bold text-navy/40 self-center ml-2">مجال الدعم:</span>
                    <button class="filter-pill active" data-filter="field" data-value="all">الكل</button>
                    <button class="filter-pill" data-filter="field" data-value="تعليم">تعليم</button>
                    <button class="filter-pill" data-filter="field" data-value="صحة">صحة</button>
                    <button class="filter-pill" data-filter="field" data-value="تمكين">تمكين</button>
                    <button class="filter-pill" data-filter="field" data-value="إنسانية">إنسانية</button>
                    <button class="filter-pill" data-filter="field" data-value="تمويل">تمويل</button>
                    <button class="filter-pill" data-filter="field" data-value="أوقاف">أوقاف</button>
                </div>
                <div class="flex gap-2 items-center">
                    <select class="select-filter" id="regionFilter">
                        <option value="all">كل المناطق</option>
                        <option value="المملكة">المملكة</option>
                        <option value="دولي">دولي</option>
                        <option value="الخليج">الخليج</option>
                    </select>
                    <select class="select-filter" id="typeFilter">
                        <option value="all">نوع الجهة</option>
                        <option value="مؤسسة خيرية">مؤسسة خيرية</option>
                        <option value="جهة حكومية">جهة حكومية</option>
                        <option value="وقف">وقف</option>
                        <option value="منصة وطنية">منصة وطنية</option>
                    </select>
                </div>
            </div>
            <div class="mt-3 flex items-center justify-between">
                <div class="results-count">عرض <strong id="resultsCount">7</strong> جهة مانحة</div>
                <button id="clearFilters" class="text-xs font-bold text-jgreen hover:underline hidden"
                    onclick="clearAllFilters()">مسح الفلاتر</button>
            </div>
        </div>
    </section>

    <!-- ═══════════════════ DONORS CONTENT ═══════════════════ -->
    <section class="py-10 sm:py-14 bg-neutral-bg min-h-[400px]">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">

            <!-- Grid View -->
            <div id="gridView" class="grid-view active sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <!-- Cards rendered by JS -->
            </div>

            <!-- Table View -->
            <div id="tableView" class="table-view">
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
                            <tbody id="tableBody">
                                <!-- Rows rendered by JS -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- No Results -->
            <div id="noResults" class="hidden text-center py-16">
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
    <div id="donorModal" class="modal-overlay" onclick="if(event.target===this)closeModal()">
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B6470" stroke-width="2.5">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </button>
            <div id="modalBody">
                <!-- Dynamic content -->
            </div>
        </div>
    </div>

    <!-- ═══════════════════ CTA ═══════════════════ -->
    <section class="py-14 sm:py-18" style="background: linear-gradient(160deg, #07133F 0%, #0d1f5c 50%, #0a1745 100%);">
        <div class="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-4">هل أنت جهة مانحة؟</h2>
            <p class="text-base text-white/45 max-w-xl mx-auto mb-8 leading-relaxed">
                انضم إلى دليل المانحين في جزيل وانشر فرص المنح الخاصة بك لتصل لأكثر من 850 جمعية مسجلة في المنصة.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
                <a href="donor-portal.html" class="btn-primary" style="padding:0.875rem 2.25rem;">
                    سجّل جهتك المانحة
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round">
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                </a>
                <a href="grants.html"
                    class="text-white/60 hover:text-white font-bold text-sm flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-white/30 transition-all">استكشف
                    فرص المنح</a>
            </div>
        </div>
    </section>
</template>


<style scoped>
.header-scrolled {
    background: rgba(255, 255, 255, 0.98) !important;
    box-shadow: 0 1px 8px rgba(7, 19, 63, 0.05);
    backdrop-filter: blur(12px);
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

/* Table View */
.table-view {
    display: none;
}

.table-view.active {
    display: block;
}

.grid-view {
    display: none;
}

.grid-view.active {
    display: grid;
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
</style>