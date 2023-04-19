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
      type: Number,
      default: 16
    }
  },
  setup(props) {
    const iconStyle = computed(() => {
      return { color: props.color, fontSize: `${props.size || 16}px` };
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
          <svg aria-hidden="true" style={iconStyle.value}>
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
<style>
</style>
