<script setup>
useSeoMeta({
    title: 'تواصل معنا — جزيل',
    description: 'نحن هنا لمساعدتك. تواصل مع فريق جزيل للاستفسار عن المنصة أو طلب عرض سعر أو الحصول على الدعم الفني.',
})

const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false);
const submitted = ref(false);

const config = useRuntimeConfig();
const url = `${config.public.apiBase}/contact-us`;

async function handleSubmit() {
    isSubmitting.value = true

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.value),
    });


    isSubmitting.value = false
    submitted.value = true
}

function reset() {
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
}
</script>

<template>
    <main>
        <!-- ═══════════════════════════════════════════════════════════════
         HERO
         ═══════════════════════════════════════════════════════════════ -->
        <section class="hero-gradient relative overflow-hidden pt-[120px] pb-20 sm:pt-[160px] sm:pb-32">
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="absolute top-24 left-16 w-80 h-80 rounded-full bg-jgreen/[0.04] blur-[100px]"></div>
                <div class="absolute bottom-16 right-20 w-96 h-96 rounded-full bg-jgreen/[0.03] blur-[120px]"></div>
            </div>

            <div class="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6 reveal visible"
                    style="animation: fadeUp 0.6s ease both;">
                    <span class="w-1.5 h-1.5 rounded-full bg-jgreen"></span>
                    <span class="text-white/60 text-micro">مركز المساعدة والتواصل</span>
                </div>
                <h1 class="text-display-sm sm:text-display text-white mb-6 reveal visible"
                    style="animation: fadeUp 0.6s 0.1s ease both;">
                    نحن هنا <span class="text-jgreen">لمساعدتك</span>
                </h1>
                <p class="text-body-lg text-white/50 max-w-2xl mx-auto reveal visible"
                    style="animation: fadeUp 0.6s 0.15s ease both;">
                    سواء كان لديك استفسار عن المنصة، أو ترغب في طلب عرض سعر مخصص لمنظمتك، فريقنا جاهز للإجابة على جميع
                    تساؤلاتك.
                </p>
            </div>
        </section>
        <!-- ═══════════════════════════════════════════════════════════════
         CONTACT CONTENT
         ═══════════════════════════════════════════════════════════════ -->
        <section class="py-20 bg-white relative z-10 -mt-10 sm:-mt-16">
            <div class="max-w-7xl mx-auto px-5 sm:px-8">
                <div class="grid lg:grid-cols-12 gap-12 lg:gap-16">

                    <!-- Contact Info -->
                    <div class="lg:col-span-5 space-y-10 reveal">
                        <div>
                            <h2 class="text-heading-sm text-navy mb-6">معلومات التواصل</h2>
                            <p class="text-body text-neutral-text mb-8">
                                يمكنك الوصول إلينا عبر القنوات التالية، أو بزيارة مكتبنا خلال ساعات العمل الرسمية.
                            </p>
                        </div>

                        <div class="space-y-6">
                            <!-- Phone -->
                            <div class="flex gap-5">
                                <div
                                    class="w-12 h-12 rounded-xl bg-jgreen/10 flex items-center justify-center shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19B58B"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-body font-bold text-navy mb-1">واتساب</h4>
                                    <p class="text-body-sm text-neutral-text" dir="ltr">
                                        <a href="https://wa.me/966502574766">
                                            +966 502574766
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="flex gap-5">
                                <div
                                    class="w-12 h-12 rounded-xl bg-jgreen/10 flex items-center justify-center shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19B58B"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-body font-bold text-navy mb-1">البريد الإلكتروني</h4>
                                    <p class="text-body-sm text-neutral-text">hi@jazeel.net.sa</p>
                                </div>
                            </div>
                        </div>

                        <div class="pt-8 border-t border-neutral-border/50">
                            <h4 class="text-body font-bold text-navy mb-4">تابعنا على منصات التواصل</h4>
                            <div class="flex gap-3">
                                <a href="https://x.com/jazeelnet" target="_blank"
                                    class="w-10 h-10 rounded-lg bg-neutral-bg flex items-center justify-center text-navy hover:bg-jgreen hover:text-white transition-all">
                                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/jazeelnet" target="_blank"
                                    class="w-10 h-10 rounded-lg bg-neutral-bg flex items-center justify-center text-navy hover:bg-jgreen hover:text-white transition-all">
                                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Form -->
                    <div class="lg:col-span-7 reveal reveal-d1">
                        <div class="card-sys p-8 sm:p-10 shadow-sys-lg border-neutral-border/60">
                            <div v-if="!submitted">
                                <h3 class="text-heading-sm text-navy mb-2">أرسل لنا رسالة</h3>
                                <p class="text-body-sm text-neutral-text mb-8">املأ النموذج أدناه وسيقوم أحد مستشارينا
                                    بالتواصل معك في أقرب وقت.</p>

                                <form @submit.prevent="handleSubmit" class="space-y-5">
                                    <div class="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label class="block text-micro font-bold text-navy mb-2">الاسم
                                                الكامل</label>
                                            <input v-model="formData.name" type="text" required
                                                class="w-full border border-neutral-border rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:border-jgreen transition-colors"
                                                placeholder="أدخل اسمك الكامل" />
                                        </div>
                                        <div>
                                            <label class="block text-micro font-bold text-navy mb-2">البريد
                                                الإلكتروني</label>
                                            <input v-model="formData.email" type="email" required
                                                class="w-full border border-neutral-border rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:border-jgreen transition-colors"
                                                placeholder="example@mail.com" dir="ltr" />
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-micro font-bold text-navy mb-2">الموضوع</label>
                                        <input v-model="formData.subject" type="text" required
                                            class="w-full border border-neutral-border rounded-xl px-4 py-3 text-body-sm focus:outline-none focus:border-jgreen transition-colors"
                                            placeholder="كيف يمكننا مساعدتك؟" />
                                    </div>

                                    <div>
                                        <label class="block text-micro font-bold text-navy mb-2">الرسالة</label>
                                        <textarea v-model="formData.message" rows="5" required
                                            class="w-full border border-neutral-border rounded-xl px-4 py-4 text-body-sm focus:outline-none focus:border-jgreen transition-colors resize-none"
                                            placeholder="اكتب رسالتك هنا بالتفصيل..."></textarea>
                                    </div>

                                    <button type="submit" :disabled="isSubmitting"
                                        class="btn-primary w-full justify-center py-4 text-body font-bold">
                                        <span v-if="!isSubmitting">إرسال الرسالة</span>
                                        <span v-else class="flex items-center gap-2">
                                            <svg class="animate-spin h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                                </path>
                                            </svg>
                                            جاري الإرسال...
                                        </span>
                                    </button>
                                </form>
                            </div>

                            <!-- Success Message -->
                            <div v-else class="text-center py-10" style="animation: fadeUp 0.5s ease both;">
                                <div
                                    class="w-20 h-20 rounded-full bg-jgreen/10 flex items-center justify-center mx-auto mb-6">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#19B58B"
                                        stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m9 12 2 2 4-4" />
                                        <circle cx="12" cy="12" r="10" />
                                    </svg>
                                </div>
                                <h3 class="text-heading-sm text-navy mb-3">تم إرسال رسالتك بنجاح!</h3>
                                <p class="text-body text-neutral-text mb-8">شكراً لتواصلك معنا. سيقوم فريقنا بمراجعة
                                    طلبك والرد عليك في أقرب وقت ممكن.</p>
                                <button @click="submitted = false" class="btn-outline-dark">إرسال رسالة أخرى</button>
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
                    انطلق مع جزيل اليوم
                </h2>
                <p class="text-body-lg text-white/45 max-w-xl mx-auto mb-10">
                    ابدأ تجربتك المجانية لمدة 14 يوماً واكتشف كيف يمكن لجزيل تحويل منظمتك إلى الكفاءة التامة.
                </p>
                <div class="flex flex-wrap justify-center gap-3">
                    <a href="https://ngo.jazeel.net.sa/#/register" class="btn-primary"
                        style="padding:0.875rem 2.25rem;">
                        ابدأ التجربة المجانية
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2.5" stroke-linecap="round">
                            <path d="m12 19-7-7 7-7" />
                            <path d="M19 12H5" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
/* Any page-specific styles if needed */
</style>
