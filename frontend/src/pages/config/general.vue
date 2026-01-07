<template>
    <div mt-2rem>
        <el-form :inline="true">
            <div flex justify-start pl-6rem>
                <el-form-item label="集合名称" style="width: 20rem;">
                    <el-select placeholder="集合名称" clearable v-model="fetchConfCond.collName">
                        <el-option :label="item.coll_name + (item.desc ? ' (' + item.desc + ')' : '')"
                            :value="item.coll_name as string" v-for="item in configSchemaList" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"
                        @click="handleViewSchemaConfigSchema(fetchConfCond.collName)">查看schema</el-button>
                    <el-button type="primary" @click="handleOpenUploadConfigSchemaDialog">上传schema</el-button>
                </el-form-item>
            </div>

            <div flex justify-start pl-6rem v-for="(item, index) in searchConfCollCondList" :key="item.id">
                <FilterConfCondFormItem :keyOptions="parseTheLeastOneConfCollCondKeySelectOptions"
                    v-model:searchConfCollCond="searchConfCollCondList[index]" />
                <el-form-item>
                    <el-button type="primary" @click="removeConfCollCond(item.id)">删除</el-button>
                </el-form-item>
            </div>

            <div flex justify-start pl-6rem>
                <FilterConfCondFormItem :keyOptions="parseTheLeastOneConfCollCondKeySelectOptions"
                    v-model:searchConfCollCond="theLeastOneConfCollCond" />
                <el-form-item>
                    <el-button type="primary" @click="addConfCollCond">添加搜索条件</el-button>
                    <el-button type="primary" @click="query">搜索</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>

    <div flex justify-left ml-2rem mb-2rem>
        <el-button type="primary" @click="handleOpenSaveConfigDialog(fetchConfCond.collName, "")">新增</el-button>
        <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" :icon="InfoFilled" icon-color="#626AEF"
            title="确定删除?" @confirm="">
            <template #reference>
                <el-button type="danger">删除</el-button>
            </template>
        </el-popconfirm>
    </div>

    <div flex justify-center v-loading="loading">
        <el-table :data="currTableRows">
            <el-table-column type="selection" width="55" />
            <el-table-column :label="column.title ?? column.key" v-for="column in currTableColumns"
                show-overflow-tooltip>
                <template #default="scope" :prop="column.key">{{ scope.row[column.key] }}</template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" min-width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handleOpenSaveConfigDialog(scope.row.coll_name, scope.row.id)">修改</el-button>
                    <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" :icon="InfoFilled"
                        icon-color="#626AEF" title="确定删除?" @confirm="">
                        <template #reference>
                            <el-button link type="danger" size="small">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
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

    <div flex justify-center mt-1rem>
        <el-pagination v-model:current-page="fetchConfCond.page" v-model:page-size="fetchConfCond.pageSize"
            :page-sizes="[20, 40, 80, 100]" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal"
            @size-change="query" @current-change="query" />
    </div>

    <el-dialog width="30%" v-model="previewConfigSchemaVisable" :before-close="handleClosePreviewConfigSchemaDialog">
        <json-viewer :value="configSchemaPreview" copyable boxed sort style="text-align: left;" />
    </el-dialog>

    <JsonSchemaFormDialog v-model:save-config-form="saveConfigForm" :title="saveConfigDialogTitle"
        v-model:saveConfigDialogVisable="saveConfigDialogVisable"
        v-model:saveConfigFormJsonSchema="saveConfigFormJsonSchema" @handleSaveConfig="handleSaveConfig" />

</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { DashboardService } from '~/rpc/proto/dashboard_api';
import api from '~/rpc/proto/dashboard';
import { ElFormItem, ElInput, ElMessage, type UploadFile } from 'element-plus'
import { InfoFilled } from '@element-plus/icons-vue'
import FilterConfCondFormItem from '~/components/FilterConfCondFormItem.vue';
import { ConfCollCond, KeySelectOption } from '~/components/FilterConfCondFormItem.vue';
import JsonSchemaFormDialog from '~/components/JsonSchemaFormDialog.vue';

defineOptions({
    name: "/config/general"
})

let confCollCondNextId: number = 1

interface FetchConfCond {
    collName: string
    page: number
    pageSize: number
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

interface ConfigSchemaPreview {
    table: string
    index_keys: string[]
    uniq_index_keys: string[]
    json_schema: any
    desc: string
}

const configSchemaPreview = ref<ConfigSchemaPreview>({} as ConfigSchemaPreview)
const previewConfigSchemaVisable = ref(false)

const handlePreviewReadyUploadConfigSchema = function (file: UploadFile) {
    previewConfigSchemaVisable.value = true
    for (const item of readyUploadConfigSchemaFiles.value) {
        if (item.name == file.name) {
            try {
                configSchemaPreview.value = JSON.parse(item.fileContent || '{}')
            } catch (e) {
                ElMessage.error("文件内容不是有效的 JSON 格式")
                configSchemaPreview.value = {} as ConfigSchemaPreview
            }
            break
        }
    }
}

const parseTheLeastOneConfCollCondKeySelectOptions = computed(() => {
    const schema = configSchemaList.value.find(item => item.coll_name == fetchConfCond.collName)
    const jsonSchema = JSON.parse(schema?.json_schema ?? '{}')
    const keySelectOptions = [] as KeySelectOption[]
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
                    index_keys: item.index_keys ?? [],
                    uniq_index_keys: item.uniq_index_keys ?? [],
                    json_schema: JSON.parse(item.json_schema ?? '{}'),
                    desc: item.desc ?? ''
                }
            } catch (e) {
                ElMessage.error("文件内容不是有效的 JSON 格式")
                configSchemaPreview.value = {} as ConfigSchemaPreview
            }
            break
        }
    }
}

const handleClosePreviewConfigSchemaDialog = function () {
    previewConfigSchemaVisable.value = false
}

watch(() => fetchConfCond.collName, () => {
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
})

const manualInputConfigSchema = ref('')

onMounted(() => {
    query()
})

const pageTotal = ref(0)

const compileConfCollCondToFilterValue = (confCollCond: ConfCollCond): any => {
    let filter

    switch (confCollCond.valueType) {
        case 'number':
            switch (confCollCond.op) {
                case 'gte':
                    filter = {
                        '$gte': confCollCond.value
                    }
                    break
                case 'lte':
                    filter = {
                        '$lte': confCollCond.value
                    }
                    break
                case 'ne':
                    filter = {
                        '$ne': confCollCond.value
                    }
                    break
                default:
                    filter = confCollCond.value
            }
            break
        case 'string':
            filter = { "$regex": confCollCond.value, "$options": "im" }
            break
        default:
            filter = confCollCond.value
    }

    if (!filter) {
        filter = ''
    }

    return filter
}

const query = function () {
    fetchGeneralConfList()
    fetchConfigSchema()
}

const loading = ref(false)

interface CurrTableColumn {
    key: string
    title: string
    collName: string
}
const currTableColumns = ref<CurrTableColumn[]>([])
const currTableRows = ref<any[]>([])

const fetchGeneralConfList = async function () {
    if (!fetchConfCond.collName) {
        return
    }

    const filter: { [key: string]: any } = {}
    if (theLeastOneConfCollCond.value.key) {
        const key = theLeastOneConfCollCond.value.key as string
        filter[key] = compileConfCollCondToFilterValue(theLeastOneConfCollCond.value)
    }

    for (const item of searchConfCollCondList.value) {
        if (item.key) {
            filter[item.key as string] = compileConfCollCondToFilterValue(item)
        }
    }

    loading.value = true

    currTableRows.value = []
    currTableColumns.value = []

    try {
        const generalConfListResp = await DashboardService.ListGeneralConf({
            coll_name: fetchConfCond.collName,
            filter: JSON.stringify(filter),
            page: {
                page: fetchConfCond.page,
                page_size: fetchConfCond.pageSize,
            },
        })

        if (generalConfListResp) {
            pageTotal.value = generalConfListResp.total ? generalConfListResp.total : 0
            if (generalConfListResp.list) {
                for (const item of generalConfListResp.list) {
                    const row = JSON.parse(item)
                    currTableRows.value.push(row)
                }
            }
        }
    } catch (error) {
        ElMessage.error("获取配置列表失败")
        loading.value = false
        return
    }

    for (const item of configSchemaList.value) {
        if (item.coll_name != fetchConfCond.collName) {
            continue
        }
        const jsonSchema = JSON.parse(item.json_schema ?? '{}')
        for (const key in jsonSchema.properties) {
            currTableColumns.value.push({
                key: key,
                title: jsonSchema.properties[key].title,
                collName: item.coll_name
            } as CurrTableColumn)
        }
    }

    loading.value = false
}

const saveConfigDialogTitle = ref('')

const saveConfigDialogVisable = ref(false)

const saveConfigFormJsonSchema = ref<any>({})

const saveConfigForm = ref<any>({})

const handleSaveConfig = async function () {
    if (!saveConfigForm.value.collName) {
        ElMessage.error("请选择配置集合")
        return
    }

    if (!saveConfigForm.value.data) {
        ElMessage.error("请填写配置内容")
        return
    }

    loading.value = true

    try {
        if (!saveConfigForm.value.id) {
            await DashboardService.AddGeneralConf({
                coll_name: saveConfigForm.value.collName,
                value: JSON.stringify(saveConfigForm.value.data),
            })
        } else {
            await DashboardService.UpdateGeneralConf({
                id: saveConfigForm.value.id,
                coll_name: saveConfigForm.value.collName,
                value: JSON.stringify(saveConfigForm.value.data),
            })
        }

        ElMessage.success("保存成功")

        query()
    } finally {
        loading.value = false
    }
}

const handleOpenSaveConfigDialog = function (collName: string, id: string) {
    if (!collName) {
        ElMessage.error("请选择配置集合")
        return
    }

    const schema = configSchemaList.value.find(item => item.coll_name == collName)
    if (!schema) {
        ElMessage.error("配置集合不存在")
        return
    }

    saveConfigForm.value.collName = collName

    saveConfigDialogTitle.value = schema.desc ? schema.desc + "(" + schema.coll_name + ")" : schema.coll_name as string

    saveConfigFormJsonSchema.value = JSON.parse(schema.json_schema ?? '{}')

    delete saveConfigFormJsonSchema.value.properties._id
    delete saveConfigFormJsonSchema.value.properties.created_at
    delete saveConfigFormJsonSchema.value.properties.updated_at

    saveConfigDialogVisable.value = true
}

</script>