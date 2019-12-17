---
title: nvm安装过程记录
date: 2019-10-27 22:52:07
tags:
- node
categories:
- 软件安装
---

# nvm安装及简单使用(windows)

1. 为了避免不必要的麻烦及bug,最好先删除及卸载现有node版本

2. 下载安装包  https://github.com/coreybutler/nvm-windows/releases  选择可执行文件的安装包

3. nvm尽量不要配置代理(ps: 个人配置了淘宝代理之后 安装过程中只安装了node,npm安装失败,未仔细研究原因)

4. nvm 安装node及激活node

   1. nvm install <version>  安装指定版本的node及对应npm,如: nvm install 12.13.0
   2. nvm on <version> 选择使用版本, 如: nvm on 12.13.0
   3. nvm list   查看当前nvm下的node版本列表及当前的版本选择

5. 配置npm代理(因为npm安装使用次数较多,为了速度问题所以选择配置代理)

   1. 选择华为的代理  华为镜像开源站( https://mirrors.huaweicloud.com/ )
   2. 在先放找到npm 按照说明进行配置即可,也可以执行如下代码

   ```配置
   npm config set registry https://mirrors.huaweicloud.com/repository/npm/
   npm cache clean -f
   ```

   



