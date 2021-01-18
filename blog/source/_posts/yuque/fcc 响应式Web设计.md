
---

title: fcc 响应式Web设计

urlname: eglek0

date: 2020-12-16 00:33:48 +0800

tags: [fcc]

categories: [前端开发]

---

<a name="oDf68"></a>
## CSS及应用视觉设计
<a name="4xGyH"></a>
### 使用CSS变量一次更改多个元素
> 因为层叠的效果，CSS 变量通常会定义在:root元素里
> 使用媒体查询时修改变量的值, 改变变量的元素样式会方便

```css
/* 创建变量 css变量同窗定义在root元素里 且可以在后面被覆盖 */ 
--penguin-skin: gray;

/* 使用变量 * /
background: var(--penguin-skin);

/* 变量回退 当浏览器或设备不支持变量时采用备用色 */
background: var(--penguin-skin, black);
```


<a name="muQNC"></a>
### 应用视觉设计: text-transform属性可以给英文文本添加大写效果
| `lowercase` | "transform me" |
| :--- | :--- |
| `uppercase` | "TRANSFORM ME" |
| `capitalize` | "Transform Me" |
| `initial` | 使用默认值 |
| `inherit` | 使用父元素的`text-transform`值。 |
| `none` | **Default:**不改变文字。 |


<br />

<a name="sWWl4"></a>
### 应用视觉设计: CSS颜色渐变
```css
/*1. 线性渐变 */
/* background: linear-gradient(gradient_direction, 颜色 1, 颜色 2, 颜色 3, ...); */
background: linear-gradient(35deg, #CCFFFF, #FFCCCC)

/* 2. 条纹渐变 */
background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );

```


<a name="o02Of"></a>
### 应用视觉设计: 缩放倾斜
```css
/* 缩放元素 */
transform: scale(2.1);

/* 倾斜元素 */
transform: skewX(-32deg);
transform: skewY(-10deg);
```


<a name="NQ9Iy"></a>
### 应用视觉设计: 使用CSS创建一个新月
```html
<style>
.center
{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  /* 背景透明 */
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 25px 10px 0px 0px blue; 
}

</style>
<div class="center"></div>
```

- 明天接着看
<a name="MKSIK"></a>
### 应用视觉设计: 使用CSS创建心形
```html
<style>
.heart {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: pink;
  height: 50px;
  width: 50px;
  transform: rotate(-45deg);
}
.heart:after {
  background-color: pink;
  content: "";
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0px;
  left: 25px;
}
.heart:before {
  content: '';
  background-color: pink;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  top: -25px;
  left: 0px;
}
</style>
<div class = "heart"></div>
```

<br />

<a name="YA63w"></a>
### 应用视觉设计: CSS关键帧和动画
```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}
/* 声明 */
@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```
<a name="0Vxvn"></a>
### 应用视觉设计: CSS往复动画
```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }
#rect {
  animation-name: rainbow;
  animation-duration: 4s;
}
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
    left: 0px;
    
  }
  50% {
    background-color: green;
    top: 50px;
    left: 25px;
  }
  100% {
    background-color: yellow;
    top: 0px;
    left: -25px;
  }
}
</style>
<div id="rect"></div>
```


<a name="NBSrQ"></a>
### 应用无障碍: 使用tabindex可以将键盘焦点加入到元素中
```html
<p tabindex='0'></p>
<p tabindex='1'></p>
```



