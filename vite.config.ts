import type { UserConfig, ConfigEnv } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import vueJsx from "@vitejs/plugin-vue-jsx"
// https://vitejs.dev/config/
const resolve = (dir: string) => path.join(__dirname, dir);
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const root = process.cwd();
  const env = loadEnv(mode, root); //环境变量
  const isBuild = command === "build";
  return {
    root,
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        // 设置为false，即为不自动导入，设置为路径即在当前路径生成自动导入文件  true即默认./auto-import.d.ts
        imports: ['vue', 'pinia'],
        // 第三方组件库的解析器
        eslintrc: {
          enabled: true, // Default `false`
          filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [ElementPlusResolver(),IconsResolver({
                   //配置前缀，效果等用于Components中的 prefix
                    componentPrefix: "",
                    enabledCollections: ["ep"]
                })],
      }),
      Components({
        // dirs 指定组件所在位置，默认为 src/components
        // 可以让我们使用自己定义组件的时候免去 import 的麻烦
        extensions: ["vue", "md"],
        dts: resolve("src/auto-imports.d.ts"),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
        // 解析的 UI 组件库
        resolvers: [ElementPlusResolver(), 
          IconsResolver({
          prefix: 'i', // 默认为i,设置为false则不显示前缀
          enabledCollections: ["ep"],
           alias: {  
                test: "ep"  //配置别名
           },
        })],
      }),
      Icons({
        autoInstall: true,
        compiler: "vue3"
    }),
      createSvgIconsPlugin({
        iconDirs: [resolve("src/icons")],
        // 指定symbolId格式
        symbolId: "svg-[name]"
      }),
    ],
    resolve: {
      alias: [
      //配置别名
      { find: '@',replacement: resolve('src') }
    ],
     extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    css: {
      preprocessorOptions:{
        scss:{
           additionalData: `@use "@/styles/theme/index.scss" as *;`
        }
      }
    },
    server: {
      host: "0.0.0.0",
      port: 4440, // 服务端口号
      open: false // 服务启动时是否自动打开浏览器
    }
  }
})
