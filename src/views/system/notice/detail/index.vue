<template>
  <div ref="containerRef" class="detail">
    <div class="detail_header">
      <a-affix :target="(containerRef as HTMLElement)">
        <a-page-header title="notice" subtitle="view" @back="onBack">
        </a-page-header>
      </a-affix>
    </div>

    <div class="detail_content">
      <h1 class="title">{{ form?.title }}</h1>
      <div class="info">
        <a-space>
          <span>
            <icon-user class="icon" />
            <span class="label">publisher:</span>
            <span>{{ form?.createUserString }}</span>
          </span>
          <a-divider direction="vertical" />

          <span>
            <icon-history class="icon" />
            <span class="label">publish time:</span>
            <span>{{ form?.effectiveTime ? form?.effectiveTime : form?.createTime
            }}</span>
          </span>
          <a-divider v-if="form?.updateTime" direction="vertical" />

          <span v-if="form?.updateTime">
            <icon-schedule class="icon" />
            <span class="label">update time:</span>
            <span>{{ form?.updateTime }}</span>
          </span>
        </a-space>
      </div>
      <div style="flex: 1;">
        <AiEditor v-model="form.content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AiEditor from './components/index.vue'
import { getNotice } from '@/apis/system/notice'
import { useTabsStore } from '@/stores'
import { useResetReactive } from '@/hooks'

const route = useRoute()
const router = useRouter()
const tabsStore = useTabsStore()

const { id } = route.query
const containerRef = ref<HTMLElement | null>()
const [form, resetForm] = useResetReactive({
  title: '',
  createUserString: '',
  effectiveTime: '',
  createTime: '',
  content: '',
})

// 回退
const onBack = () => {
  router.back()
  tabsStore.closeCurrent(route.path)
}

// 打开
const onOpen = async (id: string) => {
  resetForm()
  const { data } = await getNotice(id)
  Object.assign(form, data)
}

onMounted(() => {
  onOpen(id as string)
})
</script>

<style scoped lang="scss">
.detail_content {
    .title {
        text-align: center;
    }

    .info {
        text-align: center;
    }

    .icon {
      margin-right: 3px;
    }
}
</style>
