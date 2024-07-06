---
title: 浅谈现代软件开发架构，以及一些思考
date: 2024-06-27 10:09:28 +08:00
categories:
- Summary
tags: 
- Software
- Architecture
---

## 前言

经常在开发软件的时候为软件的结构设计而纠结，不好的结构会为未来的开发埋下隐患，这种隐患尤其出现于业务与交互的临界处，轻则出现不合时宜的错误，重则导致整个系统分崩瓦解。这篇文章总结一下我学过的一些结构模式，以及一些思考，不仅为了自己不会忘记，也希望能够有人能够提出一些指正和更多的见解。

## 设计思想

软件的构成主要可以分为三块：业务逻辑、数据和视图，视图部分负责与用户交互，业务逻辑负责提供服务，可以算作与服务提供商交互，而数据在中间充当媒介，软件像一个桥梁将服务提供者的服务传递给使用者。对于本地软件而言，服务由本地的软件内部业务逻辑提供，而对于网络平台而言，服务由服务器内部的业务逻辑提供，亦或是两者都有。

### MVC、MVP

这部分主要参考 [正确认识 MVC/MVP/MVVM(2020)](https://juejin.cn/post/6901200799242649607) 这篇文章，

### MVVM

### 更多优化，如MVI

## 新模式

### 跨平台和 Local first

### 全栈和 Serverless


<!-- more -->



refs：

[Keegan小钢, 正确认识 MVC/MVP/MVVM(2020)](https://juejin.cn/post/6901200799242649607)

[Steve Burbeck, _Applications Programming in Smalltalk-80(TM):How to use Model-View-Controller (MVC)_ (1979).pdf](https://www.researchgate.net/profile/Steve-Burbeck/publication/238719652_Applications_programming_in_smalltalk-80_how_to_use_model-view-controller_mvc/links/5575a00508ae7536375024c7/Applications-programming-in-smalltalk-80-how-to-use-model-view-controller-mvc.pdf)

[Mike Potel, _MVP: Model-View-Presenter The Taligent Programming Model for C++ and Java_ (1996).pdf](http://wildcrest.com/Potel/Portfolio/mvp.pdf)

[John Gossman, Introduction to Model/View/ViewModel pattern for building WPF apps (2005)](https://learn.microsoft.com/en-us/archive/blogs/johngossman/introduction-to-modelviewviewmodel-pattern-for-building-wpf-apps)

[Josh Smith, Patterns - WPF Apps With The Model-View-ViewModel Design Pattern (2009)](https://learn.microsoft.com/en-us/archive/msdn-magazine/2009/february/patterns-wpf-apps-with-the-model-view-viewmodel-design-pattern)

[Rim Gazzah, MVI Architecture with Android (2020)](https://medium.com/swlh/mvi-architecture-with-android-fcde123e3c4a)

[Xizhi Zhu, Model-View-Intent Design Pattern on Android (2021)](https://xizzhu.me/post/2021-06-21-android-mvi-kotlin-coroutines-flow-compose/)

[Mohammed khudair, MVI Architecture Pattern in Android (2024)](https://medium.com/@mohammedkhudair57/mvi-architecture-pattern-in-android-0046bf9b8a2e)


