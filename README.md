# react_learning

基于 React 学习资料，代码，笔记
@[TOC]目录

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
    ** 参数是方法的 **
    <!-- 接收两个参数，第一个是上一次的是state，第二个是props -->
    this.setState((prevState,props)=>{
        return {
            isLiked:!prevState.isLiked
        }
    })
    setState是异步的，所以想要获取到最新的state，没有办法获取，就有了第二个参数，这是一个可选的回调函数

## props 和 state 的异同点

1. 相同点：都是纯 js 对象，都会触发 render 更新，都具有确定性
2. 不同点：
   1）属性能从父组件获取，状态不能
   2）属性可以由父组件修改，状态不能
   3）属性能在内部设置默认值，状态也可以
   4）属性不在组件内部修改，状态不可以
   5）属性能设置子组件初始值，状态不可以
   6）属性可以修改子组件的值，状态不可以
   7）state 是一个局部的，只能被组件自身控制的数据源，state 中状态可以通过 this.setState 方法进行更新，setState 会导致组件的重新渲染。

## 绑定事件

1. react 的事件并不是原生事件，而是合成事件。

## 组件通信

1. 分类
    1. 父子组件通信（无论父组件传递的是 props 还是 state，子组件都通过 props 接收）
    2. 子父组件通信（父组件传递方法给子组件，子组件调用父组件传递过来的方法，tip：自己的状态自己更改）
    3. 非父子组件通信（ref 链）
       1).ref='xxx'
       2).ref={el=>this.xxx=el} 【推荐】
    4. 跨组件通信
       context
       ~~使用流程
       --创建上下文 React.createContext()
       --使用上下文包裹目标组件的父组件
       --在目标组件中先定义一个静态属性 static contextType=
       --通过 this.context 来使用数据
    5. 多组件状态共享

## HOC（Higher-Order-Components 高阶组件）

### 组件分类：函数式组件，类组件，受控组件，非受控组件，高阶组件

    功能：
    1.进行某些方法或是属性的复用
    2.让外层的组件替我们完成任务，那么里层组件直接使用就可以了

作用：进行组件中相同方法的复用
案例：三个组件中有一个方法是相同的，这个方法如果都在各自组件定义，那么整个代码是冗余的，我们想的是，只定义一次方法，然后复用这个方法。
解决方法：使用高阶组件（封装了复用的方法）
高阶组件： 1.是一个函数； 2.函数接收一个组件作为参数，返回一个组件
关键代码：
const Hoc = (Comp) => {
return class HigherOrderComponent extends Component {
change = () => {

                 }
                 render () {
                     return <Comp change={this.change}></Comp>
                 }
             }
    }

## 组件的生命周期

    生命周期钩子函数一定不要写成箭头函数

### 初始化

    在组件初始化阶段会执行
    *1.constructor
        // 通过super来继承父类身上传递过过来的属性,然后当前组件通过this.props接收
        // 用来初始化一个状态
        // 用来初始绑定一个方法，将this传递给这个方法，一些this方法的绑定  不写订阅（订阅：事件的触发）
    2.static getDerivedStateFormProps()  ---将来可能会使用
    *3.componentWillMount/ UNSAFE_componentWillMount()  带有UNSAFE属于过时的钩子函数
        //  提供一次 数据修改机会
        // 进行数据请求
            axios
            fetch
    *4.render()  // 将Jsx转换成虚拟DOM的对象，
    *5.componentDidMount() // 组件挂载（将render函数生成的vdom对象渲染成真实dom，然后挂载在id为root的容器中）结束

### 更新阶段

    props或state的改变可能会引起组件的更新，组件重新渲染的过程中会调用一下方法：
    *1.componentWillReceiveProps(nextProps)
        // 触发：属性发生改变，就会触发
        // 这个钩子函数一定能监听到整个当前组件的属性变化---->当前组件的路由我们也可以监听到
        应用场景：
            1.路由监听
    2.static getDerivedStateFormProps()
    *3.shouldComponentUpdate()  // 状态改变  决定组件是否更新 return false/true(默认值为true)，React 性能优化的关键钩子
    *4.componentWillUpdate()  // 生成虚拟dom，通过算法，比较生成配置对象
    5.render()
    6.getSnapshotBeforeUpdate() ---将来可能会使用
    *7.componentDidUpdate()  // 新旧虚拟dom对比，不一样的地方做渲染，更新视图

### 卸载阶段

    *1.componentWillUnmount()

### 错误处理

    1. componentDidCatch() // 16.3版本以后新增

## redux 使用

1. 通过 npm 安装 redux
   npm install -s redux react-redux redux-thunk
   npm install -D redux-logger
