<script setup>
useSeoMeta({
    title: 'بوابة المانحين — جزيل | منظومة متقدمة لإدارة المنح والمبادرات',
    description: 'جزيل تمكّن الجهات المانحة من إدارة المبادرات وفرص المنح واستقبال الطلبات ومتابعة التنفيذ، سواء عبر حساب داخل المنصة أو نظام خاص ومخصص بالكامل.',
})
</script>
<template>

    <!-- ═══════════════════════════════════════════════════════════════
     1. HERO SECTION
     ═══════════════════════════════════════════════════════════════ -->
    <section class="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center pt-[68px]">
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-24 left-16 w-80 h-80 rounded-full blur-[120px]"
                style="background:rgba(125,83,243,0.08);"></div>
            <div class="absolute bottom-16 right-20 w-96 h-96 rounded-full blur-[140px]"
                style="background:rgba(125,83,243,0.05);"></div>
            <div class="absolute top-1/2 left-1/3 w-[500px] h-[300px] rounded-full blur-[160px]"
                style="background:rgba(25,181,139,0.04);"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 w-full">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <!-- Text Column -->
                <div>
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 reveal visible"
                        style="animation: fadeUp 0.6s ease both; background:rgba(125,83,243,0.06); border-color:rgba(125,83,243,0.15);">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                        <span class="text-micro font-semibold" style="color:#7D53F3;">منظومة إدارة المنح المتقدمة</span>
                    </div>

                    <h1 class="text-display text-navy mb-5 reveal visible"
                        style="animation: fadeUp 0.6s 0.1s ease both;">
                        بيئة تشغيلية متكاملة<br>
                        <span style="color:#7D53F3;">للجهات المانحة</span>
                    </h1>

                    <p class="text-body-lg text-neutral-text mb-8 max-w-lg reveal visible"
                        style="animation: fadeUp 0.6s 0.2s ease both;">
                        نظّم مبادراتك، وأعلن عن فرص المنح، واستقبل الطلبات وقيّمها، وتابع التنفيذ والنتائج — من حسابك في
                        جزيل أو عبر نظام مخصص بالكامل لجهتك.
                    </p>

                    <div class="flex flex-wrap gap-3 mb-10 reveal visible"
                        style="animation: fadeUp 0.6s 0.3s ease both;">
                        <a href="https://donor.jazeel.net.sa/login" class="btn-violet">
                            تسجيل دخول المانحين
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5" stroke-linecap="round">
                                <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
                                <path d="M10 17l5-5-5-5" />
                                <path d="M15 12H3" />
                            </svg>
                        </a>
                        <a href="#custom-system" class="btn-secondary">
                            اطلب منصة مخصصة
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round">
                                <path
                                    d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" />
                            </svg>
                        </a>
                    </div>

                    <!-- Hero Stats -->
                    <div class="flex items-center gap-8 reveal visible" style="animation: fadeUp 0.6s 0.4s ease both;">
                        <div>
                            <div class="text-heading text-navy font-bold counter-value" data-target="850">0</div>
                            <div class="text-caption text-neutral-text">جهة مستفيدة</div>
                        </div>
                        <div class="w-px h-10 bg-neutral-border"></div>
                        <div>
                            <div class="text-heading text-navy font-bold counter-value" data-target="120">0</div>
                            <div class="text-caption text-neutral-text">فرصة منح ناجحة</div>
                        </div>
                        <div class="w-px h-10 bg-neutral-border"></div>
                        <div>
                            <div class="text-heading font-bold" style="color:#7D53F3;">+40%</div>
                            <div class="text-caption text-neutral-text">كفاءة تشغيلية</div>
                        </div>
                    </div>
                </div>

                <!-- Visual Column: Dashboard Mockup -->
                <div class="relative reveal visible" style="animation: fadeUp 0.8s 0.3s ease both;">
                    <!-- Main Dashboard Card -->
                    <div class="rounded-sys-xl p-5 shadow-sys-lg border"
                        style="background:rgba(255,255,255,0.85); backdrop-filter:blur(12px); border-color:rgba(125,83,243,0.1);">
                        <!-- Top Bar -->
                        <div class="flex items-center justify-between mb-4 pb-3"
                            style="border-bottom:1px solid rgba(125,83,243,0.08);">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-lg flex items-center justify-center"
                                    style="background:rgba(125,83,243,0.1);">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7D53F3"
                                        stroke-width="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                    </svg>
                                </div>
                                <span class="text-caption text-navy font-bold">لوحة تحكم المانح</span>
                            </div>
                            <div class="flex gap-1.5">
                                <div class="w-2.5 h-2.5 rounded-full" style="background:#7D53F3;"></div>
                                <div class="w-2.5 h-2.5 rounded-full bg-neutral-border"></div>
                                <div class="w-2.5 h-2.5 rounded-full bg-neutral-border"></div>
                            </div>
                        </div>

                        <!-- Stat Cards Row -->
                        <div class="grid grid-cols-3 gap-3 mb-4">
                            <div class="rounded-sys p-3 text-center" style="background:rgba(125,83,243,0.05);">
                                <div class="text-heading-sm font-bold" style="color:#7D53F3;">24</div>
                                <div class="text-micro text-neutral-text">فرصة نشطة</div>
                            </div>
                            <div class="rounded-sys p-3 text-center bg-neutral-bg">
                                <div class="text-heading-sm text-navy font-bold">187</div>
                                <div class="text-micro text-neutral-text">طلب مستلم</div>
                            </div>
                            <div class="rounded-sys p-3 text-center bg-neutral-bg">
                                <div class="text-heading-sm text-navy font-bold">12</div>
                                <div class="text-micro text-neutral-text">مبادرة قائمة</div>
                            </div>
                        </div>

                        <!-- Progress Bars -->
                        <div class="space-y-3">
                            <div class="rounded-sys p-3 bg-neutral-bg">
                                <div class="flex justify-between mb-2">
                                    <span class="text-micro text-navy/70 font-semibold">برنامج تمكين الشباب</span>
                                    <span class="text-micro text-jgreen font-bold">78%</span>
                                </div>
                                <div class="w-full h-1.5 bg-neutral-border/50 rounded-full overflow-hidden">
                                    <div class="h-full bg-jgreen rounded-full" style="width:78%"></div>
                                </div>
                            </div>
                            <div class="rounded-sys p-3 bg-neutral-bg">
                                <div class="flex justify-between mb-2">
                                    <span class="text-micro text-navy/70 font-semibold">مبادرة الابتكار الاجتماعي</span>
                                    <span class="text-micro font-bold" style="color:#7D53F3;">45%</span>
                                </div>
                                <div class="w-full h-1.5 bg-neutral-border/50 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full" style="width:45%;background:#7D53F3;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Floating Cards -->
                    <div class="absolute -right-4 top-8 float-slow">
                        <div class="rounded-sys-lg p-3 flex items-center gap-3 shadow-sys-md border"
                            style="min-width:180px; background:rgba(255,255,255,0.92); backdrop-filter:blur(8px); border-color:rgba(125,83,243,0.12);">
                            <div class="w-9 h-9 rounded-lg flex items-center justify-center"
                                style="background:rgba(125,83,243,0.08);">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7D53F3"
                                    stroke-width="2">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-micro text-neutral-text">الطلبات الجديدة</div>
                                <div class="text-caption text-navy font-bold">+23 اليوم</div>
                            </div>
                        </div>
                    </div>

                    <div class="absolute -left-4 bottom-12 float-slow-d">
                        <div class="rounded-sys-lg p-3 flex items-center gap-3 shadow-sys-md bg-white border border-neutral-border"
                            style="min-width:180px;">
                            <div class="w-9 h-9 rounded-lg bg-jgreen-50 flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#19B58B"
                                    stroke-width="2">
                                    <path d="M9 11l3 3L22 4" />
                                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                                </svg>
                            </div>
                            <div>
                                <div class="text-micro text-neutral-text">تم اعتماده</div>
                                <div class="text-caption text-jgreen font-bold">8 مقترحات</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     2. THREE MODELS SECTION
     ═══════════════════════════════════════════════════════════════ -->
    <section id="models" class="py-20 lg:py-28 bg-white">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <!-- Section Header -->
            <div class="text-center mb-14 reveal">
                <div class="badge-sys mx-auto mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                    </svg>
                    نماذج الاستخدام
                </div>
                <h2 class="text-display-sm text-navy mb-4">ثلاث طرق لبناء تجربتك كمانح</h2>
                <p class="text-body-lg text-neutral-text max-w-2xl mx-auto">
                    سواء كنت تبدأ خطواتك الأولى أو تبحث عن بيئة منح مؤسسية كاملة، جزيل توفر لك المسار المناسب.
                </p>
            </div>

            <!-- Three Model Cards -->
            <div class="grid md:grid-cols-3 gap-6">
                <!-- Model 1 -->
                <div class="card-sys p-7 reveal reveal-d1 flex flex-col">
                    <div class="w-12 h-12 rounded-sys bg-jgreen-50 flex items-center justify-center mb-5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2"
                            stroke-linecap="round">
                            <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 00-3-3.87" />
                            <path d="M16 3.13a4 4 0 010 7.75" />
                        </svg>
                    </div>
                    <div class="text-micro text-jgreen font-bold mb-2">النموذج الأول</div>
                    <h3 class="text-heading-sm text-navy mb-3">افتح حسابك في جزيل</h3>
                    <p class="text-body text-neutral-text mb-5 flex-1">
                        ابدأ فورًا بالإعلان عن فرص المنح واستقبال الطلبات من الجمعيات. مثالي للجهات التي تريد البدء
                        سريعًا بتجربة مرنة وجاهزة.
                    </p>
                    <ul class="space-y-2.5 mb-6 text-body-sm text-neutral-text">
                        <li class="flex items-start gap-2.5">
                            <span class="check-icon bg-jgreen-50 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            إنشاء فرص منح ونشرها فورًا
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="check-icon bg-jgreen-50 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            استقبال وإدارة الطلبات
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="check-icon bg-jgreen-50 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            متابعة أولية مرنة
                        </li>
                    </ul>
                    <a href="https://donor.jazeel.net.sa/login" class="btn-primary justify-center">ابدأ الآن</a>
                </div>

                <!-- Model 2: Popular -->
                <div class="card-sys model-card-popular p-7 reveal reveal-d2 flex flex-col">
                    <div class="w-12 h-12 rounded-sys bg-indigo-light flex items-center justify-center mb-5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="2"
                            stroke-linecap="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M3 9h18" />
                            <path d="M9 21V9" />
                        </svg>
                    </div>
                    <div class="text-micro text-indigo font-bold mb-2">النموذج الثاني</div>
                    <h3 class="text-heading-sm text-navy mb-3">شغّل إدارة المنح باحتراف</h3>
                    <p class="text-body text-neutral-text mb-5 flex-1">
                        نظام أشمل لإدارة المبادرات والمراحل والتقييم، مع لوحات متابعة وتقارير متقدمة. للجهات التي تحتاج
                        عمقًا تشغيليًا أكبر.
                    </p>
                    <ul class="space-y-2.5 mb-6 text-body-sm text-neutral-text">
                        <li class="flex items-start gap-2.5">
                            <span class="check-icon bg-indigo-light mt-0.5"><svg width="12" height="12"
                                    viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            إدارة كاملة للمراحل والتقييم
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="check-icon bg-indigo-light mt-0.5"><svg width="12" height="12"
                                    viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            لوحات مؤشرات وتقارير تفصيلية
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="check-icon bg-indigo-light mt-0.5"><svg width="12" height="12"
                                    viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            متابعة التنفيذ والمخرجات
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="check-icon bg-indigo-light mt-0.5"><svg width="12" height="12"
                                    viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            إدارة الجهات المستفيدة
                        </li>
                    </ul>
                    <a href="#" class="btn-primary justify-center" style="background:#7D53F3;">اطلب نسخة تجريبية</a>
                </div>

                <!-- Model 3 -->
                <div class="card-sys p-7 reveal reveal-d3 flex flex-col"
                    style="background: linear-gradient(165deg, #FAFBFF 0%, #fff 100%);">
                    <div class="w-12 h-12 rounded-sys bg-navy/5 flex items-center justify-center mb-5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#07133F" stroke-width="2"
                            stroke-linecap="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <div class="text-micro text-navy/60 font-bold mb-2">النموذج الثالث</div>
                    <h3 class="text-heading-sm text-navy mb-3">اطلب نظامك المخصص</h3>
                    <p class="text-body text-neutral-text mb-5 flex-1">
                        نسخة خاصة بهوية جهتك ونطاقها المستقل. استقلالية كاملة ومرونة عالية وتجربة مخصصة تناسب احتياجات
                        المانحين الكبار والمجالس.
                    </p>
                    <ul class="space-y-2.5 mb-6 text-body-sm text-neutral-text">
                        <li class="flex items-start gap-2.5">
                            <span class="check-icon bg-navy/5 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="#07133F" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            هوية بصرية ونطاق خاص
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="check-icon bg-navy/5 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="#07133F" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            استقلالية تامة في الإعلان والإدارة
                        </li>
                        <li class="flex items-start gap-2.5">
                            <span class="check-icon bg-navy/5 mt-0.5"><svg width="12" height="12" viewBox="0 0 24 24"
                                    fill="none" stroke="#07133F" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            مناسب للمجالس والمؤسسات الكبرى
                        </li>
                    </ul>
                    <a href="#custom" class="btn-outline-dark justify-center">تحدث معنا</a>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     3. CAPABILITIES SECTION
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-20 lg:py-28 bg-neutral-bg">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="text-center mb-14 reveal">
                <div class="badge-sys mx-auto mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                    </svg>
                    القدرات التشغيلية
                </div>
                <h2 class="text-display-sm text-navy mb-4">ماذا يستطيع المانح أن يدير عبر جزيل؟</h2>
                <p class="text-body-lg text-neutral-text max-w-2xl mx-auto">
                    منظومة متكاملة تغطي دورة المنح بالكامل، من الإعلان إلى المتابعة وقياس الأثر.
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <!-- Cap 1 -->
                <div class="card-sys p-6 reveal reveal-d1">
                    <div class="w-11 h-11 rounded-sys bg-jgreen-50 flex items-center justify-center mb-4">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2">
                            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">إدارة المبادرات</h3>
                    <p class="text-body-sm text-neutral-text">تنظيم البرامج والمبادرات المانحة في بيئة مركزية واضحة
                        وقابلة للتوسع.</p>
                </div>

                <!-- Cap 2 -->
                <div class="card-sys p-6 reveal reveal-d2">
                    <div class="w-11 h-11 rounded-sys bg-indigo-light flex items-center justify-center mb-4">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="2">
                            <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">إدارة فرص المنح</h3>
                    <p class="text-body-sm text-neutral-text">إنشاء فرص المنح وتحديد شروطها ومعاييرها ونشرها بسهولة.</p>
                </div>

                <!-- Cap 3 -->
                <div class="card-sys p-6 reveal reveal-d3">
                    <div class="w-11 h-11 rounded-sys bg-jgreen-50 flex items-center justify-center mb-4">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2">
                            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                            <rect x="8" y="2" width="8" height="4" rx="1" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">استقبال الطلبات</h3>
                    <p class="text-body-sm text-neutral-text">استقبال طلبات الجمعيات والمقترحات وتصنيفها وإدارتها
                        بكفاءة.</p>
                </div>

                <!-- Cap 4 -->
                <div class="card-sys p-6 reveal reveal-d4">
                    <div class="w-11 h-11 rounded-sys bg-indigo-light flex items-center justify-center mb-4">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="2">
                            <path d="M9 11l3 3L22 4" />
                            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">التقييم والمراجعة</h3>
                    <p class="text-body-sm text-neutral-text">نظام تقييم منظم للمقترحات مع معايير واضحة ومخرجات قابلة
                        للقياس.</p>
                </div>

                <!-- Cap 5 -->
                <div class="card-sys p-6 reveal reveal-d1">
                    <div class="w-11 h-11 rounded-sys bg-jgreen-50 flex items-center justify-center mb-4">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 00-3-3.87" />
                            <path d="M16 3.13a4 4 0 010 7.75" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">إدارة الجهات المستفيدة</h3>
                    <p class="text-body-sm text-neutral-text">ملفات تعريفية شاملة للجمعيات الشريكة وسجل التعامل معها.
                    </p>
                </div>

                <!-- Cap 6 -->
                <div class="card-sys p-6 reveal reveal-d2">
                    <div class="w-11 h-11 rounded-sys bg-jgreen-50 flex items-center justify-center mb-4">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">متابعة المشاريع</h3>
                    <p class="text-body-sm text-neutral-text">تتبع تقدم المشاريع الممولة ومراقبة المخرجات والنتائج.</p>
                </div>

                <!-- Cap 7 -->
                <div class="card-sys p-6 reveal reveal-d3">
                    <div class="w-11 h-11 rounded-sys bg-indigo-light flex items-center justify-center mb-4">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7D53F3" stroke-width="2">
                            <path d="M18 20V10" />
                            <path d="M12 20V4" />
                            <path d="M6 20v-6" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">التقارير والمؤشرات</h3>
                    <p class="text-body-sm text-neutral-text">لوحات مؤشرات شاملة وتقارير تحليلية لدعم اتخاذ القرار.</p>
                </div>

                <!-- Cap 8 -->
                <div class="card-sys p-6 reveal reveal-d4">
                    <div class="w-11 h-11 rounded-sys bg-jgreen-50 flex items-center justify-center mb-4">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="2">
                            <circle cx="12" cy="12" r="3" />
                            <path
                                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                        </svg>
                    </div>
                    <h3 class="text-heading-sm text-navy mb-2">التنظيم التشغيلي</h3>
                    <p class="text-body-sm text-neutral-text">سير عمل منظم وأدوات تواصل فعالة مع الفرق والجهات.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     4. JOURNEY SECTION
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-20 lg:py-28 bg-white">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="text-center mb-14 reveal">
                <div class="badge-sys mx-auto mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    رحلة المانح
                </div>
                <h2 class="text-display-sm text-navy mb-4">من الإعلان إلى قياس الأثر</h2>
                <p class="text-body-lg text-neutral-text max-w-2xl mx-auto">
                    رحلة تشغيلية واضحة تمكّنك من إدارة دورة المنح بالكامل في مكان واحد.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Step 1 -->
                <div class="card-sys p-6 reveal reveal-d1 relative">
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-indigo flex items-center justify-center text-white text-caption font-bold">
                            1</div>
                        <h3 class="text-heading-sm text-navy">إنشاء المبادرة</h3>
                    </div>
                    <p class="text-body text-neutral-text">حدد أهداف مبادرتك وشروط المنح والفئات المستهدفة وأنشئ برنامجك
                        التمويلي.</p>
                </div>

                <!-- Step 2 -->
                <div class="card-sys p-6 reveal reveal-d2 relative">
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-indigo flex items-center justify-center text-white text-caption font-bold">
                            2</div>
                        <h3 class="text-heading-sm text-navy">نشر فرص المنح</h3>
                    </div>
                    <p class="text-body text-neutral-text">أعلن عن الفرص المتاحة وحدد المعايير والمواعيد واستقبل الطلبات
                        من الجمعيات.</p>
                </div>

                <!-- Step 3 -->
                <div class="card-sys p-6 reveal reveal-d3 relative">
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-indigo flex items-center justify-center text-white text-caption font-bold">
                            3</div>
                        <h3 class="text-heading-sm text-navy">الفرز والتقييم</h3>
                    </div>
                    <p class="text-body text-neutral-text">استعرض الطلبات وقيّم المقترحات وفق معايير محددة وصنّف الأفضل.
                    </p>
                </div>

                <!-- Step 4 -->
                <div class="card-sys p-6 reveal reveal-d1 relative">
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-caption font-bold">
                            4</div>
                        <h3 class="text-heading-sm text-navy">الاعتماد والاختيار</h3>
                    </div>
                    <p class="text-body text-neutral-text">اتخذ قرارات الاعتماد بناءً على بيانات واضحة وأبلغ الجهات
                        بالنتائج.</p>
                </div>

                <!-- Step 5 -->
                <div class="card-sys p-6 reveal reveal-d2 relative">
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-caption font-bold">
                            5</div>
                        <h3 class="text-heading-sm text-navy">متابعة التنفيذ</h3>
                    </div>
                    <p class="text-body text-neutral-text">تابع تقدم المشاريع الممولة وراقب المخرجات والمراحل الزمنية.
                    </p>
                </div>

                <!-- Step 6 -->
                <div class="card-sys p-6 reveal reveal-d3 relative">
                    <div class="flex items-center gap-3 mb-4">
                        <div
                            class="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-caption font-bold">
                            6</div>
                        <h3 class="text-heading-sm text-navy">قياس الأثر</h3>
                    </div>
                    <p class="text-body text-neutral-text">احصل على تقارير شاملة عن الأثر والنتائج لدعم قراراتك
                        المستقبلية.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     5. CUSTOM SYSTEM SECTION (Premium)
     ═══════════════════════════════════════════════════════════════ -->
    <section id="custom" class="py-20 lg:py-28 bg-navy text-white overflow-hidden relative">
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-0 left-0 w-96 h-96 rounded-full bg-indigo-accent/[0.06] blur-[120px]"></div>
            <div class="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-jgreen/[0.03] blur-[100px]"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-5 sm:px-8">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <!-- Text -->
                <div class="reveal">
                    <div class="badge-sys mb-6" style="background:rgba(125,83,243,0.15); color:#9574F7;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                        نظام مخصص بالكامل
                    </div>
                    <h2 class="text-display-sm mb-5">نظامك الخاص،<br>بهويتك واستقلاليتك الكاملة</h2>
                    <p class="text-body-lg text-white/65 mb-8 max-w-lg">
                        نقدم لك نسخة مستقلة من منظومة جزيل، مصممة بهوية جهتك البصرية ونطاقك الخاص، مع مرونة كاملة في
                        إدارة فرص المنح والمبادرات دون أي ارتباط بمنصة مشتركة.
                    </p>

                    <div class="grid sm:grid-cols-2 gap-4 mb-8">
                        <div class="flex items-start gap-3">
                            <span class="check-icon mt-1" style="background: rgba(25,181,139,0.15);"><svg width="12"
                                    height="12" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            <div>
                                <div class="text-body font-bold mb-0.5">هوية بصرية مستقلة</div>
                                <div class="text-body-sm text-white/50">شعارك وألوانك وتصميمك الخاص</div>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="check-icon mt-1" style="background: rgba(25,181,139,0.15);"><svg width="12"
                                    height="12" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            <div>
                                <div class="text-body font-bold mb-0.5">نطاق خاص</div>
                                <div class="text-body-sm text-white/50">grants.yourorg.sa</div>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="check-icon mt-1" style="background: rgba(25,181,139,0.15);"><svg width="12"
                                    height="12" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            <div>
                                <div class="text-body font-bold mb-0.5">تحكم كامل</div>
                                <div class="text-body-sm text-white/50">إعلان وإدارة مستقلة بالكامل</div>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="check-icon mt-1" style="background: rgba(25,181,139,0.15);"><svg width="12"
                                    height="12" viewBox="0 0 24 24" fill="none" stroke="#19B58B" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg></span>
                            <div>
                                <div class="text-body font-bold mb-0.5">مرونة عالية</div>
                                <div class="text-body-sm text-white/50">تخصيص النماذج والعمليات</div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-3">
                        <a href="#" class="btn-primary">تحدث مع فريقنا</a>
                    </div>
                </div>

                <!-- Visual: Custom System Mockup -->
                <div class="reveal reveal-d2">
                    <div
                        class="bg-white/[0.04] backdrop-blur-md border border-white/[0.08] rounded-sys-xl p-6 shadow-sys-lg">
                        <!-- Header mockup -->
                        <div class="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-10 h-10 rounded-sys bg-gradient-to-br from-indigo/30 to-indigo-accent/20 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9574F7"
                                        stroke-width="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-caption text-white/80 font-bold">مؤسسة التنمية المستدامة</div>
                                    <div class="text-micro text-white/40">grants.tanmia.sa</div>
                                </div>
                            </div>
                            <div class="badge-sys"
                                style="background:rgba(125,83,243,0.12); color:#9574F7; font-size:0.6875rem;">نظام مخصص
                            </div>
                        </div>

                        <!-- Stats -->
                        <div class="grid grid-cols-3 gap-3 mb-5">
                            <div class="bg-white/[0.04] rounded-sys p-3 text-center">
                                <div class="text-heading-sm text-white font-bold">18</div>
                                <div class="text-micro text-white/40">مبادرة</div>
                            </div>
                            <div class="bg-white/[0.04] rounded-sys p-3 text-center">
                                <div class="text-heading-sm text-white font-bold">342</div>
                                <div class="text-micro text-white/40">طلب</div>
                            </div>
                            <div class="bg-white/[0.04] rounded-sys p-3 text-center">
                                <div class="text-heading-sm text-jgreen font-bold">94%</div>
                                <div class="text-micro text-white/40">رضا</div>
                            </div>
                        </div>

                        <!-- Items -->
                        <div class="space-y-2.5">
                            <div class="bg-white/[0.04] rounded-sys p-3.5 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-jgreen"></div>
                                    <span class="text-body-sm text-white/70">منحة الابتكار الاجتماعي 2026</span>
                                </div>
                                <span class="text-micro text-jgreen font-semibold">مفتوحة</span>
                            </div>
                            <div class="bg-white/[0.04] rounded-sys p-3.5 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-yellow-400"></div>
                                    <span class="text-body-sm text-white/70">برنامج بناء القدرات</span>
                                </div>
                                <span class="text-micro text-yellow-400 font-semibold">قيد التقييم</span>
                            </div>
                            <div class="bg-white/[0.04] rounded-sys p-3.5 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-white/30"></div>
                                    <span class="text-body-sm text-white/70">دعم المشاريع الصغيرة</span>
                                </div>
                                <span class="text-micro text-white/40 font-semibold">مكتملة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     6. COMPARISON SECTION: Traditional vs Jazeel
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-20 lg:py-28 bg-white">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="text-center mb-14 reveal">
                <div class="badge-sys mx-auto mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M16 3h5v5" />
                        <path d="M8 3H3v5" />
                        <path d="M21 3l-7 7" />
                        <path d="M3 3l7 7" />
                        <path d="M3 21l7-7" />
                        <path d="M21 21l-7-7" />
                    </svg>
                    لماذا جزيل؟
                </div>
                <h2 class="text-display-sm text-navy mb-4">من العمل المبعثر إلى منظومة متكاملة</h2>
                <p class="text-body-lg text-neutral-text max-w-2xl mx-auto">
                    قارن بين إدارة المنح بالطرق التقليدية وبين تجربة جزيل المتكاملة.
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="rounded-sys-xl border border-neutral-border overflow-hidden reveal">
                    <!-- Table Header -->
                    <div class="grid grid-cols-3 bg-neutral-bg">
                        <div class="p-5 text-body font-bold text-neutral-text">المعيار</div>
                        <div
                            class="p-5 text-body font-bold text-neutral-light text-center border-x border-neutral-border">
                            الطريقة التقليدية</div>
                        <div class="p-5 text-body font-bold text-indigo text-center">عبر جزيل</div>
                    </div>

                    <!-- Rows -->
                    <div class="comparison-row grid grid-cols-3 border-t border-neutral-border">
                        <div class="p-5 text-body text-navy font-semibold">الإعلان عن الفرص</div>
                        <div class="p-5 text-body-sm text-neutral-light text-center border-x border-neutral-border">عبر
                            البريد أو الموقع يدويًا</div>
                        <div class="p-5 text-body-sm text-indigo text-center font-semibold">منصة موحدة مع وصول مباشر
                        </div>
                    </div>
                    <div class="comparison-row grid grid-cols-3 border-t border-neutral-border">
                        <div class="p-5 text-body text-navy font-semibold">استقبال الطلبات</div>
                        <div class="p-5 text-body-sm text-neutral-light text-center border-x border-neutral-border">
                            ملفات متفرقة وبريد إلكتروني</div>
                        <div class="p-5 text-body-sm text-indigo text-center font-semibold">نظام مركزي ومنظم</div>
                    </div>
                    <div class="comparison-row grid grid-cols-3 border-t border-neutral-border">
                        <div class="p-5 text-body text-navy font-semibold">تقييم المقترحات</div>
                        <div class="p-5 text-body-sm text-neutral-light text-center border-x border-neutral-border">
                            جداول Excel ومراسلات</div>
                        <div class="p-5 text-body-sm text-indigo text-center font-semibold">نظام تقييم مدمج ومنهجي</div>
                    </div>
                    <div class="comparison-row grid grid-cols-3 border-t border-neutral-border">
                        <div class="p-5 text-body text-navy font-semibold">متابعة التنفيذ</div>
                        <div class="p-5 text-body-sm text-neutral-light text-center border-x border-neutral-border">
                            تقارير ورقية متأخرة</div>
                        <div class="p-5 text-body-sm text-indigo text-center font-semibold">متابعة حية بلوحات تفاعلية
                        </div>
                    </div>
                    <div class="comparison-row grid grid-cols-3 border-t border-neutral-border">
                        <div class="p-5 text-body text-navy font-semibold">قياس الأثر</div>
                        <div class="p-5 text-body-sm text-neutral-light text-center border-x border-neutral-border">
                            محدود وغير منهجي</div>
                        <div class="p-5 text-body-sm text-indigo text-center font-semibold">تقارير أثر شاملة ومرئية
                        </div>
                    </div>
                    <div class="comparison-row grid grid-cols-3 border-t border-neutral-border">
                        <div class="p-5 text-body text-navy font-semibold">التوسع والمرونة</div>
                        <div class="p-5 text-body-sm text-neutral-light text-center border-x border-neutral-border">صعب
                            ومكلف</div>
                        <div class="p-5 text-body-sm text-indigo text-center font-semibold">نمو سلس مع النظام</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     7. USE CASES SECTION
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-20 lg:py-28 bg-neutral-bg">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="text-center mb-14 reveal">
                <div class="badge-sys mx-auto mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    حالات استخدام
                </div>
                <h2 class="text-display-sm text-navy mb-4">كيف تستفيد الجهات المانحة من جزيل؟</h2>
                <p class="text-body-lg text-neutral-text max-w-2xl mx-auto">
                    سيناريوهات واقعية توضح كيف تحوّل جزيل إدارة المنح إلى تجربة أكثر تنظيمًا وأثرًا.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
                <!-- Use Case 1 -->
                <div class="card-sys p-7 reveal reveal-d1">
                    <div class="flex items-start gap-4 mb-4">
                        <div class="w-12 h-12 rounded-sys bg-jgreen-50 flex items-center justify-center flex-shrink-0">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19B58B"
                                stroke-width="2">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
                                <circle cx="9" cy="7" r="4" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-heading-sm text-navy mb-1">مؤسسة مانحة موسمية</h3>
                            <p class="text-body text-neutral-text">تريد نشر فرص منح موسمية بسرعة واستقبال طلبات الجمعيات
                                وتقييمها بشكل منظم وفعال خلال فترة زمنية محددة.</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-micro bg-jgreen-50 text-jgreen px-3 py-1 rounded-full">إعلان سريع</span>
                        <span class="text-micro bg-jgreen-50 text-jgreen px-3 py-1 rounded-full">استقبال طلبات</span>
                        <span class="text-micro bg-jgreen-50 text-jgreen px-3 py-1 rounded-full">تقييم منظم</span>
                    </div>
                </div>

                <!-- Use Case 2 -->
                <div class="card-sys p-7 reveal reveal-d2">
                    <div class="flex items-start gap-4 mb-4">
                        <div
                            class="w-12 h-12 rounded-sys bg-indigo-light flex items-center justify-center flex-shrink-0">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7D53F3"
                                stroke-width="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-heading-sm text-navy mb-1">مجلس يبحث عن بيئة احترافية</h3>
                            <p class="text-body text-neutral-text">مجلس أو جهة مانحة يريد بيئة مؤسسية أكثر نضجًا لإدارة
                                المنح مع تقارير ولوحات مؤشرات واضحة.</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-micro bg-indigo-light text-indigo px-3 py-1 rounded-full">لوحات مؤشرات</span>
                        <span class="text-micro bg-indigo-light text-indigo px-3 py-1 rounded-full">تقارير</span>
                        <span class="text-micro bg-indigo-light text-indigo px-3 py-1 rounded-full">إدارة مؤسسية</span>
                    </div>
                </div>

                <!-- Use Case 3 -->
                <div class="card-sys p-7 reveal reveal-d3">
                    <div class="flex items-start gap-4 mb-4">
                        <div
                            class="w-12 h-12 rounded-sys bg-indigo-light flex items-center justify-center flex-shrink-0">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7D53F3"
                                stroke-width="2">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-heading-sm text-navy mb-1">فريق متابعة التنفيذ</h3>
                            <p class="text-body text-neutral-text">فريق مانحين يحتاج متابعة مشاريع ممولة ومراقبة
                                المخرجات والتقدم بشكل مستمر مع تقارير دورية.</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-micro bg-indigo-light text-indigo px-3 py-1 rounded-full">متابعة حية</span>
                        <span class="text-micro bg-indigo-light text-indigo px-3 py-1 rounded-full">مخرجات</span>
                        <span class="text-micro bg-indigo-light text-indigo px-3 py-1 rounded-full">تقارير دورية</span>
                    </div>
                </div>

                <!-- Use Case 4 -->
                <div class="card-sys p-7 reveal reveal-d4">
                    <div class="flex items-start gap-4 mb-4">
                        <div
                            class="w-12 h-12 rounded-sys bg-indigo-light flex items-center justify-center flex-shrink-0">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7D53F3"
                                stroke-width="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M3 9h18" />
                                <path d="M9 21V9" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-heading-sm text-navy mb-1">جهة تريد نظامها المستقل</h3>
                            <p class="text-body text-neutral-text">مؤسسة مانحة كبرى تريد نسخة خاصة بهويتها ونطاقها
                                لإدارة فرص المنح باستقلالية تامة.</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-micro bg-indigo-light text-indigo px-3 py-1 rounded-full">نظام مخصص</span>
                        <span class="text-micro bg-indigo-light text-indigo px-3 py-1 rounded-full">هوية خاصة</span>
                        <span class="text-micro bg-indigo-light text-indigo px-3 py-1 rounded-full">استقلالية</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     8. TRUST & NUMBERS SECTION
     ═══════════════════════════════════════════════════════════════ -->
    <section class="py-20 lg:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
            <div class="text-center mb-12 reveal">
                <h2 class="text-heading text-navy mb-3">أرقام تعكس الثقة والنضج</h2>
                <p class="text-body text-neutral-text max-w-xl mx-auto">منصة تشغيلية متقدمة يعتمد عليها مئات الجهات في
                    إدارة المنح والمشاريع.</p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
                <div class="text-center p-6 rounded-sys-lg border border-neutral-border">
                    <div class="text-display-sm text-navy font-bold counter-value" data-target="850">0</div>
                    <div class="text-body text-neutral-text mt-1">جهة مستفيدة</div>
                </div>
                <div class="text-center p-6 rounded-sys-lg border border-neutral-border">
                    <div class="text-display-sm text-indigo font-bold counter-value" data-target="120">0</div>
                    <div class="text-body text-neutral-text mt-1">فرصة منح ناجحة</div>
                </div>
                <div class="text-center p-6 rounded-sys-lg border border-neutral-border">
                    <div class="text-display-sm text-navy font-bold counter-value" data-target="2400">0</div>
                    <div class="text-body text-neutral-text mt-1">طلب مُدار</div>
                </div>
                <div class="text-center p-6 rounded-sys-lg border border-neutral-border">
                    <div class="text-display-sm text-navy font-bold">+40%</div>
                    <div class="text-body text-neutral-text mt-1">تحسن في الكفاءة التشغيلية</div>
                </div>
            </div>
        </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════════
     9. FINAL CTA
     ═══════════════════════════════════════════════════════════════ -->
    <section class="cta-gradient py-20 lg:py-24 text-white relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-accent/[0.05] blur-[120px]">
            </div>
        </div>

        <div class="relative max-w-3xl mx-auto px-5 sm:px-8 text-center reveal">
            <div class="badge-sys mx-auto mb-6" style="background:rgba(125,83,243,0.15); color:#9574F7;">ابدأ رحلتك مع
                جزيل</div>
            <h2 class="text-display-sm mb-5">جاهز لبناء بيئة منح أكثر احترافية؟</h2>
            <p class="text-body-lg text-white/60 mb-8 max-w-xl mx-auto">
                سواء أردت حسابًا سريعًا داخل جزيل أو نظامًا مخصصًا بالكامل لجهتك، فريقنا جاهز لمساعدتك.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="#" class="btn-primary" style="padding: 0.875rem 2rem;">
                    اطلب نسخة تجريبية
                    <svg class="rotate-180" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2.5" stroke-linecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
                <a href="#" class="btn-secondary-dark" style="padding: 0.875rem 2rem;">
                    اطلب نظامًا مخصصًا
                </a>
            </div>
        </div>
    </section>

</template>

<style scoped>
/* ─── Header ─── */
.header-scrolled {
    background: rgba(255, 255, 255, 0.98) !important;
    box-shadow: 0 1px 8px rgba(7, 19, 63, 0.05);
    backdrop-filter: blur(12px);
}

/* ─── Gradients ─── */
.hero-gradient {
    background: linear-gradient(160deg, #ffffff 0%, #f8f5ff 30%, #f0eaff 55%, #ebe4fd 75%, #f5f2ff 100%);
}



.btn-secondary {
    background: transparent;
    color: #07133F;
    border: 1.5px solid #E5E8EB;
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

.btn-secondary-dark {
    color: #fff;
    background: transparent;
    border: 1.5px solid #E5E8EB;
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

.btn-secondary:hover,
.btn-secondary-dark:hover {
    background: #f8f5ff;
    border-color: rgba(125, 83, 243, 0.25);
    color: #5a34d4;
}

.badge-sys {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 0.8125rem;
    font-weight: 600;
    background: #f3f0ff !important;
    color: #7d53f3 !important;
}
</style>