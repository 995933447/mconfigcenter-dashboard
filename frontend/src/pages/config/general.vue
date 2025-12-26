<template>
    <div mt-2rem>
        <el-form :inline="true">
            <div flex justify-start pl-6rem>
                <el-form-item label="集合名称" style="width: 20rem;">
                    <el-select placeholder="集合名称" clearable v-model="fetchConfCond.coll_name">
                        <el-option :label="item.coll_name + (item.desc? ' (' +item.desc+ ')':'')" :value="item.coll_name" v-for="item in configSchemaList" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"
                        @click="handleViewSchemaConfigSchema(fetchConfCond.coll_name)">查看schema</el-button>
                    <el-button type="primary" @click="handleOpenUploadConfigSchemaDialog">上传schema</el-button>
                </el-form-item>
            </div>

            <div flex justify-start pl-6rem v-for="(item, index) in searchConfCollCondList" :key="item.id">
                <el-form-item label="搜索字段" style="width: 20rem;">
                    <el-select placeholder="搜索字段" clearable v-model="searchConfCollCondList[index].key">
                        <template v-for="option in parseTheLeastOneConfCollCondKeySelectOptions" :key="option.key">
                            <el-option v-if="['string', 'number', 'boolean'].includes(option.value.type) && !['created_at', 'updated_at'].includes(option.key)" :label="option.key" :value="option.key" />
                        </template>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-select placeholder="搜索字段操作" clearable style="width: 8rem;">
                        <el-option label="eq" value="eq" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="搜索值"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="removeConfCollCond(item.id)">删除</el-button>
                </el-form-item>
            </div>

            <div flex justify-start pl-6rem>
                <el-form-item label="搜索字段" style="width: 20rem;">
                    <el-select placeholder="搜索字段" clearable v-model="theLeastOneConfCollCond.key" @change="hanldeSelectTheLeastOneConfCollCondKey">
                        <template v-for="option in parseTheLeastOneConfCollCondKeySelectOptions" :key="option.key">
                            <el-option v-if="['string', 'number', 'boolean'].includes(option.value.type) && !['created_at', 'updated_at'].includes(option.key)" :label="option.key" :value="option.key" />
                        </template>
                    </el-select>
                </el-form-item>
                <el-form-item v-if="theLeastOneConfCollCond.valueType == 'number'">
                    <el-select placeholder="搜索字段操作" clearable style="width: 8rem;" v-model="theLeastOneConfCollCond.op">
                        <el-option label="等于" value="$eq" />
                        <el-option label="不小于" value="$gte" />
                        <el-option label="不大于" value="$lte" />
                        <el-option label="不等于" value="$ne" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="搜索值" v-model="theLeastOneConfCollCond.value" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addConfCollCond">添加搜索条件</el-button>
                    <el-button type="primary">搜索</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>

    <el-dialog width="30%" v-model="uploadConfigSchemaDialogVisable"
        :before-close="handleCloseUploadConfigSchemaDialog">
        <el-form status-icon style="margin-left: 2rem;">
            <el-form-item label="上传文件(json格式)或者手动输入">
                <el-radio-group v-model="uploadConfigSchemaMode">
                    <el-radio value="1">文件</el-radio>
                    <el-radio value="2">数据</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="上传schema文件" v-if="uploadConfigSchemaMode == 1">
                <el-upload :auto-upload="false" v-model:file-list="readyUploadConfigSchemaFiles"
                    :on-change="beforeUploadConfigSchemaFile" :show-file-list="true" multiple>
                    <el-button type="primary">添加</el-button>
                    <template #file="{ file }">
                        <div class="schema-file-item">
                            <span class="name" style="margin-right: 1rem; margin-top: 1rem;"
                                @click="handlePreviewReadyUploadConfigSchema(file)">{{ file.name }}</span>
                            <span style="margin-right: 1rem; cursor: pointer;"
                                v-if="!isConfigSchemaFileUploaded(file.name)"
                                @click="removeReadyUploadConfigSchemaFile(file.name)">删除</span>
                            <el-tag v-if="isConfigSchemaFileUploaded(file.name)" type="success" size="small">
                                上传成功
                            </el-tag>
                            <el-tag v-if="isConfigSchemaFileUploadFailed(file.name)" type="danger" size="small">
                                上传失败
                            </el-tag>
                        </div>
                    </template>
                </el-upload>
            </el-form-item>
            <el-form-item label="手动输入schema" v-if="uploadConfigSchemaMode == 2">
                <el-input type="textarea" v-model="manualInputConfigSchema"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleUploadConfigSchema">确认</el-button>
                <el-button @click="handleCloseUploadConfigSchemaDialog">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <el-dialog width="30%" v-model="previewConfigSchemaVisable" :before-close="handleClosePreviewConfigSchemaDialog">
        <json-viewer :value="configSchemaPreview" copyable boxed sort style="text-align: left;" />
    </el-dialog>

</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watchEffect, watch } from 'vue';
import { DashboardService } from '~/rpc/proto/dashboard_api';
import api from '~/rpc/proto/dashboard';
import { ElFormItem, ElInput, ElMessage, type UploadFile } from 'element-plus'

defineOptions({
    name: "/config/general"
})

let confCollCondNextId: number = 1

interface ConfCollCond {
    id: number
    key: string
    op: string
    value: string
    valueType: string
}

interface FetchConfCond {
    coll_name: string
}

const fetchConfCond: FetchConfCond = reactive({} as FetchConfCond)

const searchConfCollCondList = ref<ConfCollCond[]>([])

const addConfCollCond = () => {
    searchConfCollCondList.value.push({
        id: confCollCondNextId,
        key: '',
        op: '',
        value: '',
        valueType: ''
    })
    confCollCondNextId++
}

const removeConfCollCond = (id: number) => {
    const index = searchConfCollCondList.value.findIndex(item => item.id === id)
    if (index !== -1) {
        searchConfCollCondList.value.splice(index, 1)
    }
}

const theLeastOneConfCollCond = ref<ConfCollCond>({} as ConfCollCond)

const configSchemaList = ref<api.dashboard.IConfigSchema[]>([])

const fetchConfigSchema = async function () {
    const listConfigSchema = await DashboardService.ListConfSchema({})
    configSchemaList.value = listConfigSchema.list || []
}

interface ConfigSchemaFile extends UploadFile {
    name: string
    fileContent: string
    uplaodSuccessful: boolean
    uploadFailed: boolean
}

const readyUploadConfigSchemaFiles = ref<ConfigSchemaFile[]>([])

const isConfigSchemaFileUploaded = (name: string) => {
    for (const item of readyUploadConfigSchemaFiles.value) {
        if (item.name === name) {
            if (item.uplaodSuccessful) {
                return true
            }
            break
        }
    }
    return false
}

const isConfigSchemaFileUploadFailed = (name: string) => {
    for (const item of readyUploadConfigSchemaFiles.value) {
        if (item.name === name) {
            if (item.uploadFailed) {
                return true
            }
            break
        }
    }
    return false
}

const beforeUploadConfigSchemaFile = (file: UploadFile) => {
    const configSchemaFileNames = new Set<string>()

    for (const item of readyUploadConfigSchemaFiles.value) {
        if (configSchemaFileNames.has(item.name)) {
            readyUploadConfigSchemaFiles.value.splice(readyUploadConfigSchemaFiles.value.indexOf(item), 1)
            continue
        }
        configSchemaFileNames.add(item.name)
    }

    const reader = new FileReader()
    reader.onload = function () {
        for (const item of readyUploadConfigSchemaFiles.value) {
            if (item.name === file.name) {
                item.fileContent = reader.result as string
                break
            }
        }
    }

    reader.onerror = function () {
        ElMessage.error("上传文件失败")
    }

    if (file.raw) {
        reader.readAsText(file.raw)
    }

    return
}

const removeReadyUploadConfigSchemaFile = (name: string) => {
    for (const item of readyUploadConfigSchemaFiles.value) {
        if (item.name === name) {
            readyUploadConfigSchemaFiles.value.splice(readyUploadConfigSchemaFiles.value.indexOf(item), 1)
            break
        }
    }
}

const uploadConfigSchemaMode = ref<number>(0)

const uploadConfigSchemaDialogVisable = ref(false)

const handleOpenUploadConfigSchemaDialog = function () {
    uploadConfigSchemaDialogVisable.value = true
}

const handleCloseUploadConfigSchemaDialog = function () {
    uploadConfigSchemaDialogVisable.value = false
    readyUploadConfigSchemaFiles.value = []
    manualInputConfigSchema.value = ''
}

const handleUploadConfigSchema = async function () {
    if (uploadConfigSchemaMode.value != 1 && uploadConfigSchemaMode.value != 2) {
        ElMessage.error("请选择上传模式")
        return
    }

    if (uploadConfigSchemaMode.value == 1) {
        if (readyUploadConfigSchemaFiles.value.length == 0) {
            ElMessage.error("请选择上传文件")
            return
        }

        for (const item of readyUploadConfigSchemaFiles.value) {
            if (item.fileContent == '') {
                ElMessage.error("文件:" + item.name + " 内容为空")
                continue
            }

            if (item.uplaodSuccessful) {
                continue
            }

            try {
                const configSchema = JSON.parse(item.fileContent)
                if (Array.isArray(configSchema)) {
                    ElMessage.error("文件内容不是有效的 JSON 格式")
                    return
                }
                await DashboardService.SetConfigSchema({
                    config_schema: {
                        coll_name: configSchema.table,
                        index_keys: configSchema.index_keys,
                        uniq_index_keys: configSchema.uniq_index_keys,
                        desc: configSchema.desc,
                        json_schema: JSON.stringify(configSchema.json_schema)
                    }
                })
                item.uplaodSuccessful = true
            } catch (error) {
                ElMessage.error("文件上传失败")
                item.uploadFailed = true
            }
        }

        fetchConfigSchema()

        return
    }

    if (manualInputConfigSchema.value == '') {
        ElMessage.error("请输入 schema 内容")
        return
    }

    try {
        const configSchema = JSON.parse(manualInputConfigSchema.value)
        if (Array.isArray(configSchema)) {
            ElMessage.error("文件内容不是有效的 JSON 格式")
            return
        }
        await DashboardService.SetConfigSchema({
            config_schema: {
                "coll_name": configSchema.table,
                "index_keys": configSchema.index_keys,
                "uniq_index_keys": configSchema.uniq_index_keys,
                "desc": configSchema.desc,
                "json_schema": JSON.stringify(configSchema.json_schema)
            }
        })
    } catch (error) {
        ElMessage.error("文件上传失败")
        return
    }

    fetchConfigSchema()
}

const configSchemaPreview = ref({})
const previewConfigSchemaVisable = ref(false)

const handlePreviewReadyUploadConfigSchema = function (file: UploadFile) {
    previewConfigSchemaVisable.value = true
    for (const item of readyUploadConfigSchemaFiles.value) {
        if (item.name == file.name) {
            try {
                configSchemaPreview.value = JSON.parse(item.fileContent || '{}')
            } catch (e) {
                ElMessage.error("文件内容不是有效的 JSON 格式")
                configSchemaPreview.value = {}
            }
            break
        }
    }
}

const parseTheLeastOneConfCollCondKeySelectOptions = computed(() => {
    const schema = configSchemaList.value.find(item => item.coll_name == fetchConfCond.coll_name)
    const jsonSchema = JSON.parse(schema?.json_schema ?? '{}')
    const keySelectOptions = []
    for (const key in jsonSchema.properties) {
        keySelectOptions.push({
            key: key,
            value: jsonSchema.properties[key]
        })
    }
    return keySelectOptions
})

const handleViewSchemaConfigSchema = function (collName: string) {
    previewConfigSchemaVisable.value = true
    for (const item of configSchemaList.value) {
        if (item.coll_name == collName) {
            try {
                configSchemaPreview.value = {
                    table: item.coll_name,
                    index_keys: item.index_keys,
                    uniq_index_keys: item.uniq_index_keys,
                    json_schema: JSON.parse(item.json_schema ?? '{}'),
                    desc: item.desc
                }
            } catch (e) {
                ElMessage.error("文件内容不是有效的 JSON 格式")
                configSchemaPreview.value = {}
            }
            break
        }
    }
}

const hanldeSelectTheLeastOneConfCollCondKey = function (key: string) {
    theLeastOneConfCollCond.value.valueType = parseTheLeastOneConfCollCondKeySelectOptions.value.find(item => item.key == key)?.value.type ?? ''
}

const handleClosePreviewConfigSchemaDialog = function () {
    previewConfigSchemaVisable.value = false
}

watchEffect(() => {
    if (fetchConfCond.coll_name) {
        theLeastOneConfCollCond.value.key = ''
        theLeastOneConfCollCond.value.op = ''
        theLeastOneConfCollCond.value.value = ''
        theLeastOneConfCollCond.value.valueType = ''
        for (const item of searchConfCollCondList.value) {
            item.key = ''
            item.op = ''
            item.value = ''
            item.valueType = ''
        }
    }
})

const manualInputConfigSchema = ref('')

onMounted(() => {
    fetchConfigSchema()
})

</script>