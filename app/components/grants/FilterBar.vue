<script setup>
 

const filters = ref({
    deadline_status: 1,
    source_type: 1,
    program: null,
    country: null
})

const emit = defineEmits(["filter"])

function toggleDeadline(status) {
    filters.value.deadline_status = status;
    filters.value.source_type = 1;
    emit("filter", filters.value);

}

function toggleSource(type) {
    filters.value.source_type = type;
    filters.value.deadline_status = null;
    emit("filter", filters.value);

}

function reset() {
    filters.value.deadline_status = 1;
    filters.value.source_type = 1;
    emit("filter", filters.value);

}



function selectFilters(params) {
    filters.value.program = params.program == -1 ? null : params.program;
    filters.value.country = params.country == -1 ? null : params.country;
    emit("filter", filters.value);

};

</script>
<template>
    <div class="grants-filter-bar">
        <div class="jz-container">
            <div class="grants-filter-inner">
                <div class="gf-pills">
                    <button class="gf-pill" :class="{ active: filters.deadline_status == 1 }" @click="reset">الكل
                    </button>
                    <button class="gf-pill" :class="{ active: filters.deadline_status == 2 }"
                        @click="toggleDeadline(2)">مفتوحة
                    </button>
                    <button class="gf-pill" :class="{ active: filters.deadline_status == 4 }"
                        @click="toggleDeadline(4)">تغلق
                        قريباً </button>
                    <button class="gf-pill" :class="{ active: filters.deadline_status == 3 }"
                        @click="toggleDeadline(3)">انتهت
                    </button>
                    <div class="gf-divider"></div>

                    <button class="gf-pill" :class="{ active: filters.source_type == 2 }" @click="toggleSource(2)">من
                        جزيل
                    </button>

                    <button class="gf-pill" :class="{ active: filters.source_type == 3 }" @click="toggleSource(3)">خارج
                        جزيل
                    </button>
                </div>
                <div class="gf-divider"></div>
                <GrantsFilterSelect @filter="selectFilters" />
            </div>
        </div>
    </div>
</template>