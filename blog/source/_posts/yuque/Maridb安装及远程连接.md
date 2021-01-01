
---

title: Maridb安装及远程连接

urlname: rszyg7

date: 2020-07-14 01:25:11 +0800

categories: [数据库]

tags: [Maridb]

---

<a name="kVOpm"></a>
### 1. 安装数据库
```bash
sudo apt update
sudo apt install mariadb-server
```


<a name="5hPUr"></a>
### 2. 配置数据库
```bash
sudo mysql_secure_installation
```
按照需求选择设置即可<br />

<a name="Y5pmA"></a>
### 3. 配置远程连接
[参考文章](https://blog.csdn.net/lanuage/article/details/78846766)

1. 在文件 /etc/mysql/mariadb.conf.d/50-server.cnf，注释掉bind-address
1. 进入数据库中
```bash
sudo mysql
```

3. 设置账户和远程连接的权限
```bash
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
```
或者
```bash
GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.100.%' IDENTIFIED BY 'my-new-password' WITH GRANT OPTION;
```
设置指定ip时只能由该ip连接<br />


