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

## react 中 常用的 css 的第三方包

1. classnames
2. css-in-js 通过安装 styled-components (较为流行)
   引入 import styled from 'styled-components'
   const Container=styled.div`<!-- 这里写css样式 --> width:100px; ...`
   在组件中直接将 Container 作为组件引用在页面中会渲染成 div 标签——可以不用考虑类名名字了

### React 数据分为两个部分

1. 属性 props：描述性质，特点的，组件自己不能随意更改，正常从外部传入的，组件内容可以通过一些方式来初始化设置 通过 static defaultProps={}

2. 状态 state（区分：频繁变化的设置为状态）：组件自己的状态只能自己更改
   通过 setState 来设置 state 值，

#### setState 有两个参数

    第一个参数可以是对象，也可以是方法return一个对象，我们把这个参数叫做 updater
    ** 参数是方法的
    <!-- 接收两个参数，第一个是上一次的是state，第二个是props -->
    this.setState((prevState,props)=>{
        return {
            isLiked:!prevState.isLiked
        }
    })

## redux 使用

1. 通过 npm 安装 redux
   npm install -s redux react-redux redux-thunk
   npm install -D redux-logger
