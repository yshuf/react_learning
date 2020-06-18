# react_learning
<<<<<<< HEAD

基于 React 学习资料，代码，笔记

## 问题：create-react-app 中的 index.js 中的 ReactDOM 做了什么？

1. 将 jsx 语法糖换成 VDOM 模型，然后再 VDOM 渲染成真实 DOM
2. 将渲染出来的真是 DOM，插入到容器 id 为 root 的标签内
=======
基于React学习资料，代码，笔记

## 问题：React的VDOM
1. 数据更新会生成新的VDOM，新的VDOM和上一次的进行对比，生成的是一个patch对象
2. VDOM仅仅会渲染不同的地方，相同的地方不进行渲染（惰性原则）
3. React 16版本以前使用的是diff算法
4. 而且React能够批处理虚拟DOM的刷新，在一个时间循环（Event Loop）内的两次数据变化会被合并。
5. 在react 16之后发布的一种react 核心算法，React Fiber 是对核心算法的一次重新实现（官网说法）。之前用的是diff算法。
6. React Fiber的方法其实很简单————分片
   
## jsx 的编译过程
1. JSX——使用react构造组件，bable进行编译——生成javascript对象——通过ReactDOM.render()——渲染成DOM元素——最后插入页面
>>>>>>> master
