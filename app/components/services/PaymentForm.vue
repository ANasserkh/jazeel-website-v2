<script setup>
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    service: { type: Object, required: true },
    serviceRequest: { type: Object, required: true },
});

const config = useRuntimeConfig();
const amount = computed(() => Math.round(Number(props.service.price) * 100));
const requestId = computed(() => props.serviceRequest?.id ?? props.serviceRequest?.serviceRequestId ?? '');

const metadata = computed(() => ({
    service_request_id: String(requestId.value),
    service_id: String(props.service.id ?? ''),
    service_title: String(props.service.title ?? ''),
    organization_name: String(props.serviceRequest?.organizationName ?? ''),
    requester_name: String(props.serviceRequest?.fullName ?? ''),
    requester_email: String(props.serviceRequest?.email ?? ''),
    requester_phone: String(props.serviceRequest?.phoneNumber ?? ''),
}));

function callbackUrl() {
    const url = new URL('/payment-result', window.location.origin);
    if (requestId.value) url.searchParams.set('service_request_id', requestId.value);
    return url.toString();
}

function initialiseForm() {
    Moyasar.init({
        element: '#mysr-form',
        fixWidth: false,
        amount: amount.value,
        currency: 'SAR',
        language: 'ar',
        description: `طلب خدمة: ${props.service.title}`,
        publishable_api_key: config.public.moyasarPublishableKey,
        callback_url: callbackUrl(),
        metadata: metadata.value,
        methods: ['creditcard'],
        supported_networks: ['visa', 'mastercard', 'mada'],
    });
}

onMounted(() => {
    initialiseForm()
});
</script>

<template>
    <div class="rounded-xl border border-neutral-border bg-neutral-bg p-4 text-center">
        <p class="text-sm font-bold text-navy">{{ service.title }}</p>
        <p class="mt-1 text-sm text-neutral-text">{{ service.price }} ريال سعودي</p>
    </div>

    <div id="mysr-form"></div>
</template>

<style>
div#mysr-form {
    margin-top: 1rem;
    margin-inline: auto;
}

div#mysr-form .text-xs {
    font-size: 12px !important;
}

div#mysr-form .bg-primary {
    background-color: #00cc99 !important;
}
</style>
