<template>

    <el-form-item label="搜索字段" style="width: 20rem;">
        <el-select placeholder="搜索字段" clearable v-model="localSearchConfCollCond.key"
            @change="hanldeSelectKeyOption">
            <template v-for="option in keyOptions" :key="option.key">
                <el-option
                    v-if="['string', 'number', 'boolean'].includes(option.value.type) && !['created_at', 'updated_at'].includes(option.key)"
                    :label="option.key" :value="option.key" />
            </template>
        </el-select>
    </el-form-item>
    <el-form-item v-if="localSearchConfCollCond.valueType == 'number'">
        <el-select placeholder="搜索字段操作" clearable style="width: 8rem;" v-model="localSearchConfCollCond.op"
            @change="syncToParentSearchConfCollCond">
            <el-option label="等于" value="$eq" />
            <el-option label="不小于" value="$gte" />
            <el-option label="不大于" value="$lte" />
            <el-option label="不等于" value="$ne" />
        </el-select>
    </el-form-item>
    <el-form-item>
        <el-input placeholder="搜索值" v-model="localSearchConfCollCond.value"
            @blur="syncToParentSearchConfCollCond"></el-input>
    </el-form-item>

</template>

<script setup lang="ts">

import { ref, type PropType, watch } from 'vue'

const props = defineProps({
    keyOptions: {
        type: Array as PropType<KeySelectOption[]>,
        default: () => []
    },
    searchConfCollCond: {
        type: Object as PropType<ConfCollCond>,
        default: {}
    }
})

export interface KeySelectOption {
    key: string
    value: any
}

export interface ConfCollCond {
    id: number
    key: string
    op: string
    value: string
    valueType: string
}

const localSearchConfCollCond = ref<ConfCollCond>({} as ConfCollCond)

const emit = defineEmits(['update:searchConfCollCond'])

watch(() => props.searchConfCollCond, (newVal) => {
    localSearchConfCollCond.value = newVal
}, { immediate: true, deep: true })

const hanldeSelectKeyOption = function (key: string) {
    localSearchConfCollCond.value.valueType = props.keyOptions.find(item => item.key == key)?.value.type ?? ''
    syncToParentSearchConfCollCond()
}

const syncToParentSearchConfCollCond = () => {
    emit(
        'update:searchConfCollCond',
        localSearchConfCollCond.value,
    )
}

</script>