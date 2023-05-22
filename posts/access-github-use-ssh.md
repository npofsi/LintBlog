﻿---
title: 使用 ssh 访问 Github （从创建密钥到 clone 仓库）
date: 2023-05-22 10:12:28 +08:00
categories:
- Tip
tags: 
- Git
- Github
- ssh
---


最近在打编译器设计赛，帮队友配置 git 的时候发现配置 ssh 的部分每次要看好几篇文章，没有一个流程比较全的教程，所以就写了这篇文章，用这一篇文章就可以在一台新的 Linux 系统上快速使用 Github 合作开发。

## 创建 ssh 密钥

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

如果不支持 ed25519，可以使用：

```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

中间会需要选择密钥的创建位置等：

```text
> Enter a file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
```

默认即在 `~/.ssh/id_ALGORITHM`

生成完后 

`~/.ssh/id_ALGORITHM.pub` 为你的公钥文件;

`~/.ssh/id_ALGORITHM` 为你的私钥文件;

## 添加 ssh 公钥到 GitHub

执行

```shell
cat ~/.ssh/id_ALGORITHM.pub
```

复制输出的公钥

在 [Github User Setting -> SSH and GPG keys](https://github.com/settings/keys) 页面添加 ssh 公钥。

## 启用 ssh agent

```shell
eval "$(ssh-agent -s)"
```

然后将我们的密钥交给 ssh-agent 管理

```shell
ssh-add ~/.ssh/id_ALGORITHM
```

在 `~/.ssh/` 目录下新建一个 config 文件

```shell
touch ~/.ssh/config
```

编辑加入以下内容：

```
HOST github.com
	User git
	ForwardAgent yes
```

## 测试

现在已经配置好了 ssh 可以用以下命令进行测试：

使用这个命令检查密钥是否被加入 ssh-agent

```shell
ssh-add -L
```

使用这个命令检查是否已经可以使用 ssh 访问 Github:

```shell
ssh -T git@github.com
```

如果以上命令返回了 success ，那么已经可以使用 ssh 访问 Github了！
