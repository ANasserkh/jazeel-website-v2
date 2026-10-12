<script setup>

const { status, data } = await useFetch(`${useRuntimeConfig().public.apiBase}/donors/filters`);
const selectedProgram = ref(-1);
const selectedLocation = ref(-1);

const emit = defineEmits(["filter"]);
watch([selectedLocation, selectedProgram], () => {
    emit("filter", {
        location: selectedLocation.value == -1 ? null : selectedLocation.value,
        program: selectedProgram.value == -1 ? null : selectedProgram.value,
    });
})

</script>
<template>
    <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center">

        <div class="flex gap-2 items-center">
            <select v-model="selectedProgram" class="select-filter">
                <option :value="-1">جميع المجالات</option>
                <option v-if="status === 'success'" v-for="program in data.programs" :value="program.id">{{
                    program.title }}
                </option>
            </select>
            <select class="select-filter" v-model="selectedLocation">
                <option :value="-1">كل المناطق</option>
                <option v-if="status === 'success'" v-for="country in data.countries" :value="country.id">{{
                    country.title }}
                </option>

            </select>
        </div>
    </div>
</template>