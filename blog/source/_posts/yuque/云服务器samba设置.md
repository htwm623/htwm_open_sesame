
---

title: 云服务器samba设置

urlname: pfdduq

date: 2020-10-13 00:44:21 +0800

tags: [samba]

categories: [运维管理]

---

由于安全问题,云服务器运营商会默认限制部分端口的访问,如samba使用的445端口,则导致默认设置的samba无法访问,自己解决方案如下<br />

1. linux samba 修改监听端口```bash
# 直接在samba 配置文件中添加以下语句
smb ports = 4455
# 重启smb服务 则samba监听端口修改为4455
```

2. windows设置端口转发<br />原文来自于 [https://www.zhihu.com/question/59814912](https://www.zhihu.com/question/59814912)```bash
# 1. 添加端口转发,添加端口转发之后 实际上访问 \\127.0.0.1 就是在访问设置ip的samba
netsh interface portproxy add v4tov4 listenport=445 listenaddress=127.0.0.1 connectport=4455 connectaddress=xx.xx.xx.xxx

# 2. 其他命令
# 查看全部端口转发
netsh interface portproxy show all
# 删除端口转发
netsh interface portproxy delete v4tov4 listenport=445 listenaddress=127.0.0.1
```

3. 通过资源管理器访问 \\127.0.0.1 实际上就是在访问监听端口的samba


<br />ps: 亲测有效(2019/12/22)

