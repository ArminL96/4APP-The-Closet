import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { Brand, Material, WashingMode } from "@/custom_types";
import { getBrands, getMaterials, getWashingModes } from "@/composables/GetCalls";

export const useBrandsStore = defineStore("brands", () => {
    const brands = ref<Brand[]>([]);

    const isEmpty = computed(() => brands.value.length == 0);

    function fetch() {
        getBrands().then((result) => {
            brands.value = result;
        })
    }

    return { brands, isEmpty, fetch };
})

export const useMaterialsStore = defineStore("materials", () => {
    const materials = ref<Material[]>([]);

    const isEmpty = computed(() => materials.value.length == 0);

    function fetch() {
        getMaterials().then((result) => {
            materials.value = result;
        })
    }

    return { materials, isEmpty, fetch };
})

export const useWashingModeStore = defineStore("washingModes", () => {
    const washingModes = ref<WashingMode[]>([]);

    const isEmpty = computed(() => washingModes.value.length == 0);

    function fetch() {
        getWashingModes().then((result) => {
            washingModes.value = result;
        })
    }

    return { washingModes, isEmpty, fetch };
})