
---

title: win10常用软件安装

urlname: qbhmf0

date: 2021-01-02 17:49:06 +0800

tags: [常用软件]

categories: [其他]

---



<a name="5iYti"></a>
## Typora


- 官网 [https://www.typora.io/](https://www.typora.io/)


<br />

<a name="wEiAk"></a>
## cmder

- 官网 [https://github.com/cmderdev/cmder](https://github.com/cmderdev/cmder)
- 将cmder添加至右键菜单
   1. 将cmder添加至环境变量
   1. 在powershell 管理员中 执行如下命令
```bash
Cmder.exe /REGISTER ALL
```


<a name="gfQRj"></a>
## nvm-windows

1. 从官网 [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows) 下载安装包安装nvm
1. 设置node及npm 镜像
```bash
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

3. 安装node
```bash
nvm list available
nvm install 14.15.3
```

4. 配置npm代理
```bash
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
```

<br />

<a name="pXMj2"></a>
## miniconda


- 官网 [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)
- conda 镜像清华源 [https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)




