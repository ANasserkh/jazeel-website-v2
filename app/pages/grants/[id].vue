<script setup>
import { format } from "date-fns";
useSeoMeta({
    title: 'فرص المنح — جزيل',
    description: 'استكشف فرص المنح المتاحة للجمعيات والمنظمات غير الربحية عبر منصة جزيل',
})

const route = useRoute();

const fromJazeel = route.query.internal;
const config = useRuntimeConfig();
const { data, execute, status } = await useFetch(`${config.public.apiBase}/grants/${route.params.id}?is_from_portal=${fromJazeel}`);
execute();
</script>
<template>

    <div v-if="status === 'pending'" class="fix w-screen h-screen hero-gradient z-10">
        <!-- loading state -->
        <div class="flex items-center justify-center h-screen">
            <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-400"></div>
            <div class="text-center mt-4"></div>
        </div>
    </div>
    <div v-else>
        <section class="gd-hero pt-32">
            <div class="jz-container pt-32">
                <div class="gd-hero-inner">

                    <!-- Breadcrumb -->
                    <div class="gd-breadcrumb">
                        <a href="/grants">فرص المنح</a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        <span>{{ data.title }}</span>
                    </div>

                    <!-- Donor Identity -->
                    <div class="gd-donor-panel">
                        <div class="gd-donor-logo">
                            <img :src="data?.donor?.path" :alt="data.don_name">
                        </div>
                        <div class="gd-donor-info">
                            <h2>{{ data.don_name }}</h2>
                            <div class="gd-donor-badges">
                                <GrantsStatusBadge :deadline="data.deadline" :remaining="data.remaining" />
                                <span class="gd-badge-jazeel">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2">
                                        <path d="m22 2-7 20-4-9-9-4Z" />
                                        <path d="M22 2 11 13" />
                                    </svg>
                                    تقدم عبر {{ fromJazeel ? 'جزيل' : "موقع المنحة" }}
                                </span>

                            </div>
                        </div>
                    </div>

                    <!-- Title -->
                    <h1 class="gd-hero-title">{{ data.title }}</h1>
                    <!-- <div class="gd-hero-desc" v-html="data.content">
                </div> -->

                    <!-- Meta chips -->
                    <div class="gd-meta-strip">
                        <span v-if="data.deadline" class="gd-meta-chip">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <rect width="18" height="18" x="3" y="4" rx="2" />
                                <line x1="16" x2="16" y1="2" y2="6" />
                                <line x1="8" x2="8" y1="2" y2="6" />
                                <line x1="3" x2="21" y1="10" y2="10" />
                            </svg>
                            آخر موعد: <strong>{{ format(data.deadline, 'dd/MM/yyyy') }}</strong>
                        </span>
                        <span v-if="data.remaining" class="gd-meta-chip">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            المتبقي: <strong>{{ data.remaining }} يوم</strong>
                        </span>
                        <span v-if="data.size" class="gd-meta-chip">
                            <svg class="h-2 fill-current" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1124.14 1256.39">
                                <path class="cls-1"
                                    d="M699.62,1113.02h0c-20.06,44.48-33.32,92.75-38.4,143.37l424.51-90.24c20.06-44.47,33.31-92.75,38.4-143.37l-424.51,90.24Z" />
                                <path class="cls-1"
                                    d="M1085.73,895.8c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.33v-135.2l292.27-62.11c20.06-44.47,33.32-92.75,38.4-143.37l-330.68,70.27V66.13c-50.67,28.45-95.67,66.32-132.25,110.99v403.35l-132.25,28.11V0c-50.67,28.44-95.67,66.32-132.25,110.99v525.69l-295.91,62.88c-20.06,44.47-33.33,92.75-38.42,143.37l334.33-71.05v170.26l-358.3,76.14c-20.06,44.47-33.32,92.75-38.4,143.37l375.04-79.7c30.53-6.35,56.77-24.4,73.83-49.24l68.78-101.97v-.02c7.14-10.55,11.3-23.27,11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28Z" />
                            </svg>

                            <template v-if="fromJazeel">
                                حجم المنحة : <strong>{{ data.size }} </strong>
                            </template>
                            <template v-else="fromJazeel">
                                حجم المنحة : <strong>{{ data.size }} </strong>
                            </template>
                        </span>
                        <span class="gd-meta-chip">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <template v-if="data.locations.length > 1">
                                {{ data.locations.length }} منطقة
                            </template>
                            <template v-if="data.locations.length == 1">
                                {{ data.locations[0].title }}
                            </template>
                        </span>
                    </div>

                    <!-- Actions -->
                    <div class="gd-hero-actions">
                        <a :href="fromJazeel ? `https://ngo.jazeel.net.sa/#/FundingOpportunities/${data.id}?isFromPortal=true` : data.application"
                            class="gd-btn-apply gd-btn-apply-jazeel">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <path d="m22 2-7 20-4-9-9-4Z" />
                                <path d="M22 2 11 13" />
                            </svg>
                            تقدم عبر {{ fromJazeel ? 'جزيل' : "موقع المنحة" }}
                        </a>

                        <a href="https://ngo.jazeel.net.sa/#/proposals" class="gd-btn-secondary"
                            style="text-decoration:none;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2">
                                <path
                                    d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                <path d="M20 3v4" />
                                <path d="M22 5h-4" />
                            </svg>
                            إعداد مقترح المشروع
                        </a>


                    </div>
                </div>
            </div>
        </section>

        <!-- ============================================
       Main Content
       ============================================ -->
        <div class="jz-container">
            <div class="gd-layout">

                <!-- ---- Main Column ---- -->
                <div class="gd-main">

                    <!-- About -->
                    <div class="gd-section">
                        <div class="gd-section-header">
                            <div class="gd-section-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                            </div>
                            <h2>نبذة عن الفرصة</h2>
                        </div>
                        <div class="gd-about-text whitespace-pre-line" v-html="data.content">
                        </div>
                    </div>
                    <!-- Fields -->
                    <div class="gd-section">
                        <div class="gd-section-header">
                            <div class="gd-section-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>
                            <h2>المجالات المستهدفة</h2>
                        </div>
                        <div class="gd-pills-wrap">
                            <span class="gd-field-pill" v-for="program in data.programs">{{ program.title }}</span>
                        </div>
                    </div>

                    <!-- Application Steps -->
                    <div class="gd-section">
                        <div class="gd-section-header">
                            <div class="gd-section-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <path d="m12 19-7-7 7-7" />
                                    <path d="M19 12H5" />
                                </svg>
                            </div>
                            <h2>آلية التقديم</h2>
                        </div>
                        <div class="gd-timeline">
                            <div class="gd-timeline-step">
                                <span class="gd-timeline-dot">1</span>
                                <div class="gd-timeline-content">
                                    <h4>إنشاء حساب على منصة جزيل</h4>
                                    <p>سجّل حساب جديد أو سجّل الدخول إلى حسابك الحالي</p>
                                </div>
                            </div>
                            <div class="gd-timeline-step">
                                <span class="gd-timeline-dot">2</span>
                                <div class="gd-timeline-content">
                                    <h4>استكمال ملف المنظمة</h4>
                                    <p>أكمل بيانات منظمتك الأساسية والمعلومات المطلوبة</p>
                                </div>
                            </div>
                            <div class="gd-timeline-step">
                                <span class="gd-timeline-dot">3</span>
                                <div class="gd-timeline-content">
                                    <h4>تعبئة نموذج التقديم</h4>
                                    <p>أجب على أسئلة النموذج المخصصة لهذه الفرصة</p>
                                </div>
                            </div>
                            <div class="gd-timeline-step">
                                <span class="gd-timeline-dot">4</span>
                                <div class="gd-timeline-content">
                                    <h4>إرفاق المستندات المطلوبة</h4>
                                    <p>ارفع جميع المستندات والوثائق المطلوبة</p>
                                </div>
                            </div>
                            <div class="gd-timeline-step">
                                <span class="gd-timeline-dot">5</span>
                                <div class="gd-timeline-content">
                                    <h4>مراجعة وتقديم الطلب</h4>
                                    <p>راجع طلبك بالكامل ثم اضغط على تقديم</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- ---- Sidebar ---- -->
                <aside class="gd-sidebar">

                    <!-- Quick Info Card -->
                    <div class="gd-sidebar-card">
                        <div class="gd-sidebar-card-header">
                            <h3>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4" />
                                    <path d="M12 8h.01" />
                                </svg>
                                معلومات الفرصة
                            </h3>
                        </div>
                        <div class="gd-sidebar-card-body">
                            <dl>
                                <div class="gd-sidebar-row">
                                    <dt>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2">
                                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                                        </svg>
                                        الجهة المانحة
                                    </dt>
                                    <dd>{{ data.don_name }}</dd>
                                </div>
                                <div v-if="data.deadline" class="gd-sidebar-row">
                                    <dt>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2">
                                            <rect width="18" height="18" x="3" y="4" rx="2" />
                                            <line x1="16" x2="16" y1="2" y2="6" />
                                            <line x1="8" x2="8" y1="2" y2="6" />
                                            <line x1="3" x2="21" y1="10" y2="10" />
                                        </svg>
                                        آخر موعد
                                    </dt>
                                    <dd>{{ format(data.deadline, 'dd/MM/yyyy') }}</dd>
                                </div>
                                <div v-if="data.remaining" class="gd-sidebar-row">
                                    <dt>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        المدة المتبقية
                                    </dt>
                                    <dd style="color:var(--jz-green);font-weight:800;">{{ data.remaining }} يوم</dd>
                                </div>
                                <div class="gd-sidebar-row">
                                    <dt>الحالة</dt>
                                    <dd>
                                        <GrantsStatusBadge status :deadline="data.deadline"
                                            :remaining="data.remaining" />
                                    </dd>
                                </div>
                                <div class="gd-sidebar-row">
                                    <dt>النطاق الجغرافي</dt>
                                    <dd>
                                        <template v-if="data.locations.length > 1">
                                            {{ data.locations.length }} منطقة
                                        </template>
                                        <template v-if="data.locations.length == 1">
                                            {{ data.locations[0].title }}
                                        </template>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <!-- For external:
          <div class="gd-sidebar-method gd-sidebar-method-external">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            يتم التقديم عبر منصة الجهة
          </div>
          <div class="gd-sidebar-notice">يتم التقديم على هذه الفرصة عبر منصة الجهة المانحة مباشرة. سيتم تحويلك إلى موقعها لإكمال الطلب.</div>
          -->

                        <!-- CTA buttons -->
                        <div class="gd-sidebar-btns">

                            <a :href="fromJazeel ? `https://ngo.jazeel.net.sa/#/FundingOpportunities/${data.id}?isFromPortal=true` : data.application"
                                class="gd-sidebar-btn gd-sidebar-btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <path d="m22 2-7 20-4-9-9-4Z" />
                                    <path d="M22 2 11 13" />
                                </svg>
                                تقدم عبر {{ fromJazeel ? 'جزيل' : "موقع المنحة" }}
                            </a>

                            <a href="https://ngo.jazeel.net.sa/#/proposals"
                                class="gd-sidebar-btn gd-sidebar-btn-outline" style="text-decoration:none;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <path
                                        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                    <path d="M20 3v4" />
                                    <path d="M22 5h-4" />
                                </svg>
                                إعداد مقترح المشروع
                            </a>
                            <div class="sharethis-share-buttons" data-type="inline-share-buttons" data-labels="none"
                                data-show_total="false" data-size="small">
                                <span data-network="facebook"></span>
                                <span data-network="twitter"></span>
                                <span data-network="email"></span>
                            </div>
                        </div>
                    </div>

                </aside>

            </div>
        </div>

        <!-- ============================================
       Related Grants
       ============================================ -->
        <!-- <section class="gd-related">
        <div class="jz-container">
            <div class="gd-related-header">
                <h2>فرص مشابهة قد تهمك</h2>
                <a href="grants.html">
                    عرض جميع الفرص
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </a>
            </div>
            <div class="gd-related-grid">
                <a href="grant-details.html" class="gd-rcard">
                    <div class="gd-rcard-head">
                        <div class="gd-rcard-logo"><img src="../donors/ehsan.png" alt="إحسان"></div>
                        <div>
                            <div class="gd-rcard-donor">منصة إحسان</div>
                            <span class="gd-badge gd-sidebar-badge-open"
                                style="font-size:0.6875rem;padding:0.2rem 0.5rem;margin-top:0.25rem;">مفتوحة</span>
                        </div>
                    </div>
                    <div class="gd-rcard-body">
                        <h3>منحة التحول الرقمي للمنظمات غير الربحية</h3>
                        <div class="gd-rcard-meta">
                            <span>متبقي 49 يوم</span>
                            <span>جميع المناطق</span>
                        </div>
                    </div>
                    <div class="gd-rcard-footer">
                        <div class="gd-rcard-cta">عرض التفاصيل ←</div>
                    </div>
                </a>
                <a href="grant-details.html" class="gd-rcard">
                    <div class="gd-rcard-head">
                        <div class="gd-rcard-logo"><img src="../donors/sdb.png" alt="بنك التنمية"></div>
                        <div>
                            <div class="gd-rcard-donor">بنك التنمية الاجتماعية</div>
                            <span class="gd-badge gd-sidebar-badge-open"
                                style="font-size:0.6875rem;padding:0.2rem 0.5rem;margin-top:0.25rem;">مفتوحة</span>
                        </div>
                    </div>
                    <div class="gd-rcard-body">
                        <h3>برنامج تعزيز صحة المجتمع</h3>
                        <div class="gd-rcard-meta">
                            <span>متبقي 37 يوم</span>
                            <span>المنطقة الغربية</span>
                        </div>
                    </div>
                    <div class="gd-rcard-footer">
                        <div class="gd-rcard-cta">عرض التفاhref="https://ngo.jazeel.net.sa/#/proposals" صيل ←</div>
                    </div>
                </a>
                <a href="grant-details.html" class="gd-rcard">
                    <div class="gd-rcard-head">
                        <div class="gd-rcard-logo"><img src="../donors/alrajhi.png" alt="الراجحي"></div>
                        <div>
                            <div class="gd-rcard-donor">الراجحي الإنسانية</div>
                            <span class="gd-badge gd-sidebar-badge-open"
                                style="font-size:0.6875rem;padding:0.2rem 0.5rem;margin-top:0.25rem;">مفتوحة</span>
                        </div>
                    </div>
                    <div class="gd-rcard-body">
                        <h3>برنامج الابتكار الاجتماعي</h3>
                        <div class="gd-rcard-meta">
                            <span>متبقي 79 يوم</span>
                            <span>جميع المناطق</span>
                        </div>
                    </div>
                    <div class="gd-rcard-footer">
                        <div class="gd-rcard-cta">عرض التفاصيل ←</div>
                    </div>
                </a>
            </div>
        </div>
    </section> -->

        <!-- ============================================
       Bottom CTA
       ============================================ -->
        <section class="gd-bottom-cta">
            <div class="jz-container">
                <h2>هل تحتاج إلى تجهيز مشروعك قبل التقديم؟</h2>
                <p>ابدأ إعداد مشروعك عبر أدوات جزيل المتكاملة لزيادة فرص قبولك وتحقيق أعلى جودة ممكنة</p>
                <div class="gd-bottom-cta-btns">
                    <a href="https://ngo.jazeel.net.sa/#/proposals" class="gd-btn-apply gd-btn-apply-jazeel"
                        style="font-size:1rem;text-decoration:none;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path
                                d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                            <path d="M20 3v4" />
                            <path d="M22 5h-4" />
                        </svg>
                        ابدأ إعداد مقترح مشروعك
                    </a>
                    <button class="gd-btn-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        تواصل معنا
                    </button>
                </div>
            </div>
        </section>
    </div>

</template>

<style src="./grant.css"></style>