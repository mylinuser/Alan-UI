import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import Antd from "ant-design-vue";
import "./index.css"

export default {
  ...theme,
  enhanceApp({app}) {
    app.use(Antd)
    app.component('demo-preview', AntDesignContainer)
  }
}
