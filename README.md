### create-react-app
1. 全局安装create-react-app `yarn global add create-react-app`
2. cmd 输入`create-react-app projectName`

### react-router(v4.x)
1. 安装`yarn add react-router-dom --save`
2. 引入组件Router, Route `import { BrowserRouter as Router, Route } from "react-router-dom"`

### 使用antd
1. 安装`yarn add antd --save`
2. 在入口文件引入样式文件 `import 'antd/dist/antd.css'`
3. 使用 `import { Button } from 'antd'`

### 使用react-redux
1. 安装redux, react-redux `yarn add redux react-redux --save`

### 使用axios进行网络请求(个人感觉比fetch好)
1. 安装`yarn add axios --save`
2. 对axios进行配置 axios.interceptors.request axios.interceptors.response
3. dev环境配置代理: 在package.json中添加字段 `"proxy": 'http://xxxx.xxx/'`