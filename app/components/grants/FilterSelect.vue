<script setup>
const config = useRuntimeConfig();

const { data, execute, status } = await useFetch(`${config.public.apiBase}/grants/filters`);
execute();

const selectedCountry = ref(-1);
const selectedProgram = ref(-1);

const emit = defineEmits(["filter"]);
watchEffect(() => {
    emit("filter", {
        country: selectedCountry.value,
        program: selectedProgram.value
    });
})
</script>
<template>

    <div class="gf-select-wrap">
        <select v-model="selectedProgram" class="gf-select">
            <option selected value="-1">جميع المجالات</option>
            <option v-if="status !== 'pending'" v-for="program in data.programs" :value="program.id">{{ program.title }}
            </option>
        </select>
    </div>
    <div class="gf-select-wrap">
        <select v-model="selectedCountry" class="gf-select">
            <option selected value="-1">جميع المناطق</option>
            <option v-if="status !== 'pending'" v-for="country in data.countries" :value="country.id">{{ country.title
                }}</option>
        </select>
    </div>

</template>