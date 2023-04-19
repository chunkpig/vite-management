import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { setupIcon } from "@/plugins";
import { setupStore } from './stores';
import { setupRouterGuard } from "@/router/guard";
import './styles/index.scss'
const app=createApp(App)
const setupPlugins=()=>{
  // 注册el-icon图标
    setupIcon(app);
    setupStore(app)
}
setupPlugins()

// 注册路由守卫
setupRouterGuard(router);

app.use(router).mount('#app')
