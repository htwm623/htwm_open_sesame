
---

title: 简单静态文件server

urlname: zgn99d

date: 2020-12-18 23:16:38 +0800

tags: [静态文件server]

categories: [其他]

---



<a name="2Df5C"></a>
## python http.server
> python内置模块 简单 拿来即用

```bash
# 指定端口
python -m http.server 8000

# 绑定ip
python -m http.server 8000 --bind 127.0.0.1

# 指定文件夹
python -m http.server --directory /tmp/

```


<a name="aCVXT"></a>
## node http-server
> 功能较为丰富



```bash
# 全局安装
npm i http-server -g

# 启用命令 -p 指定端口, -o打开浏览器
http-server -p 8000 -o

# -c 缓存时间 默认3600s
# 禁用缓存
http-server -c-1
# 缓存10秒
http-server -c10
```

<br />

<a name="wOwbt"></a>
## 题外话
> 同一局域网下, 可在草料二维码生成网址链接, 手机扫描访问


