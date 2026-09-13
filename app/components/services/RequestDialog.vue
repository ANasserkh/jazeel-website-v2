<script setup>
import { computed, ref, watch } from 'vue';

const { service } = defineProps({ service: { type: Object, required: true } });
const dialog = defineModel({ default: false });
const hasPayment = computed(() => Boolean(service?.payment));
const step = ref('request');
const loading = ref(false);
const done = ref(false);
const error = ref('');
const requestSubmitted = ref(false);
const serviceRequest = ref(null);

const emptyForm = () => ({ organizationName: '', fullName: '', email: '', phoneNumber: '', hasAccount: false, notes: '', serviceType: '' });
const formData = ref(emptyForm());
const config = useRuntimeConfig();
const url = `${config.public.apiMaster}/service-requests`;

async function save() {
    if (loading.value) return;
    if (requestSubmitted.value) {
        step.value = 'payment';
        return;
    }

    loading.value = true;
    error.value = '';
    try {
        formData.value.serviceType = service.id;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData.value),
        });
        if (!response.ok) throw new Error('Could not save service request');

        const responseBody = await response.json().catch(() => ({}));
        const savedRequest = responseBody?.data ?? responseBody;
        requestSubmitted.value = true;
        serviceRequest.value = { ...formData.value, ...savedRequest };
        if (hasPayment.value) step.value = 'payment';
        else done.value = true;
    } catch(err) {
        error.value = 'تعذر إرسال الطلب حالياً. يرجى المحاولة مرة أخرى.';
    } finally {
        loading.value = false;
    }
}

function reset() {
    formData.value = emptyForm();
    step.value = 'request';
    loading.value = false;
    done.value = false;
    error.value = '';
    requestSubmitted.value = false;
    serviceRequest.value = null;
}

watch(dialog, (isOpen) => {
    if (!isOpen) reset();
});
</script>

<template>
    <dialog-form :title="step === 'payment' ? 'إتمام الدفع' : 'طلب خدمة'" :subtitle="service.title" v-model="dialog">
        <div v-if="hasPayment && !done" class="mb-7" dir="rtl">
            <div class="flex items-center" aria-label="خطوات الطلب">
                <div class="flex shrink-0 items-center gap-2"
                    :class="step === 'request' ? 'text-jgreen' : 'text-neutral-light'">
                    <span class="flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold"
                        :class="step === 'request' ? 'bg-jgreen text-white' : 'bg-neutral-bg text-neutral-light'">1</span>
                    <span class="text-sm font-bold">بيانات الطلب</span>
                </div>
                <span class="mx-3 h-0.5 flex-1 rounded-full"
                    :class="step === 'payment' ? 'bg-jgreen' : 'bg-neutral-border'"></span>
                <div class="flex shrink-0 items-center gap-2 text-neutral-light"
                    :class="{ 'text-jgreen': step === 'payment' }">
                    <span
                        class="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-bg text-xs font-extrabold"
                        :class="step === 'payment' ? 'bg-jgreen text-white' : 'text-neutral-light'">2</span>
                    <span class="text-sm font-bold">الدفع</span>
                </div>
            </div>
        </div>

        <form v-if="!done && step === 'request'" @submit.prevent="save">
            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">اسم الجمعية</label>
                <input v-model="formData.organizationName" type="text" required placeholder="اسم الجمعية"
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors" />
            </div>
            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">اسم المسؤول</label>
                <input v-model="formData.fullName" type="text" required placeholder="اسم المسؤول"
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors" />
            </div>
            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">البريد الإلكتروني</label>
                <input v-model="formData.email" type="email" required placeholder="email@example.com" dir="ltr"
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors" />
            </div>
            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">رقم الجوال</label>
                <input v-model="formData.phoneNumber" type="tel" required inputmode="numeric" pattern="[0-9]*"
                    placeholder="05xxxxxxxx" dir="ltr"
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors" />
            </div>
            <div class="mb-5">
                <label class="block text-sm font-bold text-navy mb-2">هل لديك حساب في جزيل؟</label>
                <div class="flex items-center gap-4">
                    <label class="flex items-center gap-2 cursor-pointer"><input v-model="formData.hasAccount"
                            type="radio" :value="true" class="accent-[#19B58B] w-4 h-4" /><span
                            class="text-[0.9375rem] text-neutral-text">نعم، لدي حساب</span></label>
                    <label class="flex items-center gap-2 cursor-pointer"><input v-model="formData.hasAccount"
                            type="radio" :value="false" class="accent-[#19B58B] w-4 h-4" /><span
                            class="text-[0.9375rem] text-neutral-text">لا، ليس لدي حساب</span></label>
                </div>
            </div>
            <div class="mb-5">
                <label class="block text-sm font-bold text-navy mb-1.5">ملاحظات إضافية <span
                        class="font-normal text-neutral-light">(اختياري)</span></label>
                <textarea v-model="formData.notes" rows="3" placeholder="أي تفاصيل إضافية عن احتياجك..."
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors resize-none"></textarea>
            </div>
            <p v-if="error" role="alert" class="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{{ error }}
            </p>
            <button type="submit" :disabled="loading"
                class="btn-primary w-full justify-center text-[0.9375rem] py-3.5">{{ loading ? 'جاري الإرسال...' :
                    hasPayment ? 'المتابعة إلى الدفع' : 'إرسال الطلب' }}</button>
        </form>

        <section v-else-if="!done && step === 'payment'" class="py-1">
            <div class="mb-5 rounded-xl bg-jgreen-50 px-4 py-3 text-sm text-navy"><span class="font-bold">تم تسجيل
                    طلبك.</span> أكمل الدفع لتأكيد الخدمة.</div>
            <ServicesPaymentForm :service :service-request="serviceRequest" />
            <button type="button" class="mt-5 w-full text-sm font-bold text-neutral-text hover:text-navy"
                @click="step = 'request'">العودة إلى بيانات الطلب</button>
        </section>

        <div v-else class="text-center py-6">
            <div class="w-14 h-14 rounded-full bg-jgreen-50 flex items-center justify-center mx-auto mb-4"><svg
                    width="28" height="28" fill="none" stroke="#19B58B" stroke-width="2">
                    <path d="M7 14.5l5 5 9-9" />
                </svg></div>
            <h4 class="text-lg font-bold text-navy mb-2">تم إرسال طلبك بنجاح!</h4>
            <p class="text-[0.9375rem] text-neutral-text mb-5">سيتواصل معك فريقنا خلال يومين عمل</p>
            <button @click="dialog = false" class="btn btn-navy justify-center text-[0.9375rem]">إغلاق</button>
        </div>
    </dialog-form>
</template>
