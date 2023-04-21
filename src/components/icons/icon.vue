<script  lang="tsx">
// import { defineComponent, resolveComponent, h, computed } from "vue"

export default defineComponent({
  props: {
    svgName: {
      type: String
    },
    iconName: {
      type: String
    },
    elName: {
      type: String
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 16
    },
    hover: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const iconStyle = computed(() => {
      return { color: props.color, fontSize: `${props.size || 16}px` };
    });
    const getHover = computed(() => {
      return props.hover ? "icon icon-hover" : "icon";
    });
    //element-plus 图标
    const renderElIcon = () => {
      const { elName, color, size } = props
      if (elName) {
        return (
          <el-icon size={size} color={color} >
            {h(resolveComponent(elName))}
          </el-icon>
        )
      }
    }
    //本地svg
    const renderSvg = () => {
      const { svgName, color, size } = props
      if (svgName) {
        return (
          <svg class={getHover.value} aria-hidden="true" style={iconStyle.value}>
            <use xlink:href={`#svg-${svgName}`}></use>
          </svg>
        )
      }

    }
    return () => {
      const { elName, svgName } = props;
      if (elName) {
        return renderElIcon()
      }
      if (svgName) {
        return renderSvg()
      }
      return null
    }
  }
})
</script>
<style lang="scss" scoped>
.icon {
  height: 1em;
  width: 1em;
  fill: currentColor;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: 0;

  &.icon-hover:hover {
    color: var(--el-color-primary);
    transform: scale(1.3);
    vertical-align: -0.15em;
  }
}
</style>
