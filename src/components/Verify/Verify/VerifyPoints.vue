<template>
  <div style="position: relative">
    <div class="verify-img-out">
      <div
        class="verify-img-panel"
        :style="{
          'width': setSize.imgWidth,
          'height': setSize.imgHeight,
          'background-size': `${setSize.imgWidth} ${setSize.imgHeight}`,
          'margin-bottom': `${vSpace}px`,
        }"
      >
        <div
          v-show="showRefresh"
          class="verify-refresh"
          style="z-index: 3"
          @click="refresh"
        >
          <i class="iconfont icon-refresh"></i>
        </div>
        <img
          ref="canvas"
          :src="`data:image/png;base64,${pointBackImgBase}`"
          alt=""
          style="width: 100%; height: 100%; display: block"
          @click="bindingClick ? canvasClick($event) : undefined"
        />

        <div
          v-for="(tempPoint, index) in tempPoints"
          :key="index"
          class="point-area"
          :style="{
            'background-color': '#1abd6c',
            'color': '#fff',
            'z-index': 9999,
            'width': '20px',
            'height': '20px',
            'text-align': 'center',
            'line-height': '20px',
            'border-radius': '50%',
            'position': 'absolute',
            'top': `${parseInt(`${tempPoint.y - 10}`)}px`,
            'left': `${parseInt(`${tempPoint.x - 10}`)}px`,
          }"
        >
          {{ index + 1 }}
        </div>
      </div>
    </div>

    <div
      class="verify-bar-area"
      :style="{
        'width': setSize.imgWidth,
        'color': barAreaColor,
        'border-color': barAreaBorderColor,
        'line-height': barSize.height,
      }"
    >
      <span class="verify-msg">{{ text }}</span>
    </div>
  </div>
</template>

<script type="text/babel">
import {
  getCurrentInstance,
  nextTick,
  onMounted,
  reactive,
  ref,
  toRefs,
} from 'vue'
import {
  checkBehaviorCaptcha,
  getBehaviorCaptcha,
} from '@/apis/common/captcha'
import { resetSize } from '@/utils/verify'
import { encryptByAes } from '@/utils/encrypt'

export default {
  name: 'VerifyPoints',
  props: {
    // 弹出式pop，固定fixed
    mode: {
      type: String,
      default: '',
    },
    captchaType: {
      type: String,
    },
    // 间隔
    vSpace: {
      type: Number,
      default: 5,
    },
    imgSize: {
      type: Object,
      default() {
        return {
          width: '310px',
          height: '155px',
        }
      },
    },
    barSize: {
      type: Object,
      default() {
        return {
          width: '310px',
          height: '40px',
        }
      },
    },
  },
  setup(props) {
    const { mode, captchaType } = toRefs(props)
    const { proxy } = getCurrentInstance()
    const secretKey = ref('') // 后端返回的ase加密秘钥
    const checkNum = ref(3) // 默认需要点击的字数
    const fontPos = reactive([]) // 选中的坐标信息
    const checkPosArr = reactive([]) // 用户点击的坐标
    const num = ref(1) // 点击的记数
    const pointBackImgBase = ref('') // 后端获取到的背景图片
    const poinTextList = reactive([]) // 后端返回的点击字体顺序
    const backToken = ref('') // 后端返回的token值
    const setSize = reactive({
      imgHeight: 0,
      imgWidth: 0,
      barHeight: 0,
      barWidth: 0,
    })
    const tempPoints = reactive([])
    const text = ref('')
    const barAreaColor = ref()
    const barAreaBorderColor = ref()
    const showRefresh = ref(true)
    const bindingClick = ref(true)

    // 请求背景图片和验证图片
    function getPicture() {
      const data = {
        captchaType: captchaType.value,
      }
      getBehaviorCaptcha(data).then((res) => {
        pointBackImgBase.value = res.data.originalImageBase64
        backToken.value = res.data.token
        secretKey.value = res.data.secretKey
        poinTextList.push(res.data.wordList)
        text.value = `请依次点击【${poinTextList.join(',')}】`
        poinTextList.length = 0
      })
    }

    // 获取坐标
    const getMousePos = function (e) {
      const x = e.offsetX
      const y = e.offsetY
      return { x, y }
    }

    // 创建坐标点
    const createPoint = function (pos) {
      tempPoints.push({ ...pos })
      return num.value + 1
    }

    // 坐标转换函数
    const pointTransform = function (pointArr, imgSize) {
      return pointArr.map((p) => {
        const x = Math.round((310 * p.x) / Number.parseInt(imgSize.imgWidth, 10))
        const y = Math.round((155 * p.y) / Number.parseInt(imgSize.imgHeight, 10))
        return { x, y }
      })
    }

    const init = () => {
      // 加载页面
      fontPos.splice(0, fontPos.length)
      checkPosArr.splice(0, checkPosArr.length)
      num.value = 1
      getPicture()
      nextTick(() => {
        const { imgHeight, imgWidth, barHeight, barWidth } = resetSize(proxy)
        setSize.imgHeight = imgHeight
        setSize.imgWidth = imgWidth
        setSize.barHeight = barHeight
        setSize.barWidth = barWidth
        proxy.$parent.$emit('ready', proxy)
      })
    }
    onMounted(() => {
      // 禁止拖拽
      init()
      proxy.$el.onselectstart = function () {
        return false
      }
    })

    const refresh = function () {
      tempPoints.splice(0, tempPoints.length)
      barAreaColor.value = '#000'
      barAreaBorderColor.value = '#ddd'
      bindingClick.value = true
      fontPos.splice(0, fontPos.length)
      checkPosArr.splice(0, checkPosArr.length)
      num.value = 1
      getPicture()
      text.value = '验证失败'
      showRefresh.value = true
    }

    const canvas = ref(null)
    const canvasClick = (e) => {
      checkPosArr.push(getMousePos(e))
      if (num.value === checkNum.value) {
        num.value = createPoint(getMousePos(e))
        // 按比例转换坐标值
        const arr = pointTransform(checkPosArr, setSize)
        checkPosArr.length = 0
        checkPosArr.push(...arr)
        // 等创建坐标执行完
        setTimeout(() => {
          // 发送后端请求
          const captchaVerification = secretKey.value
            ? encryptByAes(
                  `${backToken.value}---${JSON.stringify(checkPosArr)}`,
                  secretKey.value,
            )
            : `${backToken.value}---${JSON.stringify(checkPosArr)}`
          const data = {
            captchaType: captchaType.value,
            pointJson: secretKey.value
              ? encryptByAes(JSON.stringify(checkPosArr), secretKey.value)
              : JSON.stringify(checkPosArr),
            token: backToken.value,
          }
          checkBehaviorCaptcha(data).then((res) => {
            if (res.success && res.data.repCode === '0000') {
              barAreaColor.value = '#4cae4c'
              barAreaBorderColor.value = '#5cb85c'
              text.value = '验证成功'
              bindingClick.value = false
              if (mode.value === 'pop') {
                setTimeout(() => {
                  proxy.$parent.clickShow = false
                  refresh()
                }, 1500)
              }
              proxy.$parent.$emit('success', { captchaVerification })
            } else {
              proxy.$parent.$emit('error', proxy)
              barAreaColor.value = '#d9534f'
              barAreaBorderColor.value = '#d9534f'
              text.value = res.data.repMsg
              setTimeout(() => {
                refresh()
              }, 700)
            }
          })
        }, 400)
      }
      if (num.value < checkNum.value) {
        num.value = createPoint(getMousePos(e))
      }
    }

    return {
      secretKey,
      checkNum,
      fontPos,
      checkPosArr,
      num,
      pointBackImgBase,
      poinTextList,
      backToken,
      setSize,
      tempPoints,
      text,
      barAreaColor,
      barAreaBorderColor,
      showRefresh,
      bindingClick,
      init,
      canvas,
      canvasClick,
      getMousePos,
      createPoint,
      refresh,
      getPicture,
      pointTransform,
    }
  },
}
</script>
