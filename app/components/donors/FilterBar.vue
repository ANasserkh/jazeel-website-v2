<script setup>

const { status, data } = await useFetch(`${useRuntimeConfig().public.apiBase}/donors/filters`);
const selectedProgram = ref(-1);
const selectedLocation = ref(-1);
const selectedType = ref(-1);

const emit = defineEmits(["filter"]);
watch([selectedLocation, selectedProgram, selectedType], () => {
    emit("filter", {
        location: selectedLocation.value == -1 ? null : selectedLocation.value,
        program: selectedProgram.value == -1 ? null : selectedProgram.value,
        type: selectedType.value == -1 ? null : selectedType.value,
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
            <select class="select-filter" v-model="selectedType">
                <option :value="-1">كل الجهات</option>
                <option v-if="status === 'success'" v-for="type in data.types" :value="type.id">{{ type.title }}
                </option>

            </select>
        </div>
    </div>
</template>