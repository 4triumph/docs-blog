# Web APIs

Web APIs 分为 DOM（文档对象类型）和 BOM（浏览器对象类型）

```mermaid
graph LR
    classDef startend fill:#F5EBFF,stroke:#BE8FED,stroke-width:2px;
    classDef process fill:#E5F6FF,stroke:#73A6FF,stroke-width:2px;

    A([Web APIs]):::startend --> B(DOM):::process --> D(操作网页内容)
    B --> E(浏览器根据html标签生成的js对象)
    A --> C(BOM):::process
```

## DOM

DOM 是浏览器根据 html 标签生成的 js 对象

```html
<div>123</div>
<script>
    const div = document.querySelector('div')
    console.log(div) // 123   dom对象
  console.dir()可以查看对象的所有属性和方法
</script>
```

### 获取 dom 元素

```js
document.querySelector();
document.querySelectorAll();
// 根据id获取一个元素
document.getElementById("nav");
// 根据标签名获取一类元素 获取页面所有div
document.getElementsByTagName("div");
// 根据类名获取元素 获取页面所有类名为w的元素
document.getElementsByClassName("w");
```

### 修改 dom 元素

#### innerText

纯文本，会忽略标签不解析

#### innerHTML

html 标签，会解析标签

### 控制样式属性

#### 修改样式属性

通过元素节点获得的 `style` 属性本身的数据类型也是对象，如 `box.style.color`、`box.style.width` 分别用来获取元素节点 CSS 样式的 `color` 和 `width` 的值。

任何标签都有 `style` 属性，通过 `style` 属性可以动态更改网页标签的样式，如要遇到 `css` 属性中包含字符 `-` 时，要将 `-` 去掉并将其后面的字母改成大写，如 `background-color` 要写成 `box.style.backgroundColor`

#### 修改样式类名

> 1.由于 class 是关键字, 所以使用 className 去代替
>
> 2.className 是使用新值换旧值, 如果需要添加一个类,需要保留之前的类名
>
> 3.  通过 classList 操作类控制 CSS 样式，为了解决 className 容易覆盖以前的类名，可以通过 classList 方式追加和删除类名

```html
<style>
  .pink {
    color: pink;
  }
  .box {
    width: 200px;
    height: 200px;
    background-color: skyblue;
  }
</style>
<div class="box">随便一些文本内容</div>
<script>
  // 获取 DOM 节点
  const box = document.querySelector(".intro");
  box.className = "pink";
  // 如果有两个类名
  box.className = "pink box";
  // 想要添加一个类名, 保留之前的类名
  box.className += " box";

  // 通过 classList 操作类控制CSS样式,类名不加点，直接写类名字符串
  // 追加类名
  box.classList.add("pink");
  // 删除类名
  box.classList.remove("box");
  // 切换类名，如果有就删除，没有就添加
  box.classList.toggle("box");
</script>
```
