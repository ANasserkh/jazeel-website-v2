<script setup>
useSeoMeta({
  title: 'جزيل — المنصة التشغيلية المتكاملة للقطاع غير الربحي',
  description: 'جزيل منصة تقنية سعودية تمكّن الجمعيات والجهات المانحة من إدارة الاستراتيجية والأفكار وكتابة المقترحات وإدارة المشاريع وفرص المنح بدعم الذكاء الاصطناعي.',
})
</script>
<template>
    <!-- ═══════════════════════════════════════════════════════════════
     HERO
     ═══════════════════════════════════════════════════════════════ -->
    <section class="hero-gradient relative overflow-hidden min-h-[92vh] flex items-center pt-[68px]">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-24 left-16 w-80 h-80 rounded-full bg-jgreen/[0.04] blur-[100px]"></div>
            <div class="absolute bottom-16 right-20 w-96 h-96 rounded-full bg-jgreen/[0.03] blur-[120px]"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 w-full">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <!-- Text -->
                <div>
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-7 reveal visible"
                        style="animation: fadeUp 0.6s ease both;">
                        <span class="w-1.5 h-1.5 rounded-full bg-jgreen"></span>
                        <span class="text-white/60 text-micro">المنصة التشغيلية المتكاملة للقطاع غير الربحي</span>
                    </div>

                    <h1 class="text-display-sm sm:text-display text-white mb-5 reveal visible"
                        style="animation: fadeUp 0.6s 0.1s ease both;">
                        منصة موحدة لتنمية الموارد المالية<br>
                        وإدارة فرص <span class="text-jgreen">المنح</span>
                    </h1>

                    <p class="text-body-lg text-white/50 max-w-lg mb-8 reveal visible"
                        style="animation: fadeUp 0.6s 0.15s ease both;">
                        جزيل تمنحك منظومة متكاملة لإدارة الاستراتيجية، توليد الأفكار، كتابة المقترحات بالذكاء الاصطناعي،
                        إدارة المشاريع، وإدارة فرص المنح — في منصة واحدة.
                    </p>

                    <div class="flex flex-wrap gap-3 mb-10 reveal visible"
                        style="animation: fadeUp 0.6s 0.2s ease both;">
                        <a href="#" class="btn-primary">
                            ابدأ التجربة المجانية
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m12 19-7-7 7-7" />
                                <path d="M19 12H5" />
                            </svg>
                        </a>
                        <a href="#capabilities" class="btn-secondary">استكشف المنصة</a>
                    </div>

                    <!-- Trust metrics -->
                    <div class="grid grid-cols-3 gap-6 reveal visible" style="animation: fadeUp 0.6s 0.25s ease both;">
                        <div>
                            <div class="text-heading-sm text-white counter-value" data-target="850">0</div>
                            <div class="text-micro text-white/35 mt-0.5">منصة مفعّلة</div>
                        </div>
                        <div>
                            <div class="text-heading-sm text-jgreen counter-value" data-target="120">0</div>
                            <div class="text-micro text-white/35 mt-0.5">فرصة منح ناجحة</div>
                        </div>
                        <div>
                            <div class="text-heading-sm text-white counter-value" data-target="94">0</div>
                            <div class="text-micro text-white/35 mt-0.5">% رضا العملاء</div>
                        </div>
                    </div>
                </div>

                <!-- Dashboard mockup -->
                <div class="hidden lg:block reveal visible" style="animation: fadeUp 0.7s 0.2s ease both;">
                    <div class="relative">
                        <div
                            class="bg-white/[0.06] backdrop-blur-md rounded-sys-xl border border-white/[0.08] p-5 shadow-2xl">
                            <!-- Browser bar -->
                            <div class="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                                <div class="flex items-center gap-1.5">
                                    <div class="w-2.5 h-2.5 rounded-full bg-white/15"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-white/15"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-white/15"></div>
                                </div>
                                <div class="text-[10px] text-white/20 font-mono tracking-wide">app.jazeel.sa</div>
                            </div>
                            <!-- Stats row -->
                            <div class="grid grid-cols-3 gap-2.5 mb-3">
                                <div class="bg-white/[0.05] rounded-sys p-3.5">
                                    <div class="text-white/35 text-micro mb-1.5">المقترحات</div>
                                    <div class="text-white text-heading-sm">12</div>
                                    <div class="mt-2 h-1 rounded-full bg-white/[0.08]">
                                        <div class="h-full w-3/4 rounded-full bg-jgreen/50"></div>
                                    </div>
                                </div>
                                <div class="bg-white/[0.05] rounded-sys p-3.5">
                                    <div class="text-white/35 text-micro mb-1.5">فرص المنح</div>
                                    <div class="text-jgreen text-heading-sm">7</div>
                                    <div class="mt-2 h-1 rounded-full bg-white/[0.08]">
                                        <div class="h-full w-1/2 rounded-full bg-jgreen/50"></div>
                                    </div>
                                </div>
                                <div class="bg-white/[0.05] rounded-sys p-3.5">
                                    <div class="text-white/35 text-micro mb-1.5">المشاريع</div>
                                    <div class="text-white text-heading-sm">23</div>
                                    <div class="mt-2 h-1 rounded-full bg-white/[0.08]">
                                        <div class="h-full w-[85%] rounded-full bg-jgreen/50"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Table -->
                            <div class="bg-white/[0.03] rounded-sys p-4">
                                <div class="text-white/40 text-micro font-bold mb-3">آخر المقترحات</div>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between py-2 border-b border-white/[0.05]">
                                        <div class="flex items-center gap-2.5">
                                            <div
                                                class="w-7 h-7 rounded-lg bg-jgreen/15 flex items-center justify-center">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                                                    stroke="#19B58B" stroke-width="2">
                                                    <path
                                                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                                                    <path d="M14 2v6h6" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div class="text-white/75 text-micro font-bold">مقترح تمكين الشباب</div>
                                                <div class="text-white/25 text-[9px]">جمعية النهضة</div>
                                            </div>
                                        </div>
                                        <span
                                            class="text-[9px] px-2 py-0.5 rounded-full bg-jgreen/15 text-jgreen font-bold">مكتمل</span>
                                    </div>
                                    <div class="flex items-center justify-between py-2 border-b border-white/[0.05]">
                                        <div class="flex items-center gap-2.5">
                                            <div
                                                class="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                                                    stroke="#F59E0B" stroke-width="2">
                                                    <path
                                                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                                                    <path d="M14 2v6h6" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div class="text-white/75 text-micro font-bold">برنامج التدريب المهني
                                                </div>
                                                <div class="text-white/25 text-[9px]">مؤسسة الإنماء</div>
                                            </div>
                                        </div>
                                        <span
                                            class="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 font-bold">قيد
                                            المراجعة</span>
                                    </div>
                                    <div class="flex items-center justify-between py-2">
                                        <div class="flex items-center gap-2.5">
                                            <div
                                                class="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                                                    stroke="#3B82F6" stroke-width="2">
                                                    <path
                                                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                                                    <path d="M14 2v6h6" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div class="text-white/75 text-micro font-bold">مبادرة الأمن الغذائي
                                                </div>
                                                <div class="text-white/25 text-[9px]">جمعية البركة</div>
                                            </div>
                                        </div>
                                        <span
                                            class="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 font-bold">مسودة</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Floating cards -->
                        <div class="absolute -top-3 -left-5 float-slow bg-white rounded-sys-lg p-3 shadow-sys-md border border-neutral-border/40"
                            style="min-width:130px;">
                            <div class="flex items-center gap-2 mb-1">
                                <div class="w-5 h-5 rounded bg-jgreen-50 flex items-center justify-center"><svg
                                        width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#19B58B"
                                        stroke-width="2.5">
                                        <path d="m9 12 2 2 4-4" />
                                    </svg></div>
                                <span class="text-[10px] font-bold text-navy">نسبة القبول</span>
                            </div>
                            <div class="text-heading-sm text-jgreen">%87</div>
                        </div>

                        <div class="absolute -bottom-3 -right-5 float-slow-d bg-white rounded-sys-lg p-3 shadow-sys-md border border-neutral-border/40"
                            style="min-width:135px;">
                            <div class="flex items-center gap-2 mb-1">
                                <div class="w-5 h-5 rounded bg-jgreen-50 flex items-center justify-center"><svg
                                        width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#19B58B"
                                        stroke-width="2.5">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg></div>
                                <span class="text-[10px] font-bold text-navy">دعم الذكاء الاصطناعي</span>
                            </div>
                            <div class="text-micro text-neutral-text">كتابة المقترحات</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════════
     TRUST BAR — Social Proof & Key Metrics
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-14 sm:py-16 bg-white border-b border-neutral-border/30">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <!-- Title — bigger -->
            <div class="text-center mb-8">
                <h2 class="text-heading-sm sm:text-heading text-navy">أكثر من <span
                        class="text-jgreen font-extrabold">850</span> جهة تعتمد على جزيل في تشغيل أعمالها</h2>
            </div>

            <!-- Logos — bigger cards, better spacing -->
            <div class="logo-marquee mb-10">
                <div class="logo-track" style="gap:2rem;">
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/alrajhi.png" alt="الراجحي الإنسانية"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/king-salman.png" alt="مركز الملك سلمان"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/ehsan.png" alt="إحسان"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/sdb.png" alt="بنك التنمية"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/awqaf.png" alt="الأوقاف"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/abanumay.png" alt="أبانمي"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/aljumaih.png" alt="الجميح"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <!-- duplicate for seamless loop -->
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/alrajhi.png" alt="الراجحي الإنسانية"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/king-salman.png" alt="مركز الملك سلمان"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/ehsan.png" alt="إحسان"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/sdb.png" alt="بنك التنمية"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/awqaf.png" alt="الأوقاف"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/abanumay.png" alt="أبانمي"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div
                        class="w-24 h-24 rounded-sys-lg bg-neutral-bg border border-neutral-border/40 flex items-center justify-center p-4 shrink-0 hover:shadow-sys-md hover:border-jgreen/20 transition-all duration-300">
                        <img src="@/assets/images/donors/aljumaih.png" alt="الجميح"
                            class="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500">
                    </div>
                </div>
            </div>

            <!-- Stats — with icons, better design, balanced spacing -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                <div
                    class="reveal group text-center py-7 px-5 rounded-sys-xl bg-white border border-neutral-border/50 hover:border-jgreen/25 hover:shadow-sys-md transition-all duration-300">
                    <div
                        class="w-11 h-11 rounded-full bg-jgreen/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2"
                            stroke-linecap="round">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M3 9h18" />
                            <path d="M9 21V9" />
                        </svg>
                    </div>
                    <div class="text-[1.75rem] sm:text-[2rem] font-extrabold text-navy counter-value leading-none"
                        data-target="850">0</div>
                    <div class="text-body-sm text-neutral-text mt-1.5 font-medium">منصة مفعّلة</div>
                </div>
                <div
                    class="reveal reveal-d1 group text-center py-7 px-5 rounded-sys-xl bg-white border border-neutral-border/50 hover:border-jgreen/25 hover:shadow-sys-md transition-all duration-300">
                    <div
                        class="w-11 h-11 rounded-full bg-jgreen/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2"
                            stroke-linecap="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                            <path d="M14 2v6h6" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                        </svg>
                    </div>
                    <div class="text-[1.75rem] sm:text-[2rem] font-extrabold text-jgreen counter-value leading-none"
                        data-target="2400">0</div>
                    <div class="text-body-sm text-neutral-text mt-1.5 font-medium">مقترح مشروع</div>
                </div>
                <div
                    class="reveal reveal-d2 group text-center py-7 px-5 rounded-sys-xl bg-white border border-neutral-border/50 hover:border-jgreen/25 hover:shadow-sys-md transition-all duration-300">
                    <div
                        class="w-11 h-11 rounded-full bg-jgreen/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2"
                            stroke-linecap="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="m9 11 3 3L22 4" />
                        </svg>
                    </div>
                    <div class="text-[1.75rem] sm:text-[2rem] font-extrabold text-navy counter-value leading-none"
                        data-target="120">0</div>
                    <div class="text-body-sm text-neutral-text mt-1.5 font-medium">فرصة منح ناجحة</div>
                </div>
                <div
                    class="reveal reveal-d3 group text-center py-7 px-5 rounded-sys-xl bg-white border border-neutral-border/50 hover:border-jgreen/25 hover:shadow-sys-md transition-all duration-300">
                    <div
                        class="w-11 h-11 rounded-full bg-jgreen/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2"
                            stroke-linecap="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <div class="text-[1.75rem] sm:text-[2rem] font-extrabold text-jgreen counter-value leading-none"
                        data-target="680">0</div>
                    <div class="text-body-sm text-neutral-text mt-1.5 font-medium">مشروع تنموي</div>
                </div>
            </div>
        </div>
    </section>


    <!-- ═══════════════════════════════════════════════════════════════
     PRODUCT ECOSYSTEM — What Jazeel Offers
     ═══════════════════════════════════════════════════════════════ -->
    <section id="capabilities" class="py-20 sm:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="text-center mb-16 reveal">
                <span class="badge-sys mb-4">منظومة جزيل</span>
                <h2 class="text-heading sm:text-display-sm text-navy mt-4 mb-4">ست قدرات تشغيلية في <span
                        class="text-jgreen">منصة واحدة</span></h2>
                <p class="text-body-lg text-neutral-text max-w-2xl mx-auto">من التخطيط الاستراتيجي إلى قياس الأثر — جزيل
                    تغطي رحلة العمل كاملة للجمعيات والجهات المانحة.</p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <!-- Capability 1 -->
                <div class="card-sys p-7 reveal">
                    <div class="w-11 h-11 rounded-sys bg-jgreen-50 flex items-center justify-center mb-5">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">إدارة الاستراتيجية</h3>
                    <p class="text-body text-neutral-text mb-5">حدّد الرؤية والأهداف الاستراتيجية لجمعيتك، واربط كل
                        مشروع ومقترح بأولوياتك التنموية.</p>
                    <div class="space-y-2.5">
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">تحديد الأهداف والمؤشرات</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">ربط المشاريع بالاستراتيجية</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">تقارير الإنجاز الاستراتيجي</span>
                        </div>
                    </div>
                </div>

                <!-- Capability 2 -->
                <div class="card-sys p-7 reveal reveal-d1">
                    <div class="w-11 h-11 rounded-sys bg-jgreen-50 flex items-center justify-center mb-5">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2v4" />
                            <path d="m15.2 7.6 2.4-2.4" />
                            <path d="M18 12h4" />
                            <path d="m15.2 16.4 2.4 2.4" />
                            <path d="M12 18v4" />
                            <path d="m4.9 19.1 2.4-2.4" />
                            <path d="M2 12h4" />
                            <path d="m4.9 4.9 2.4 2.4" />
                            <circle cx="12" cy="12" r="4" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">إدارة أفكار المشاريع</h3>
                    <p class="text-body text-neutral-text mb-5">اجمع الأفكار، قيّمها، وحوّل الأفضل منها إلى مقترحات
                        جاهزة بمنهجية واضحة ومنظمة.</p>
                    <div class="space-y-2.5">
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">بنك أفكار مركزي</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">معايير تقييم وترتيب</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">تحويل الفكرة إلى مقترح</span>
                        </div>
                    </div>
                </div>

                <!-- Capability 3 -->
                <div class="card-sys p-7 reveal reveal-d2">
                    <div class="w-11 h-11 rounded-sys bg-jgreen-50 flex items-center justify-center mb-5">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                            <path d="M14 2v6h6" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                            <path d="M10 9H8" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">كتابة المقترحات</h3>
                    <p class="text-body text-neutral-text mb-5">أدوات كتابة ذكية مدعومة بالذكاء الاصطناعي تساعدك في
                        صياغة مقترحات مقنعة وعالية الجودة.</p>
                    <div class="space-y-2.5">
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">مساعد كتابة بالذكاء الاصطناعي</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">قوالب مقترحات متعددة</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">تقييم جودة تلقائي</span>
                        </div>
                    </div>
                </div>

                <!-- Capability 4 -->
                <div class="card-sys p-7 reveal">
                    <div class="w-11 h-11 rounded-sys bg-navy/[0.05] flex items-center justify-center mb-5">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#07133F" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M3 9h18" />
                            <path d="M9 21V9" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">إدارة المشاريع</h3>
                    <p class="text-body text-neutral-text mb-5">تتبع كل مشروع من الإطلاق حتى الإغلاق، مع أدوات لإدارة
                        المهام والفرق والميزانيات.</p>
                    <div class="space-y-2.5">
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-navy/[0.06]"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#07133F" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">لوحة تحكم شاملة</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-navy/[0.06]"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#07133F" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">إدارة الميزانيات والمصروفات</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-navy/[0.06]"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#07133F" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">مؤشرات الأداء والتقارير</span>
                        </div>
                    </div>
                </div>

                <!-- Capability 5 -->
                <div class="card-sys p-7 reveal reveal-d1">
                    <div class="w-11 h-11 rounded-sys bg-navy/[0.05] flex items-center justify-center mb-5">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#07133F" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">إدارة فرص المنح</h3>
                    <p class="text-body text-neutral-text mb-5">اكتشف فرص المنح المناسبة، قدّم طلباتك، وتابع حالة
                        التقديم في بيئة شفافة ومنظمة.</p>
                    <div class="space-y-2.5">
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-navy/[0.06]"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#07133F" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">بحث وفلاتر متقدمة</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-navy/[0.06]"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#07133F" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">تقديم إلكتروني متكامل</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-navy/[0.06]"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#07133F" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">متابعة حالة الطلبات</span>
                        </div>
                    </div>
                </div>

                <!-- Capability 6 — AI -->
                <div class="card-sys p-7 relative overflow-hidden reveal reveal-d2">
                    <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-jgreen to-jgreen/40"></div>
                    <div class="w-11 h-11 rounded-sys bg-jgreen-50 flex items-center justify-center mb-5">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">الذكاء الاصطناعي</h3>
                    <p class="text-body text-neutral-text mb-5">مساعد ذكي يدعمك في كتابة المقترحات وتحسين المحتوى وتقديم
                        اقتراحات مبنية على البيانات.</p>
                    <div class="space-y-2.5">
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">توليد محتوى المقترحات</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">تحسين الصياغة تلقائياً</span>
                        </div>
                        <div class="flex items-center gap-2.5">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body-sm text-navy">توصيات ذكية للتحسين</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     JOURNEY — How Jazeel Works
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-20 sm:py-24 bg-neutral-bg">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="text-center mb-16 reveal">
                <span class="badge-sys mb-4">رحلة العمل</span>
                <h2 class="text-heading sm:text-display-sm text-navy mt-4 mb-4">من الفكرة إلى <span
                        class="text-jgreen">الأثر</span></h2>
                <p class="text-body-lg text-neutral-text max-w-2xl mx-auto">رحلة تشغيلية متكاملة تبدأ من التخطيط
                    الاستراتيجي وتنتهي بقياس النتائج.</p>
            </div>

            <!-- Journey Steps -->
            <div class="relative max-w-5xl mx-auto">
                <div class="hidden sm:block journey-connector"></div>
                <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 relative z-10">
                    <!-- Step 1 -->
                    <div class="reveal text-center">
                        <div
                            class="w-14 h-14 rounded-sys-lg bg-white border-2 border-jgreen shadow-sys flex items-center justify-center mx-auto mb-4">
                            <span class="text-body-lg font-black text-jgreen">1</span>
                        </div>
                        <h4 class="text-body font-bold text-navy mb-1.5">التخطيط الاستراتيجي</h4>
                        <p class="text-body-sm text-neutral-text">حدّد أولوياتك وأهدافك التنموية بوضوح.</p>
                    </div>
                    <!-- Step 2 -->
                    <div class="reveal reveal-d1 text-center">
                        <div
                            class="w-14 h-14 rounded-sys-lg bg-white border-2 border-jgreen/70 shadow-sys flex items-center justify-center mx-auto mb-4">
                            <span class="text-body-lg font-black text-jgreen">2</span>
                        </div>
                        <h4 class="text-body font-bold text-navy mb-1.5">توليد الأفكار</h4>
                        <p class="text-body-sm text-neutral-text">اجمع أفكار المشاريع وقيّمها بمنهجية.</p>
                    </div>
                    <!-- Step 3 -->
                    <div class="reveal reveal-d2 text-center">
                        <div
                            class="w-14 h-14 rounded-sys-lg bg-white border-2 border-jgreen shadow-sys flex items-center justify-center mx-auto mb-4">
                            <span class="text-body-lg font-black text-jgreen">3</span>
                        </div>
                        <h4 class="text-body font-bold text-navy mb-1.5">كتابة المقترح</h4>
                        <p class="text-body-sm text-neutral-text">صِغ مقترحاً مقنعاً بدعم الذكاء الاصطناعي.</p>
                    </div>
                    <!-- Step 4 -->
                    <div class="reveal reveal-d3 text-center">
                        <div
                            class="w-14 h-14 rounded-sys-lg bg-white border-2 border-jgreen/70 shadow-sys flex items-center justify-center mx-auto mb-4">
                            <span class="text-body-lg font-black text-jgreen">4</span>
                        </div>
                        <h4 class="text-body font-bold text-navy mb-1.5">التنفيذ والمتابعة</h4>
                        <p class="text-body-sm text-neutral-text">أدِر المشروع بأدوات متكاملة ومنظمة.</p>
                    </div>
                    <!-- Step 5 -->
                    <div class="reveal reveal-d4 text-center">
                        <div
                            class="w-14 h-14 rounded-sys-lg bg-white border-2 border-jgreen shadow-sys flex items-center justify-center mx-auto mb-4">
                            <span class="text-body-lg font-black text-jgreen">5</span>
                        </div>
                        <h4 class="text-body font-bold text-navy mb-1.5">قياس الأثر</h4>
                        <p class="text-body-sm text-neutral-text">قِس النتائج وشارك تقارير الأثر.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     TWO PORTALS
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-20 sm:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="text-center mb-16 reveal">
                <span class="badge-sys mb-4">بوابتان متكاملتان</span>
                <h2 class="text-heading sm:text-display-sm text-navy mt-4 mb-4">تجربة مخصصة لكل <span
                        class="text-jgreen">طرف</span></h2>
                <p class="text-body-lg text-neutral-text max-w-2xl mx-auto">بوابة مستقلة للجمعيات غير الربحية وأخرى
                    للجهات المانحة — كلتاهما متكاملتان داخل منظومة واحدة.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
                <!-- Associations Portal -->
                <div class="card-sys p-8 lg:p-10 relative overflow-hidden reveal">
                    <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-jgreen to-jgreen/40"></div>
                    <div class="w-12 h-12 rounded-sys-lg bg-jgreen-50 flex items-center justify-center mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-3">بوابة الجمعيات</h3>
                    <p class="text-body text-neutral-text mb-6">كل ما تحتاجه جمعيتك لاكتشاف فرص التمويل، وكتابة مقترحات
                        احترافية، وإدارة المشاريع التنموية بكفاءة.</p>
                    <div class="space-y-3 mb-8">
                        <div class="flex items-center gap-3">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body text-navy font-medium">اكتشاف فرص المنح
                                المناسبة</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body text-navy font-medium">كتابة المقترحات بدعم الذكاء
                                الاصطناعي</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body text-navy font-medium">إدارة المشاريع
                                والتقارير</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="check-icon bg-jgreen/10"><svg width="10" height="10" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body text-navy font-medium">متابعة حالة الطلبات
                                لحظياً</span>
                        </div>
                    </div>
                    <a href="#" class="btn-primary" style="font-size:0.875rem;">دخول بوابة الجمعيات <svg width="14"
                            height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round">
                            <path d="m12 19-7-7 7-7" />
                            <path d="M19 12H5" />
                        </svg></a>
                </div>

                <!-- Donors Portal -->
                <div class="card-sys p-8 lg:p-10 relative overflow-hidden reveal reveal-d1"
                    style="border-color: rgba(125,83,243,0.2);">
                    <div class="absolute top-0 left-0 right-0 h-[3px]"
                        style="background: linear-gradient(to left, #7D53F3, rgba(125,83,243,0.3));"></div>
                    <div class="w-12 h-12 rounded-sys-lg flex items-center justify-center mb-6"
                        style="background:rgba(125,83,243,0.08);">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-3">بوابة المانحين</h3>
                    <p class="text-body text-neutral-text mb-6">أدوات متقدمة لنشر فرص المنح، واستقبال وتقييم المقترحات،
                        ومتابعة أثر التمويل بشفافية.</p>
                    <div class="space-y-3 mb-8">
                        <div class="flex items-center gap-3">
                            <div class="check-icon" style="background:rgba(125,83,243,0.08);"><svg width="10"
                                    height="10" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body text-navy font-medium">نشر وإدارة فرص المنح</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="check-icon" style="background:rgba(125,83,243,0.08);"><svg width="10"
                                    height="10" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body text-navy font-medium">تقييم المقترحات بمعايير
                                واضحة</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="check-icon" style="background:rgba(125,83,243,0.08);"><svg width="10"
                                    height="10" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body text-navy font-medium">لوحة تحكم شاملة وفورية</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="check-icon" style="background:rgba(125,83,243,0.08);"><svg width="10"
                                    height="10" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="3">
                                    <path d="m9 12 2 2 4-4" />
                                </svg></div><span class="text-body text-navy font-medium">تقارير الأثر والمتابعة</span>
                        </div>
                    </div>
                    <a href="donor-portal.html" class="btn-violet" style="font-size:0.875rem;">دخول بوابة المانحين <svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round">
                            <path d="m12 19-7-7 7-7" />
                            <path d="M19 12H5" />
                        </svg></a>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     VALUE — Old Way vs Jazeel
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-20 sm:py-24 bg-neutral-bg">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="text-center mb-16 reveal">
                <span class="badge-sys mb-4">لماذا جزيل</span>
                <h2 class="text-heading sm:text-display-sm text-navy mt-4 mb-4">العمل المبعثر <span
                        class="text-jgreen">مقابل منظومة جزيل</span></h2>
                <p class="text-body-lg text-neutral-text max-w-2xl mx-auto">قارن بين الطرق التقليدية المتفرقة وبين
                    منظومة تشغيلية متكاملة تغطي كل احتياجاتك.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <!-- Old Way -->
                <div class="card-sys p-8 relative overflow-hidden reveal" style="border-color: #E5E8EB;">
                    <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-red-200 to-red-100"></div>
                    <div class="text-body font-bold text-red-400 mb-6">الطريقة التقليدية</div>
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <svg class="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#F87171" stroke-width="2.5">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span class="text-body text-neutral-text">تخطيط استراتيجي في ملفات متفرقة بدون ربط</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#F87171" stroke-width="2.5">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span class="text-body text-neutral-text">كتابة المقترحات يدوياً بدون معايير أو قوالب</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#F87171" stroke-width="2.5">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span class="text-body text-neutral-text">متابعة المشاريع عبر جداول Excel مبعثرة</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#F87171" stroke-width="2.5">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span class="text-body text-neutral-text">البحث عن المنح يدوياً في مواقع متعددة</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#F87171" stroke-width="2.5">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span class="text-body text-neutral-text">صعوبة قياس الأثر ومشاركة النتائج</span>
                        </div>
                    </div>
                </div>

                <!-- Jazeel Way -->
                <div class="card-sys p-8 relative overflow-hidden reveal reveal-d1"
                    style="border-color: rgba(25,181,139,0.25); box-shadow: 0 4px 24px rgba(25,181,139,0.06);">
                    <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-jgreen to-jgreen/40"></div>
                    <div class="text-body font-bold text-jgreen mb-6">منظومة جزيل</div>
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <svg class="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#19B58B" stroke-width="2.5">
                                <path d="m9 12 2 2 4-4" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                            <span class="text-body text-navy font-medium">استراتيجية مربوطة بالمشاريع والمؤشرات</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#19B58B" stroke-width="2.5">
                                <path d="m9 12 2 2 4-4" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                            <span class="text-body text-navy font-medium">كتابة مقترحات بدعم الذكاء الاصطناعي وقوالب
                                جاهزة</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#19B58B" stroke-width="2.5">
                                <path d="m9 12 2 2 4-4" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                            <span class="text-body text-navy font-medium">لوحة تحكم واحدة لكل المشاريع
                                والميزانيات</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#19B58B" stroke-width="2.5">
                                <path d="m9 12 2 2 4-4" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                            <span class="text-body text-navy font-medium">محرك بحث ذكي لفرص المنح مع فلاتر متقدمة</span>
                        </div>
                        <div class="flex items-start gap-3">
                            <svg class="shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#19B58B" stroke-width="2.5">
                                <path d="m9 12 2 2 4-4" />
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                            <span class="text-body text-navy font-medium">تقارير أثر تلقائية وقابلة للمشاركة</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     USE CASES
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-20 sm:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="text-center mb-16 reveal">
                <span class="badge-sys mb-4">حالات استخدام</span>
                <h2 class="text-heading sm:text-display-sm text-navy mt-4 mb-4">كيف تستفيد الجهات من <span
                        class="text-jgreen">جزيل</span>؟</h2>
                <p class="text-body-lg text-neutral-text max-w-2xl mx-auto">سيناريوهات تشغيلية واقعية توضح القيمة
                    الحقيقية للمنصة.</p>
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
                <div class="card-sys p-7 reveal">
                    <div class="w-10 h-10 rounded-sys bg-jgreen-50 flex items-center justify-center mb-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                            <path d="M14 2v6h6" />
                        </svg>
                    </div>
                    <h4 class="text-heading-sm text-navy mb-2">جمعية تُعدّ مقترح مشروع</h4>
                    <p class="text-body text-neutral-text">تحتاج جمعية تعليمية لتقديم مقترح لمنحة تدريبية. تستخدم جزيل
                        لاختيار القالب، ملء البيانات بمساعدة الذكاء الاصطناعي، ومراجعة جودة المقترح — كل ذلك في ساعات
                        بدلاً من أيام.</p>
                </div>
                <div class="card-sys p-7 reveal reveal-d1">
                    <div class="w-10 h-10 rounded-sys bg-navy/[0.05] flex items-center justify-center mb-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#07133F" stroke-width="2">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                        </svg>
                    </div>
                    <h4 class="text-heading-sm text-navy mb-2">جهة مانحة تنشر فرصة</h4>
                    <p class="text-body text-neutral-text">تريد مؤسسة مانحة إطلاق فرصة تمويل. تنشر الفرصة عبر جزيل،
                        تستقبل الطلبات إلكترونياً، وتقيّم المقترحات بمعايير واضحة مع تقارير فورية.</p>
                </div>
                <div class="card-sys p-7 reveal">
                    <div class="w-10 h-10 rounded-sys bg-navy/[0.05] flex items-center justify-center mb-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#07133F" stroke-width="2">
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M3 9h18" />
                            <path d="M9 21V9" />
                        </svg>
                    </div>
                    <h4 class="text-heading-sm text-navy mb-2">فريق تنفيذي يتابع التقدم</h4>
                    <p class="text-body text-neutral-text">يدير فريق تنفيذي 5 مشاريع متزامنة. يستخدم لوحة تحكم جزيل
                        لتتبع المهام والمعالم والميزانيات ومؤشرات الأداء في مكان واحد.</p>
                </div>
                <div class="card-sys p-7 reveal reveal-d1">
                    <div class="w-10 h-10 rounded-sys bg-jgreen-50 flex items-center justify-center mb-4">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2">
                            <path d="M3 3v18h18" />
                            <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                    </div>
                    <h4 class="text-heading-sm text-navy mb-2">إدارة عليا تريد رؤية شاملة</h4>
                    <p class="text-body text-neutral-text">تحتاج الإدارة العليا رؤية شاملة لأداء المشاريع والنتائج.
                        تستخدم تقارير جزيل التفاعلية للحصول على رؤى فورية تدعم قرارات التطوير.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     BLOG / KNOWLEDGE
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-20 sm:py-24 bg-neutral-bg">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="flex items-end justify-between mb-12 reveal">
                <div>
                    <span class="badge-sys mb-4">مركز المعرفة</span>
                    <h2 class="text-heading sm:text-display-sm text-navy mt-4">أحدث المقالات والأدلة</h2>
                </div>
                <a href="#"
                    class="hidden sm:inline-flex items-center gap-2 text-body-sm font-bold text-jgreen hover:underline">
                    عرض الكل
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round">
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                </a>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div class="card-sys overflow-hidden reveal">
                    <div
                        class="aspect-[16/9] bg-gradient-to-br from-jgreen-50 to-jgreen-100 flex items-center justify-center">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="1.5"
                            opacity="0.4">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                            <path d="M14 2v6h6" />
                        </svg>
                    </div>
                    <div class="p-6">
                        <span class="text-micro font-bold text-jgreen bg-jgreen-50 px-2.5 py-1 rounded-full">دليل</span>
                        <h4 class="text-heading-sm text-navy mt-3 mb-2">كيف تكتب مقترح مشروع ناجح؟</h4>
                        <p class="text-body-sm text-neutral-text line-clamp-2">دليل شامل يغطي أساسيات كتابة المقترحات من
                            الفكرة حتى التقديم النهائي.</p>
                        <div
                            class="mt-4 pt-4 border-t border-neutral-border/30 flex items-center justify-between text-micro text-neutral-light">
                            <span>5 دقائق قراءة</span>
                            <span>12 أبريل 2026</span>
                        </div>
                    </div>
                </div>
                <div class="card-sys overflow-hidden reveal reveal-d1">
                    <div
                        class="aspect-[16/9] bg-gradient-to-br from-navy/[0.04] to-navy/[0.08] flex items-center justify-center">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#07133F" stroke-width="1.5"
                            opacity="0.25">
                            <path d="M3 3v18h18" />
                            <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                    </div>
                    <div class="p-6">
                        <span
                            class="text-micro font-bold text-navy bg-navy/[0.05] px-2.5 py-1 rounded-full">تحليل</span>
                        <h4 class="text-heading-sm text-navy mt-3 mb-2">أفضل ممارسات إدارة المشاريع التنموية</h4>
                        <p class="text-body-sm text-neutral-text line-clamp-2">أحدث الأساليب في إدارة المشاريع وقياس
                            الأثر في القطاع غير الربحي.</p>
                        <div
                            class="mt-4 pt-4 border-t border-neutral-border/30 flex items-center justify-between text-micro text-neutral-light">
                            <span>8 دقائق قراءة</span>
                            <span>10 أبريل 2026</span>
                        </div>
                    </div>
                </div>
                <div class="card-sys overflow-hidden reveal reveal-d2">
                    <div
                        class="aspect-[16/9] bg-gradient-to-br from-jgreen-50 to-jgreen-100 flex items-center justify-center">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="1.5"
                            opacity="0.4">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                    </div>
                    <div class="p-6">
                        <span
                            class="text-micro font-bold text-jgreen bg-jgreen-50 px-2.5 py-1 rounded-full">نصائح</span>
                        <h4 class="text-heading-sm text-navy mt-3 mb-2">5 أخطاء شائعة في التقديم على المنح</h4>
                        <p class="text-body-sm text-neutral-text line-clamp-2">تجنب هذه الأخطاء الشائعة لزيادة فرص قبول
                            مقترحاتك في المرة الأولى.</p>
                        <div
                            class="mt-4 pt-4 border-t border-neutral-border/30 flex items-center justify-between text-micro text-neutral-light">
                            <span>4 دقائق قراءة</span>
                            <span>8 أبريل 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     CTA FINAL
     ═══════════════════════════════════════════════════════════════ -->
    <section class="cta-gradient py-20 sm:py-24 relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-10 right-16 w-72 h-72 rounded-full bg-jgreen/[0.04] blur-[100px]"></div>
            <div class="absolute bottom-10 left-16 w-80 h-80 rounded-full bg-jgreen/[0.03] blur-[120px]"></div>
        </div>
        <div class="relative max-w-3xl mx-auto px-5 sm:px-8 text-center reveal">
            <h2 class="text-heading sm:text-display-sm text-white mb-5">
                جاهز لتنظيم عمل جمعيتك<br>بمنظومة تشغيلية متكاملة؟
            </h2>
            <p class="text-body-lg text-white/45 max-w-xl mx-auto mb-10">
                انضم إلى أكثر من 850 جهة تعتمد على جزيل في إدارة استراتيجياتها ومقترحاتها ومشاريعها وفرص المنح.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
                <a href="#" class="btn-primary" style="padding:0.875rem 2.25rem;">
                    ابدأ التجربة المجانية
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round">
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                </a>
                <a href="#" class="btn-secondary" style="padding:0.875rem 2.25rem;">تواصل مع فريق المبيعات</a>
            </div>
            <p class="text-micro text-white/25 mt-8">مجاني لمدة 14 يوم · لا يتطلب بطاقة ائتمان · إلغاء في أي وقت</p>
        </div>
    </section>

</template>