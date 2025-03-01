<template>
  <a-modal
    v-model:visible="visible"
    :title="title"
    :mask-closable="false"
    :esc-to-close="false"
    :width="width >= 500 ? 500 : '100%'"
    draggable
    @before-ok="save"
    @close="reset"
  >
    <GiForm ref="formRef" v-model="form" :options="options" :columns="columns" />
  </a-modal>
</template>

<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import { useWindowSize } from '@vueuse/core'
import { addDict, getDict, updateDict } from '@/apis/system/dict'
import { type Columns, GiForm, type Options } from '@/components/GiForm'
import { useResetReactive } from '@/hooks'

const emit = defineEmits<{
  (e: 'save-success'): void
}>()

const { width } = useWindowSize()

const dataId = ref('')
const visible = ref(false)
const isUpdate = computed(() => !!dataId.value)
const title = computed(() => (isUpdate.value ? 'modify dictionary' : 'add dictionary'))
const formRef = ref<InstanceType<typeof GiForm>>()


const options: Options = {
  form: { size: 'large' },
  btns: { hide: true },
}

const [form, resetForm] = useResetReactive({})

const columns: Columns = reactive([
  { label: 'name', field: 'name', type: 'input', rules: [{ required: true, message: 'please enter the name' }] },
  { label: 'code', field: 'code', type: 'input', disabled: () => isUpdate.value, rules: [{ required: true, message: 'please enter the code' }] },
  {

    label: 'description',
    field: 'description',
    type: 'textarea',
    props: {

      maxLength: 200,
      autoSize: { minRows: 3, maxRows: 5 },
    },
  },
])

// 重置
const reset = () => {
  formRef.value?.formRef?.resetFields()
  resetForm()
}

// 保存
const save = async () => {
  const isInvalid = await formRef.value?.formRef?.validate()
  if (isInvalid) return false
  try {
    if (isUpdate.value) {
      await updateDict(form, dataId.value)
      Message.success('modify successfully')
    } else {
      await addDict(form)
      Message.success('add successfully')
    }
    emit('save-success')
    return true
  } catch (error) {
    return false
  }
}

// 新增
const onAdd = () => {
  reset()
  dataId.value = ''
  visible.value = true
}

// 修改
const onUpdate = async (id: string) => {
  reset()
  dataId.value = id
  const { data } = await getDict(id)
  Object.assign(form, data)
  visible.value = true
}

defineExpose({ onAdd, onUpdate })
</script>

<style scoped lang="scss"></style>
