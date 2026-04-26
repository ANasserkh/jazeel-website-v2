<script setup>
const countries = ref([]);
const types = ref([]);
const programs = ref([]);

await useFetch(`${useRuntimeConfig().public.apiBase}/donors/filters`, {
    onResponse: ({ response }) => {
        countries.value = response._data.countries;
        types.value = response._data.types;
        programs.value = response._data.programs;
    }
});

 
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
                <option v-if="status !== 'pending'" v-for="program in programs" :value="program.id">{{
                    program.title }}
                </option>
            </select>
            <select class="select-filter" v-model="selectedLocation">
                <option :value="-1">كل المناطق</option>
                <option v-for="country in countries" :value="country.id">{{ country.title }}</option>

            </select>
            <select class="select-filter" v-model="selectedType">
                <option :value="-1">كل الجهات</option>
                <option v-for="type in types" :value="type.id">{{ type.title }}</option>

            </select>
        </div>
    </div>
</template>