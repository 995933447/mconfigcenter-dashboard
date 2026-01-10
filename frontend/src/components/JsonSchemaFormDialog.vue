<template>
    <el-dialog width="30%" v-model="localSaveConfigDialogVisable" :before-close="handleCloseSaveConfigDialog" :title="title">
        <vue-form :schema="saveConfigFormJsonSchema" v-model="localSaveConfigForm" @cancel="cancelSaveConfig"
            @submit="handleSaveConfig" @change="onFormDataChanged"></vue-form>
    </el-dialog>
</template>

<script setup lang="ts">
import VueForm from '@lljj/vue3-form-element';
import { ref, PropType, watch } from 'vue';

const localSaveConfigDialogVisable = ref(false)

const localSaveConfigForm = ref<any>({})

const props = defineProps({
    title: {
        type: String as PropType<string>,
    },
    saveConfigFormJsonSchema: {
        type: Object as PropType<any>,
        required: true
    },
    saveConfigDialogVisable: {
        type: Boolean as PropType<boolean>,
        required: true    
    },
    saveConfigForm: {
        type: Object as PropType<any>,
        required: true
    }
})

const schemaUi = {
    'ui:type': {
        width: '100px',
        attrs: {
            width: '99px', // 这里直接传给widget组件，而非外层的width配置
        },
        style: {
            // 通过 vue render函数 style 传递给 Widget 组件，只能配置在叶子节点
            boxShadow: '0 0 6px 2px #2b9939'
        },
    },
}

watch(() => props.saveConfigDialogVisable, (newVal) => {
    localSaveConfigDialogVisable.value = newVal
})

watch(() => props.saveConfigForm, (newVal) => {
    localSaveConfigForm.value = initFormDataBySchema(
      props.saveConfigFormJsonSchema,
      newVal
    )
}, {
    deep: true
})

const onFormDataChanged = function () {
    emit('update:saveConfigForm', localSaveConfigForm.value)
}

const handleSaveConfig = async function () {
    emit('update:saveConfigForm', localSaveConfigForm.value)
    emit('handleSaveConfig', localSaveConfigForm.value)
}

const emit = defineEmits(['update:saveConfigDialogVisable', 'update:saveConfigForm', 'handleSaveConfig'])

const cancelSaveConfig = async function () {
    emit('update:saveConfigForm', {})
    emit('update:saveConfigDialogVisable', false)
}

const handleCloseSaveConfigDialog = function () {
    cancelSaveConfig()
}

function initFormDataBySchema(schema: any, data: any): any {
  if (!schema || typeof schema !== 'object') return data

  const { type, properties, items, default: def } = schema

  // 如果有 default，优先使用
  if (data == null && def !== undefined) {
    return def
  }

  if (type === 'object') {
    const result: any = {}
    const src = data ?? {}

    if (properties) {
      for (const key in properties) {
        result[key] = initFormDataBySchema(
          properties[key],
          src[key]
        )
      }
    }
    return result
  }

  if (type === 'array') {
    const arr = Array.isArray(data) ? data : []
    return arr.map(item => initFormDataBySchema(items, item))
  }

  if (type === 'string') return data ?? ''
  if (type === 'number' || type === 'integer') return data ?? 0
  if (type === 'boolean') return data ?? false

  return data
}


</script>