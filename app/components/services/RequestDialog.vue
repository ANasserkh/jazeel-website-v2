<script setup>

defineProps({
     subtitle: String,
});

const dialog = defineModel({ default: false });
function submitServiceForm(e) {

    e.preventDefault();

}
</script>
<template>
    <dialog-form title="طلب خدمة" :subtitle v-model="dialog">
        <form id="serviceForm" onsubmit="submitServiceForm(event)">
            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">اسم المنظمة</label>
                <input type="text" required
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors"
                    placeholder="اسم منظمتك" />
            </div>
            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">الاسم الكامل</label>
                <input type="text" required
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors"
                    placeholder="اسمك الكامل" />
            </div>
            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">البريد الإلكتروني</label>
                <input type="email" required
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors"
                    placeholder="email@example.com" dir="ltr" />
            </div>
            <div class="mb-4">
                <label class="block text-sm font-bold text-navy mb-1.5">رقم الجوال</label>
                <input type="tel" required
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors"
                    placeholder="05xxxxxxxx" dir="ltr" />
            </div>
            <div class="mb-5">
                <label class="block text-sm font-bold text-navy mb-2">هل لديك حساب في جزيل؟</label>
                <div class="flex items-center gap-4">
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="hasAccount" value="yes" class="accent-[#19B58B] w-4 h-4" />
                        <span class="text-[0.9375rem] text-neutral-text">نعم، لدي حساب</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="hasAccount" value="no" checked class="accent-[#19B58B] w-4 h-4" />
                        <span class="text-[0.9375rem] text-neutral-text">لا، ليس لدي حساب</span>
                    </label>
                </div>
            </div>
            <div class="mb-5">
                <label class="block text-sm font-bold text-navy mb-1.5">ملاحظات إضافية <span
                        class="font-normal text-neutral-light">(اختياري)</span></label>
                <textarea rows="3"
                    class="w-full border border-neutral-border rounded-xl px-4 py-3 text-[0.9375rem] focus:outline-none focus:border-jgreen transition-colors resize-none"
                    placeholder="أي تفاصيل إضافية عن احتياجك..."></textarea>
            </div>
            <button type="submit" class="btn-primary w-full justify-center text-[0.9375rem] py-3.5">إرسال
                الطلب</button>
        </form>
    </dialog-form>
</template>