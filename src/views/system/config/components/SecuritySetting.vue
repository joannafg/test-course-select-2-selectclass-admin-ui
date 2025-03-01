<template>
  <a-spin :loading="loading">
    <a-form
      ref="formRef"
      :model="form"
      :rules="rules"
      auto-label-width
      label-align="left"
      :layout="width >= 500 ? 'horizontal' : 'vertical'"
      :disabled="!isUpdate"
      scroll-to-first-error
    >
      <a-form-item
        field="PASSWORD_ERROR_LOCK_COUNT" :label="securityConfig.PASSWORD_ERROR_LOCK_COUNT.name"
        :help="securityConfig.PASSWORD_ERROR_LOCK_COUNT.description" hide-asterisk
      >
        <a-input-number
          v-model="form.PASSWORD_ERROR_LOCK_COUNT" class="input-width" :default-value="0" :precision="0"
          :min="0" :max="10"
        >
          <template #append>times</template>
        </a-input-number>
      </a-form-item>
      <a-form-item

        field="PASSWORD_ERROR_LOCK_MINUTES" :label="securityConfig.PASSWORD_ERROR_LOCK_MINUTES.name"
        :help="securityConfig.PASSWORD_ERROR_LOCK_MINUTES.description" hide-asterisk
      >
        <a-input-number
          v-model="form.PASSWORD_ERROR_LOCK_MINUTES" class="input-width" :precision="0" :min="1"
          :max="1440"
        >
          <template #append>minutes</template>
        </a-input-number>
      </a-form-item>

      <a-form-item
        field="PASSWORD_EXPIRATION_DAYS" :label="securityConfig.PASSWORD_EXPIRATION_DAYS.name"
        :help="securityConfig.PASSWORD_EXPIRATION_DAYS.description" hide-asterisk
      >
        <a-input-number
          v-model="form.PASSWORD_EXPIRATION_DAYS" class="input-width" :precision="0" :min="0"
          :max="999"
        >
          <template #append>days</template>
        </a-input-number>
      </a-form-item>

      <a-form-item
        :label="securityConfig.PASSWORD_EXPIRATION_WARNING_DAYS.name"
        field="PASSWORD_EXPIRATION_WARNING_DAYS" :help="securityConfig.PASSWORD_EXPIRATION_WARNING_DAYS.description"
        hide-asterisk
      >
        <a-input-number
          v-model="form.PASSWORD_EXPIRATION_WARNING_DAYS" class="input-width" :precision="0" :min="0"
          :max="998"
        >
          <template #append>days</template>
        </a-input-number>
      </a-form-item>

      <a-form-item
        field="PASSWORD_REPETITION_TIMES" :label="securityConfig.PASSWORD_REPETITION_TIMES.name"
        :help="securityConfig.PASSWORD_REPETITION_TIMES.description" hide-asterisk
      >
        <a-input-number
          v-model="form.PASSWORD_REPETITION_TIMES" class="input-width" :precision="0" :min="3"
          :max="32"
        >
          <template #append>times</template>
        </a-input-number>
      </a-form-item>

      <a-form-item
        field="PASSWORD_MIN_LENGTH" :label="securityConfig.PASSWORD_MIN_LENGTH.name"
        :help="securityConfig.PASSWORD_MIN_LENGTH.description" hide-asterisk
      >
        <a-input-number v-model="form.PASSWORD_MIN_LENGTH" class="input-width" :precision="0" :min="8" :max="32" />
      </a-form-item>
      <a-form-item
        field="PASSWORD_ALLOW_CONTAIN_USERNAME"
        :label="securityConfig.PASSWORD_ALLOW_CONTAIN_USERNAME.name"
      >
        <a-switch v-model="form.PASSWORD_ALLOW_CONTAIN_USERNAME" type="round" :checked-value="1" :unchecked-value="0">
          <template #checked>yes</template>
          <template #unchecked>no</template>
        </a-switch>

      </a-form-item>
      <a-form-item field="PASSWORD_REQUIRE_SYMBOLS" :label="securityConfig.PASSWORD_REQUIRE_SYMBOLS.name">
        <a-switch v-model="form.PASSWORD_REQUIRE_SYMBOLS" type="round" :checked-value="1" :unchecked-value="0">
          <template #checked>yes</template>
          <template #unchecked>no</template>
        </a-switch>

      </a-form-item>
      <a-space style="margin-bottom: 16px">
        <a-button v-if="!isUpdate" v-permission="['system:config:update']" type="primary" @click="onUpdate">
          <template #icon><icon-edit /></template>modify
        </a-button>

        <a-button v-if="!isUpdate" v-permission="['system:config:reset']" @click="onResetValue">
          <template #icon><icon-undo /></template>restore

        </a-button>
        <a-button v-if="isUpdate" type="primary" @click="handleSave">

          <template #icon><icon-save /></template>save
        </a-button>
        <a-button v-if="isUpdate" @click="reset">

          <template #icon><icon-refresh /></template>reset
        </a-button>
        <a-button v-if="isUpdate" @click="handleCancel">

          <template #icon><icon-undo /></template>cancel
        </a-button>
      </a-space>

    </a-form>
  </a-spin>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { type FormInstance, Message, Modal } from '@arco-design/web-vue'
import { type OptionResp, type SecurityConfig, listOption, resetOptionValue, updateOption } from '@/apis/system'
import { useResetReactive } from '@/hooks'

defineOptions({ name: 'SecuritySetting' })
const { width } = useWindowSize()

const loading = ref<boolean>(false)
const formRef = ref<FormInstance>()
const [form] = useResetReactive({
  PASSWORD_ERROR_LOCK_COUNT: 0,
  PASSWORD_ERROR_LOCK_MINUTES: 0,
  PASSWORD_EXPIRATION_DAYS: 0,
  PASSWORD_EXPIRATION_WARNING_DAYS: 0,
  PASSWORD_REPETITION_TIMES: 0,
  PASSWORD_MIN_LENGTH: 0,
  PASSWORD_ALLOW_CONTAIN_USERNAME: 0,
  PASSWORD_REQUIRE_SYMBOLS: 0,
})
const rules: FormInstance['rules'] = {
  PASSWORD_ERROR_LOCK_COUNT: [{ required: true, message: 'please enter the value' }],
  PASSWORD_ERROR_LOCK_MINUTES: [{ required: true, message: 'please enter the value' }],
  PASSWORD_EXPIRATION_DAYS: [{ required: true, message: 'please enter the value' }],
  PASSWORD_EXPIRATION_WARNING_DAYS: [

    { required: true, message: 'please enter the value' },
    {
      validator: (value, callback) => {

        if (form.PASSWORD_EXPIRATION_DAYS > 0 && value >= form.PASSWORD_EXPIRATION_DAYS) {
          callback('the password expiration warning time should be less than the password expiration time')
        } else {
          callback()
        }

      },
    },
  ],
  PASSWORD_REPETITION_TIMES: [{ required: true, message: 'please enter the value' }],
  PASSWORD_MIN_LENGTH: [{ required: true, message: 'please enter the value' }],
}


const securityConfig = ref<SecurityConfig>({
  PASSWORD_ERROR_LOCK_COUNT: {},
  PASSWORD_ERROR_LOCK_MINUTES: {},
  PASSWORD_EXPIRATION_DAYS: {},
  PASSWORD_EXPIRATION_WARNING_DAYS: {},
  PASSWORD_REPETITION_TIMES: {},
  PASSWORD_MIN_LENGTH: {},
  PASSWORD_ALLOW_CONTAIN_USERNAME: {},
  PASSWORD_REQUIRE_SYMBOLS: {},
})
// 重置
const reset = () => {
  formRef.value?.resetFields()
  form.PASSWORD_ERROR_LOCK_COUNT = securityConfig.value.PASSWORD_ERROR_LOCK_COUNT.value || 0
  form.PASSWORD_ERROR_LOCK_MINUTES = securityConfig.value.PASSWORD_ERROR_LOCK_MINUTES.value || 0
  form.PASSWORD_EXPIRATION_DAYS = securityConfig.value.PASSWORD_EXPIRATION_DAYS.value || 0
  form.PASSWORD_EXPIRATION_WARNING_DAYS = securityConfig.value.PASSWORD_EXPIRATION_WARNING_DAYS.value || 0
  form.PASSWORD_REPETITION_TIMES = securityConfig.value.PASSWORD_REPETITION_TIMES.value || 0
  form.PASSWORD_MIN_LENGTH = securityConfig.value.PASSWORD_MIN_LENGTH.value || 0
  form.PASSWORD_ALLOW_CONTAIN_USERNAME = securityConfig.value.PASSWORD_ALLOW_CONTAIN_USERNAME.value || 0
  form.PASSWORD_REQUIRE_SYMBOLS = securityConfig.value.PASSWORD_REQUIRE_SYMBOLS.value || 0
}

const isUpdate = ref(false)
// 修改
const onUpdate = () => {
  isUpdate.value = true
}

// 取消
const handleCancel = () => {
  reset()
  isUpdate.value = false
}

const queryForm = {
  category: 'PASSWORD',
}
// 查询列表数据
const getDataList = async () => {
  loading.value = true
  const { data } = await listOption(queryForm)
  securityConfig.value = data.reduce((obj: SecurityConfig, option: OptionResp) => {
    obj[option.code] = { ...option, value: Number.parseInt(option.value) }
    return obj
  }, {})
  handleCancel()
  loading.value = false
}

// 保存
const handleSave = async () => {
  const isInvalid = await formRef.value?.validate()
  if (isInvalid) return false
  await updateOption(
    Object.entries(form).map(([key, value]) => {
      return { id: securityConfig.value[key].id, code: key, value }
    }),
  )
  await getDataList()
  Message.success('save successfully')
}


// 恢复默认
const handleResetValue = async () => {
  await resetOptionValue(queryForm)
  Message.success('restore successfully')
  await getDataList()
}

const onResetValue = () => {
  Modal.warning({
    title: 'warning',
    content: 'are you sure to restore the security configuration to the default value?',
    hideCancel: false,
    maskClosable: false,
    onOk: handleResetValue,

  })
}

onMounted(() => {
  getDataList()
})
</script>

<style scoped lang="scss">
:deep(.arco-form-item.arco-form-item-has-help) {
  margin-bottom: 5px;
}

.input-width {
  width: 200px;
}
</style>
