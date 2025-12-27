<template>

    <div flex justify-start pl-6rem v-for="(item, index) in localSearchConfCollCondList" :key="item.id">
        <el-form-item label="搜索字段" style="width: 20rem;">
            <el-select placeholder="搜索字段" clearable v-model="localSearchConfCollCondList[index].key"
                @change="syncToParentSearchConfCollCondList">
                <template v-for="option in keyOptions" :key="option.key">
                    <el-option
                        v-if="['string', 'number', 'boolean'].includes(option.value.type) && !['created_at', 'updated_at'].includes(option.key)"
                        :label="option.key" :value="option.key" />
                </template>
            </el-select>
        </el-form-item>
        <el-form-item v-if="localSearchConfCollCondList[index].valueType == 'number'">
            <el-select placeholder="搜索字段操作" clearable style="width: 8rem;"
                v-model="localSearchConfCollCondList[index].op" @change="syncToParentSearchConfCollCondList">
                <el-option label="等于" value="$eq" />
                <el-option label="不小于" value="$gte" />
                <el-option label="不大于" value="$lte" />
                <el-option label="不等于" value="$ne" />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-input placeholder="搜索值" v-model="localSearchConfCollCondList[index].value"
                @blur="syncToParentSearchConfCollCondList"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="removeConfCollCond(item.id)">删除</el-button>
        </el-form-item>
    </div>

</template>

<script setup lang="ts">

import { watch, ref, type PropType } from 'vue'

interface KeySelectOption {
    key: string
    value: any
}

const props = defineProps({
    keyOptions: {
        type: Array as PropType<KeySelectOption[]>,
        default: () => []
    },
    searchConfCollCondList: {
        type: Array as PropType<ConfCollCond[]>,
        default: () => []
    }
})

interface ConfCollCond {
    id: number
    key: string
    op: string
    value: string
    valueType: string
}

const emit = defineEmits(['update:searchConfCollCondList'])

const localSearchConfCollCondList = ref<ConfCollCond[]>([])

watch(() => props.searchConfCollCondList, (newVal) => {
    localSearchConfCollCondList.value = newVal
}, { immediate: true, deep: true })

const syncToParentSearchConfCollCondList = () => {
    emit(
        'update:searchConfCollCondList',
        localSearchConfCollCondList.value,
    )
}

const removeConfCollCond = (id: number) => {
    const index = localSearchConfCollCondList.value.findIndex(item => item.id === id)
    if (index !== -1) {
        localSearchConfCollCondList.value.splice(index, 1)
    }
    syncToParentSearchConfCollCondList()
}

</script>