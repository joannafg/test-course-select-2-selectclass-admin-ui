<template>
  <a-drawer
    v-model:visible="visible"
    title="update role"
    :mask-closable="false"
    :esc-to-close="false"
    :width="width >= 600 ? 600 : '100%'"
    @before-ok="save"
    @close="reset"

  >
    <a-form ref="formRef" :model="form" :rules="rules" size="large" auto-label-width>
      <fieldset>
        <legend>basic information</legend>
        <a-form-item label="name">
          <a-input v-model.trim="form.name" placeholder="please enter the name" />
        </a-form-item>

        <a-form-item label="code">
          <a-input v-model.trim="form.code" placeholder="please enter the code" :disabled="true" />
        </a-form-item>

        <a-form-item label="sort">
          <a-input-number v-model="form.sort" placeholder="please enter the sort" :min="1" mode="button" />
        </a-form-item>
        <a-form-item label="description">
          <a-textarea
            v-model.trim="form.description"
            placeholder="please enter the description"
            show-word-limit
            :max-length="200"
            :auto-size="{ minRows: 3, maxRows: 5 }"

          />
        </a-form-item>
      </fieldset>
      <fieldset>
        <legend>功能权限</legend>
        <a-form-item hide-label :disabled="form.isSystem">
          <a-space>
            <a-checkbox v-model="isMenuExpanded" @change="onExpanded('menu')">expand/collapse</a-checkbox>
            <a-checkbox v-model="isMenuCheckAll" @change="onCheckAll('menu')">select all/unselect all</a-checkbox>

            <a-checkbox v-model="form.menuCheckStrictly">parent-child linkage</a-checkbox>
          </a-space>
          <template #extra>

            <a-tree
              ref="menuTreeRef"
              class="menu-tree"
              :data="menuList"
              :default-expand-all="isMenuExpanded"
              :check-strictly="!form.menuCheckStrictly"
              checkable
            />
          </template>
        </a-form-item>
      </fieldset>
      <fieldset>
        <legend>data permission</legend>
        <a-form-item hide-label field="dataScope">
          <a-select
            v-model.trim="form.dataScope"
            :options="data_scope_enum"
            placeholder="please select the data permission"
            :disabled="form.isSystem"

          />
        </a-form-item>
        <a-form-item v-if="form.dataScope === 5" hide-label :disabled="form.isSystem">
          <a-space>
            <a-checkbox v-model="isDeptExpanded" @change="onExpanded('dept')">expand/collapse</a-checkbox>
            <a-checkbox v-model="isDeptCheckAll" @change="onCheckAll('dept')">select all/unselect all</a-checkbox>
            <a-checkbox v-model="form.deptCheckStrictly">parent-child linkage</a-checkbox>
          </a-space>
          <template #extra>

            <a-tree
              ref="deptTreeRef"
              :data="deptList"
              :default-expand-all="isDeptExpanded"
              :check-strictly="!form.deptCheckStrictly"
              checkable
            />
          </template>
        </a-form-item>
      </fieldset>
    </a-form>
  </a-drawer>
</template>

<script setup lang="ts">
import { type FormInstance, Message, type TreeNodeData } from '@arco-design/web-vue'
import { useWindowSize } from '@vueuse/core'
import { getRole, updateRole } from '@/apis/system/role'
import { useResetReactive } from '@/hooks'
import { useDept, useDict, useMenu } from '@/hooks/app'

const emit = defineEmits<{
  (e: 'save-success'): void
}>()

const { width } = useWindowSize()

const dataId = ref('')
const visible = ref(false)
const formRef = ref<FormInstance>()
const { data_scope_enum } = useDict('data_scope_enum')
const { deptList, getDeptList } = useDept()
const { menuList, getMenuList } = useMenu()

const rules: FormInstance['rules'] = {
  name: [{ required: true, message: 'please enter the name' }],
  code: [{ required: true, message: 'please enter the code' }],
  dataScope: [{ required: true, message: 'please select the data permission' }],
}


const [form, resetForm] = useResetReactive({
  menuCheckStrictly: true,
  deptCheckStrictly: true,
  sort: 999,
  dataScope: 4,
})

const menuTreeRef = ref()
const deptTreeRef = ref()
const isMenuExpanded = ref(false)
const isDeptExpanded = ref(true)
const isMenuCheckAll = ref(false)
const isDeptCheckAll = ref(false)
// 重置
const reset = () => {
  isMenuExpanded.value = false
  isMenuCheckAll.value = false
  isDeptExpanded.value = true
  isDeptCheckAll.value = false
  menuTreeRef.value?.expandAll(isMenuExpanded.value)
  menuTreeRef.value?.checkAll(false)
  deptTreeRef.value?.expandAll(isDeptExpanded.value)
  deptTreeRef.value?.checkAll(false)
  formRef.value?.resetFields()
  resetForm()
}

// 获取所有选中的菜单
const getMenuAllCheckedKeys = () => {
  // 获取目前被选中的菜单
  const checkedNodes = menuTreeRef.value?.getCheckedNodes()
  const checkedKeys = checkedNodes.map((item: TreeNodeData) => item.key)
  // 获取半选中的菜单
  const halfCheckedNodes = menuTreeRef.value?.getHalfCheckedNodes()
  const halfCheckedKeys = halfCheckedNodes.map((item: TreeNodeData) => item.key)
  checkedKeys.unshift(...halfCheckedKeys)
  return checkedKeys
}

// 获取所有选中的部门
const getDeptAllCheckedKeys = () => {
  if (!deptTreeRef.value) {
    return []
  }
  // 获取目前被选中的部门
  const checkedNodes = deptTreeRef.value?.getCheckedNodes()
  const checkedKeys = checkedNodes.map((item: TreeNodeData) => item.key)
  // 获取半选中的部门
  const halfCheckedNodes = deptTreeRef.value?.getHalfCheckedNodes()
  const halfCheckedKeys = halfCheckedNodes.map((item: TreeNodeData) => item.key)
  checkedKeys.unshift(...halfCheckedKeys)
  return checkedKeys
}

// 展开/折叠
const onExpanded = (type: string) => {
  if (type === 'menu') {
    menuTreeRef.value?.expandAll(isMenuExpanded.value)
  } else if (type === 'dept') {
    deptTreeRef.value?.expandAll(isDeptExpanded.value)
  }
}

// 全选/全不选
const onCheckAll = (type: string) => {
  if (type === 'menu') {
    menuTreeRef.value?.checkAll(isMenuCheckAll.value)
  } else if (type === 'dept') {
    deptTreeRef.value?.checkAll(isDeptCheckAll.value)
  }
}

// 保存
const save = async () => {
  try {
    const isInvalid = await formRef.value?.validate()
    if (isInvalid) return false
    form.menuIds = getMenuAllCheckedKeys()
    form.deptIds = getDeptAllCheckedKeys()
    await updateRole(form, dataId.value)
    Message.success('update successfully')
    emit('save-success')
    return true

  } catch (error) {
    return false
  }
}

// 打开
const onOpen = async (id: string) => {
  reset()
  dataId.value = id
  if (!menuList.value.length) {
    await getMenuList()
  }
  if (!deptList.value.length) {
    await getDeptList()
  }
  const { data } = await getRole(id)
  Object.assign(form, data)
  data.menuIds?.forEach((node) => {
    nextTick(() => {
      menuTreeRef.value?.checkNode(node, true, true)
    })
  })
  data.deptIds?.forEach((node) => {
    nextTick(() => {
      deptTreeRef.value?.checkNode(node, true, true)
    })
  })
  visible.value = true
}

defineExpose({ onOpen })
</script>

<style scoped lang="scss">
fieldset {
  padding: 15px 15px 0 15px;
  margin-bottom: 15px;
  border: 1px solid var(--color-neutral-3);
  border-radius: 3px;
}
fieldset legend {
  color: rgb(var(--gray-10));
  padding: 2px 5px 2px 5px;
  border: 1px solid var(--color-neutral-3);
  border-radius: 3px;
}
.menu-tree{
  :deep(.arco-tree-node-is-leaf) {
    display: inline-flex;
  }
  :deep(.arco-tree-node-indent-block){
    width: 10px;
  }
}
</style>
