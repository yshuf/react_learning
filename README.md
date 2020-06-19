# react_learning

基于 React 学习资料，代码，笔记

## 问题：create-react-app 中的 index.js 中的 ReactDOM 做了什么？

1. 将 jsx 语法糖换成 VDOM 模型，然后再 VDOM 渲染成真实 DOM
2. 将渲染出来的真是 DOM，插入到容器 id 为 root 的标签内

## 问题：React 的 VDOM

1. 数据更新会生成新的 VDOM，新的 VDOM 和上一次的进行对比，生成的是一个 patch 对象
2. VDOM 仅仅会渲染不同的地方，相同的地方不进行渲染（惰性原则）
3. React 16 版本以前使用的是 diff 算法
4. 而且 React 能够批处理虚拟 DOM 的刷新，在一个时间循环（Event Loop）内的两次数据变化会被合并。
5. 在 react 16 之后发布的一种 react 核心算法，React Fiber 是对核心算法的一次重新实现（官网说法）。之前用的是 diff 算法。
6. React Fiber 的方法其实很简单————分片

## jsx 的编译过程

1. JSX——使用 react 构造组件，bable 进行编译——生成 javascript 对象——通过 ReactDOM.render()——渲染成 DOM 元素——最后插入页面

## redux 使用

1. 通过 npm 安装 redux
   npm install -s redux react-redux redux-thunk
   npm install -D redux-logger
