# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 项目起步
1. 下载所需依赖项 <br/>
   1. react-router-dom 
   2. redux，react-redux，react-thunk <br/>
   3. styled-components (采用css in js) <br/>
   4. prop-types 对props进行校验

2. 新建文件夹 <br/>
   1. views <br/>
   2. components <br/>
   3. router
   4. store
   5. utils
   6. context

3. 配置根路径
   1. npm run eject，修改webpack.config.js
   2. 下载craco(create-react-app-config) npm i @craco/craco@alpha -D
   3. 配置craco.config.js文件
   4. 修改script启动命令 craco start...

4. 配置less
   1. npm i craco-less@2.1.0-alpha.0
   2. 配置craco.config.js文件，使用craco-less插件

5. 路由配置
   1. router/index.js
   2. 


6. 请求配置
   1. api/index.js 配置axios实例及拦截器
   2. 