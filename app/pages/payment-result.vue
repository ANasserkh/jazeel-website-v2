<script setup>
import { computed, onMounted, ref } from 'vue';
import { servicesList } from '~/types/ServicesRequests';

useSeoMeta({ title: 'نتيجة الدفع — جزيل' });

const route = useRoute();
const config = useRuntimeConfig();
const paymentId = computed(() => typeof route.query.id === 'string' ? route.query.id : '');
const serviceRequestId = computed(() => typeof route.query.service_request_id === 'string' ? route.query.service_request_id : '');
const redirectMessage = computed(() => typeof route.query.message === 'string' ? route.query.message : '');
const result = ref('verifying');
const errorMessage = ref('');
const confirmation = ref(null);


const receipt = computed(() => {
    const request = confirmation.value;
    const amount = Number(confirmation.value?.paidAmount);
    return {
        reference: request.paymentId,
        requestId: request.id,
        service: servicesList.find(i => i.id == request.serviceType)?.title,
        organization: request.organizationName,
        amount: `${amount / 100}.00`,
        date: request.value?.paidAt
    };
});

function formatDate(value) {
    if (!value) return '';
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat({ dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

function printReceipt() {
    window.print();
}

function resolveStatus(response) {
    if (response?.confirmed === true) return 'paid';
    const status = String(response?.payment?.status ?? response?.paymentStatus ?? response?.status ?? '').toLowerCase();
    if (['paid', 'succeeded', 'success', 'verified'].includes(status)) return 'paid';
    if (['initiated', 'pending', 'authorized', 'processing'].includes(status)) return 'pending';
    if (['failed', 'canceled', 'cancelled', 'voided', 'refunded'].includes(status)) return 'failed';
    return 'unknown';
}

async function confirmPayment() {
    if (!paymentId.value) {
        result.value = 'invalid';
        errorMessage.value = 'لم يتم العثور على رقم عملية الدفع في رابط العودة.';
        return;
    }

    result.value = 'verifying';
    errorMessage.value = '';
    try {
        const confirmPaymentUrl = `${config.public.apiMaster}/service-requests/confirm-payment`;
        const response = await $fetch(confirmPaymentUrl, {
            method: 'POST',
            body: {
                paymentId: paymentId.value,
                serviceRequestId: serviceRequestId.value || undefined,
                reportedStatus: typeof route.query.status === 'string' ? route.query.status : undefined,
            },
        });
        confirmation.value = response;
        result.value = resolveStatus(response);
        if (result.value === 'unknown') {
            errorMessage.value = 'تعذر تأكيد حالة الدفع. يرجى التواصل مع الدعم مع رقم العملية.';
        }
    } catch (error) {
        result.value = 'error';
        errorMessage.value = error?.data?.message || 'تعذر التحقق من عملية الدفع حالياً. يمكنك إعادة المحاولة.';
    }
}

onMounted(confirmPayment);
</script>

<template>
    <main class="min-h-screen bg-neutral-bg px-5 py-16 sm:py-24" dir="rtl">
        <section class="mx-auto max-w-md rounded-2xl bg-white p-7 text-center shadow-sys-lg sm:p-9">
            <div v-if="result === 'verifying'" class="py-8">
                <div class="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-jgreen-50 border-t-jgreen">
                </div>
                <h1 class="text-xl font-extrabold text-navy">جارٍ التحقق من الدفع</h1>
                <p class="mt-2 text-sm text-neutral-text">يرجى عدم إغلاق الصفحة.</p>
            </div>

            <template v-else>
                <div class="print:hidden mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                    :class="result === 'paid' ? 'bg-jgreen-50' : result === 'pending' ? 'bg-amber-50' : 'bg-red-50'">
                    <svg v-if="result === 'paid'" width="28" height="28" fill="none" stroke="#19B58B" stroke-width="2">
                        <path d="M7 14.5l5 5 9-9" />
                    </svg>
                    <svg v-else-if="result === 'pending'" width="28" height="28" fill="none" stroke="#D97706"
                        stroke-width="2">
                        <path d="M14 7v7l4 2" />
                        <circle cx="14" cy="14" r="9" />
                    </svg>
                    <svg v-else width="28" height="28" fill="none" stroke="#DC2626" stroke-width="2">
                        <path d="M9 9l10 10M19 9L9 19" />
                    </svg>
                </div>

                <h1 class="print:hidden text-xl font-extrabold text-navy">
                    {{ result === 'paid' ? 'تم الدفع بنجاح' : result === 'pending' ? 'عملية الدفع قيد المعالجة' :
                        'لم يكتمل الدفع' }}
                </h1>
                <p class="print:hidden mt-3 text-sm leading-7 text-neutral-text">
                    <template v-if="result === 'paid'">تم تأكيد طلب الخدمة والدفع بنجاح.</template>
                    <template v-else-if="result === 'pending'">لم يتم تأكيد العملية بعد. سنحدّث حالة الطلب عند وصول
                        التأكيد.</template>
                    <template v-else>{{ errorMessage || redirectMessage
                        || 'يمكنك المحاولة مرة أخرى أو التواصل مع الدعم.' }}</template>
                </p>
                <article id="receipt" v-if="result === 'paid'"
                    class="receipt mt-7 overflow-hidden rounded-2xl border border-neutral-border text-right">
                    <header class="flex items-center justify-between bg-navy px-5 py-4 text-white">
                        <div class="flex items-center gap-3">
                            <img src="~/assets/images/jazeel-logo-v2.svg" alt="جزيل" class="h-8 w-auto" />
                            <div class="border-r border-white/20 pr-3">
                                <p class="text-xs opacity-70">جزيل</p>
                                <h2 class="mt-1 text-base font-extrabold">إيصال دفع</h2>
                            </div>
                        </div>
                        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 11.5l4 4 8-8" />
                            </svg>
                        </div>
                    </header>
                    <div class="p-5">
                        <div
                            class="mb-5 flex items-center justify-between border-b border-dashed border-neutral-border pb-5">
                            <span class="text-sm text-neutral-text">المبلغ المدفوع</span>
                            <strong class="text-xl font-extrabold text-jgreen">
                                <span class="icon-saudi_riyal_new"></span>
                                {{ receipt.amount }}
                            </strong>

                        </div>
                        <dl class="space-y-3 text-sm">
                            <div v-if="receipt.service" class="flex items-start justify-between gap-5">
                                <dt class="text-neutral-light">الخدمة</dt>
                                <dd class="font-bold text-navy">{{ receipt.service }}</dd>
                            </div>
                            <div v-if="receipt.organization" class="flex items-start justify-between gap-5">
                                <dt class="text-neutral-light">الجهة</dt>
                                <dd class="font-bold text-navy">{{ receipt.organization }}</dd>
                            </div>
                            <div v-if="receipt.date" class="flex items-start justify-between gap-5">
                                <dt class="text-neutral-light">تاريخ العملية</dt>
                                <dd class="font-bold text-navy">{{ formatDate(receipt.date) }}</dd>
                            </div>
                            <div v-if="receipt.method" class="flex items-start justify-between gap-5">
                                <dt class="text-neutral-light">طريقة الدفع</dt>
                                <dd class="font-bold text-navy">{{ receipt.method }}</dd>
                            </div>
                            <div v-if="receipt.requestId" class="flex items-start justify-between gap-5">
                                <dt class="text-neutral-light">رقم الطلب</dt>
                                <dd class="font-bold text-navy" dir="ltr">#{{ receipt.requestId }}</dd>
                            </div>
                            <div class="flex items-start justify-between gap-5">
                                <dt class="text-neutral-light">رقم العملية</dt>
                                <dd class="max-w-[12rem] break-all text-left font-bold text-navy text-sm" dir="ltr">{{
                                    receipt.reference }}</dd>
                            </div>
                        </dl>
                    </div>
                    <footer
                        class="border-t border-neutral-border bg-neutral-bg px-5 py-3 text-center text-xs text-neutral-light">
                        شكراً
                        لاختيارك جزيل</footer>
                </article>

                <div class="print:hidden mt-7 flex flex-wrap justify-center gap-3">
                    <button v-if="['failed', 'unknown', 'error'].includes(result)" class="btn-primary"
                        @click="confirmPayment">إعادة
                        التحقق</button>
                    <button v-if="result === 'paid'" type="button" class="btn-primary" @click="printReceipt">
                        <svg width="17" height="17" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 7V2h8v5M5 14H3V8h12v6h-2M5 11h8v5H5z" />
                        </svg>
                        طباعة الإيصال / حفظ PDF
                    </button>
                    <NuxtLink to="/"
                        class="  px-4 py-2 rounded-lg text-[0.9375rem] font-medium hover:bg-black/10 transition-all">
                        العودة للرئيسية</NuxtLink>
                </div>
            </template>
        </section>
    </main>
</template>

<style scoped>
@media print {
    :global(body) {
        background: #fff !important;
    }

    /* Layout navigation and footer live inside #__nuxt, so hide the entire app
       first, then explicitly reveal just the receipt and its descendants. */
    :global(body *) {
        visibility: hidden !important;
    }

    :global(.receipt),
    :global(.receipt *) {
        visibility: visible !important;
    }

    :global(.receipt) {
        position: absolute !important;
        inset: 0 auto auto 0 !important;
        width: 100% !important;
        margin: 0 !important;
        border-color: #e5e8eb !important;
        break-inside: avoid;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
}

@page {
    size: A4;
    margin: 18mm;
}
</style>
