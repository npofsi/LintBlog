---
title: 浅谈软件交互架构，以及一些思考，从MVC, MVP 到 MVVM，以及 MVI
date: 2024-06-27 10:09:28 +08:00
categories:
- Summary
tags: 
- Software
- Architecture
---

## 前言

经常为软件的组织结构而纠结，所以索性就单独写一篇总结出来，其实不管怎么选，任何交互架构都有它的局限性，MVC，MVP，MVVM，MVI都有他们的问题，但也同时各自解决了一些问题。现在看我学习编程还没意识到有软件架构这件事情的时候，写的都是 MVC，其实这也很合理，MVC 在简单的软件设计中就是一个非常符合直觉的设计，至于原因可以看下文，之后随着软件复杂程度的不断提升，MVC 逐渐满足不了大型工程的设计需要，进而更多的解决办法就被提了出来，因此 MVP 和 MVVM 都有他们的使命，当交互结构遇到了对应的问题时，就可以使用这两种结构去解决，同样，MVI也是为了解决一些新的问题，或者说是总结了一些解决新问题的方法。

<!-- more -->

## 设计思想

软件的构成主要可以分为三块：业务逻辑、数据和视图，视图部分负责与用户交互，业务逻辑负责提供服务，可以算作与服务提供商交互，而数据在中间充当媒介，软件像一个桥梁将服务提供者的服务传递给使用者。对于本地软件而言，服务由本地的软件内部业务逻辑提供，而对于网络平台而言，服务由服务器内部的业务逻辑提供，亦或是两者都有。

### MVC、MVP

这部分主要参考 [正确认识 MVC/MVP/MVVM(2020)](https://juejin.cn/post/6901200799242649607) 这篇文章，

### MVVM

### 更多，如MVI


refs：

[Keegan小钢, 正确认识 MVC/MVP/MVVM(2020)](https://juejin.cn/post/6901200799242649607)

[Steve Burbeck, _Applications Programming in Smalltalk-80(TM):How to use Model-View-Controller (MVC)_ (1979).pdf](https://www.researchgate.net/profile/Steve-Burbeck/publication/238719652_Applications_programming_in_smalltalk-80_how_to_use_model-view-controller_mvc/links/5575a00508ae7536375024c7/Applications-programming-in-smalltalk-80-how-to-use-model-view-controller-mvc.pdf)

[Mike Potel, _MVP: Model-View-Presenter The Taligent Programming Model for C++ and Java_ (1996).pdf](http://wildcrest.com/Potel/Portfolio/mvp.pdf)

[John Gossman, Introduction to Model/View/ViewModel pattern for building WPF apps (2005)](https://learn.microsoft.com/en-us/archive/blogs/johngossman/introduction-to-modelviewviewmodel-pattern-for-building-wpf-apps)

[Josh Smith, Patterns - WPF Apps With The Model-View-ViewModel Design Pattern (2009)](https://learn.microsoft.com/en-us/archive/msdn-magazine/2009/february/patterns-wpf-apps-with-the-model-view-viewmodel-design-pattern)

[dino.c, [Windows] 在 Microsoft Docs 网站中挖掘 MVVM 的各种学习资源](https://www.cnblogs.com/dino623/p/mvvm_docs_from_microsoft.html)

[Rim Gazzah, MVI Architecture with Android (2020)](https://medium.com/swlh/mvi-architecture-with-android-fcde123e3c4a)

[Xizhi Zhu, Model-View-Intent Design Pattern on Android (2021)](https://xizzhu.me/post/2021-06-21-android-mvi-kotlin-coroutines-flow-compose/)

[Mohammed khudair, MVI Architecture Pattern in Android (2024)](https://medium.com/@mohammedkhudair57/mvi-architecture-pattern-in-android-0046bf9b8a2e)


