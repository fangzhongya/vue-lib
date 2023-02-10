<!--Props-->
<template>
    <div>
        <Props
            :string="string"
            :number="number"
            :boolean="boolean"
            :array="array"
            :object="object"
            :funct="funct"
            :any="any"
            :all="all"
            :many="many"
            :date="date"
        >
        </Props>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const string = ref('福娃亲热v');
const number = ref(3232);
const boolean = ref(true);
const array = ref([{ aa: 1 }]);
const object = ref({ aa: 1 });
const funct = function () {
    aa: 1;
};

const any = ref();
const all = ref();
const many = ref();
const date = ref(new Date());
</script>
