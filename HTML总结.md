#HTML学习总结
[TOC]
##1 标签
1.使用小写
2.存在空标签，需要闭合
##2 属性
1.每个标签都有自己的属性
2.始终为每个标签添加`""`
##3 标题
通过`h1-h6`定义
##4 样式
###4.1 内嵌样式
在标签内定义
```<p style="font-size:20px;">```
###4.2 内联样式
需在`head`里面添加`type`属性
```
<head>
<style type="text/css">
body {background-color: red}
p {margin-left: 20px}
</style>
</head>```
###4.3 外部样式
这是最佳选择，方便管理 CSS 文件
```
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
##5 链接
###5.1 定义：
我们通过使用` <a> `标签在` HTML `中创建链接。
###5.2 用法
有两种使用 ` <a> `标签的方式：
1.通过使用 `href` 属性 - 创建指向另一个文档的链接
2.通过使用 `name `属性 - 创建文档内的书签
```<a href="url">Link text</a>```
##6 图片
```<img src="#" alt=""/>```
##7 列表
###7.1 无序列表
```
<ul>
<li>Coffee</li>
<li>Milk</li>
</ul>```
###7.2 有序列表
```
<ol>
<li>Coffee</li>
<li>Milk</li>
</ol>
```
###7.3 自定义列表
```<dl>
<dt>Coffee</dt>
<dd>Black hot drink</dd>
<dt>Milk</dt>
<dd>White cold drink</dd>
</dl>
```
注意：列表可以嵌套。
##8 表格
1.使用`<table>`标签定义
2.`<tr>`表示行，`<td>`表示列
3.表格的一些属性：`<caption>`定义表格标题，`<thead>`定义表格页眉，`<tbody>`定义表格主体，`<tfoot>`定义表格页脚，`<colgroup>`用于对表格中的列进行组合，以便对其进行格式化
```
<table border="1">
<tr>
<td>row 1, cell 1</td>
<td>row 1, cell 2</td>
</tr>
<tr>
<td>row 2, cell 1</td>
<td>row 2, cell 2</td>
</tr>
</table>
```
##9 框架
1.定义：`<frameset>`
2.定义了框架后，文档不能包含`<body>`标签
```
<frameset cols="25%,75%">
   <frame src="frame_a.htm">
   <frame src="frame_b.htm">
</frameset>
```
注意：浏览器难以抓取框架的内容
##10 表单
###10.1 定义：`<form>`
###10.2 属性
- name: 表单提交时的名称
- action: 提交到的地址
- method: 提交方式，get和post

注意：post和get方式的区别？ 
1. 数据提交方式不同，get把提交的数据url可以看到，post看不到 
2. get一般用于提交少量数据，post用于提交大量数据 
3. get最多提交1k数据，浏览器的限制。post理论上无限制，受服务器限制 
4. get提交的数据在浏览器历史记录中，安全性不好

###10.3 type类型
1.`type="text"`: 用于输入文本。placeholder属性（可选）展示的是输入框里的提示，maxlength（可选）限制最大输入长度；
<!-- 要加上name -->
```
<input name="username" type="text" placeholder="用户名" maxlength=10 />```
2.`type="password"`: 用于输入密码，输入的内容显示为星号。
```
<input name="password" type="password" placeholder="密码" />```
3.`type="radio"`: 单选圆圈按钮。注意：name要相同才能实现单选，value要有值
```
<input type="radio" name="sex" value="male" /> 男
<input type="radio" name="sex" value="female" /> 女```
4.`type="checkbox"`: 复选框。加checked属性会默认选上。提交时，如果选中（如bike），则bike=on
```
<input type="checkbox" name="bike"  checked/>自行车
<input type="checkbox" name="car" />汽车```
5.`type="textarea"`: 文本域，用于输入多行文本
```
<textarea name="maneywords" maxlength=10 placeholder="ddd"></textarea>```
6.`type="hidden"`: 隐藏域，用户看不到，用于暂存数据。或者安全性校验
```
<input name="url_delete" type="hidden" value="/delete.php" />
<input name="csrf_token" type="hidden" value="a23dafd23444" />```
7.select
选择列表，selected属性会默认选中该项目
```
<form action="#"> 
    <select name="mycar">
      <option value ="volvo">Volvo</option>
      <option value ="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi" selected>Audi</option>
    </select>
    <button type="submit">提交</button>
</form>```