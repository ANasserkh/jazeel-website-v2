<script setup>
import { ref } from 'vue';



const { serviceType } = defineProps({
    serviceType: Number
});

const services = {
    ProposalReview: 1,
    StrategyBuilding: 2,
    ProjectManagement: 3
}

const subtitle = computed(() => {
    switch (serviceType) {
        case services.ProposalReview: return "تدقيق المقترحات"
        case services.StrategyBuilding: return "بناء الاستراتيجية"
        case services.ProjectManagement: return "إدارة المشاريع"
    }
})

const dialog = defineModel({ default: false });

const formData = ref({
    organizationName: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    hasAccount: false,
    notes: '',
    serviceType: ''
});

const config = useRuntimeConfig();
const url = `${config.public.apiMaster}/service-requests`;
const loading = ref(false);
const done = ref(false)
async function save() {
    if (loading.value) return;

    loading.value = true;
    try {

        formData.value.serviceType = serviceType;
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData.value),
        });

        done.value = true;
    } finally {
        loading.value = false;
    }
}

function reset() {
    formData.value = {
        organizationName: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        hasAccount: false,
        notes: '',
        serviceType: 1
    }

    done.value = false;
}

watch(dialog, (val) => {
    if (val) return;
    reset();
})
</script>
<template>
    <dialog-form title="طلب خدمة" :subtitle v-model="dialog">
        <form v-if="!done" @submit.prevent="save">
            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">اسم المنظمة</label>
                <input type="text" required
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors"
                    placeholder="اسم منظمتك" v-model="formData.organizationName" />
            </div>

            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">الاسم الكامل</label>
                <input type="text" required
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors"
                    placeholder="اسمك الكامل" v-model="formData.fullName" />
            </div>

            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">البريد الإلكتروني</label>
                <input type="email" required
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors"
                    placeholder="email@example.com" dir="ltr" v-model="formData.email" />
            </div>

            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">رقم الجوال</label>
                <input type="tel" required
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors"
                    placeholder="05xxxxxxxx" dir="ltr" v-model="formData.phoneNumber" />
            </div>

            <div class="mb-5">
                <label class="block text-sm font-bold text-navy mb-2">هل لديك حساب في جزيل؟</label>
                <div class="flex items-center gap-4">
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="hasAccount" :value="true" class="accent-[#19B58B] w-4 h-4"
                            v-model="formData.hasAccount" />
                        <span class="text-[0.9375rem] text-neutral-text">نعم، لدي حساب</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="hasAccount" :value="false" class="accent-[#19B58B] w-4 h-4"
                            v-model="formData.hasAccount" />
                        <span class="text-[0.9375rem] text-neutral-text">لا، ليس لدي حساب</span>
                    </label>
                </div>
            </div>

            <div class="mb-5">
                <label class="block text-sm font-bold text-navy mb-1.5">ملاحظات إضافية <span
                        class="font-normal text-neutral-light">(اختياري)</span></label>
                <textarea rows="3"
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors resize-none"
                    placeholder="أي تفاصيل إضافية عن احتياجك..." v-model="formData.notes"></textarea>
            </div>
            <button type="submit" :disabled="loading" class="btn-primary w-full justify-center text-[0.9375rem] py-3.5">
                <span v-if="!loading">إرسال الطلب</span>
                <span v-else class="flex items-center gap-2">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                    جاري الإرسال...
                </span>
            </button>
        </form>

        <!-- Success state -->
        <div v-if="done" class=" text-center py-6">
            <div class="w-14 h-14 rounded-full bg-jgreen-50 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" fill="none" stroke="#19B58B" stroke-width="2">
                    <path d="M7 14.5l5 5 9-9" />
                </svg>
            </div>
            <h4 class="text-lg font-bold text-navy mb-2">تم إرسال طلبك بنجاح!</h4>
            <p class="text-[0.9375rem] text-neutral-text mb-5">سيتواصل معك فريقنا خلال 24 ساعة عمل</p>
            <button @click="dialog = false" class="btn-secondary justify-center text-[0.9375rem]">إغلاق</button>
        </div>

    </dialog-form>
</template>
<style scoped>
select {
    /* Example: custom arrow styling if the default one is not desired */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M10 13l-4-4m0 0 4-4m-4 4h9'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1em;
}
</style>
