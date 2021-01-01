
---

title: 直接部署文件夹至gh-pages

urlname: tce72y

date: 2020-09-24 22:22:13 +0800

categories: [其他]

tags: [gh-pages]

---

[https://www.npmjs.com/package/gh-pages](https://www.npmjs.com/package/gh-pages)<br />

```bash
npm install gh-pages@3.0.0 --save-dev
```

<br />3.1版本会有bug, 所以指定版本安装<br />
部署只当文件夹<br />

```bash
gh-pages -d [dist]
```



