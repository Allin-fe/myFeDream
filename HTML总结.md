# HTML学习总结

## 1 标签

1.  使用小写
2.  存在空标签，需要闭合

## 2 属性

1.  每个标签都有自己的属性
2.  始终为每个标签添加`""`

## 3 标题

通过`h1-h6`定义

## 4 样式

### 4.1 内嵌样式

在标签内定义
`<p style="font-size:20px;">`

### 4.2 内联样式

需在`head`里面添加`type`属性

### 4.3 外部样式

这是最佳选择，方便管理 CSS 文件

## 5 链接

### 5.1 定义：

我们通过使用`<a>`标签在`HTML`中创建链接。

### 5.2 用法

有两种使用 `<a>`标签的方式：
1.通过使用 `href` 属性 - 创建指向另一个文档的链接
2.通过使用 `name`属性 - 创建文档内的书签
`<a href="#">Link text</a>`

## 6 图片

`![](#)`

## 7 列表

### 7.1 无序列表

    <span class="hljs-tag"><<span class="hljs-title">ul</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">li</span>></span>Coffee<span class="hljs-tag"></<span class="hljs-title">li</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">li</span>></span>Milk<span class="hljs-tag"></<span class="hljs-title">li</span>></span>
    <span class="hljs-tag"></<span class="hljs-title">ul</span>></span>
    `</pre>

    ### 7.2 有序列表

    <pre>`<span class="hljs-tag"><<span class="hljs-title">ol</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">li</span>></span>Coffee<span class="hljs-tag"></<span class="hljs-title">li</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">li</span>></span>Milk<span class="hljs-tag"></<span class="hljs-title">li</span>></span>
    <span class="hljs-tag"></<span class="hljs-title">ol</span>></span>
    `</pre>

    ### 7.3 自定义列表

    <pre>`"><span class="hljs-tag"><<span class="hljs-title">dt</span>></span>Coffee<span class="hljs-tag"></<span class="hljs-title">dt</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">dd</span>></span>Black hot drink<span class="hljs-tag"></<span class="hljs-title">dd</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">dt</span>></span>Milk<span class="hljs-tag"></<span class="hljs-title">dt</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">dd</span>></span>White cold drink<span class="hljs-tag"></<span class="hljs-title">dd</span>></span>
    <span class="hljs-tag"></<span class="hljs-title">dl</span>></span>
    `</pre>

    注意：列表可以嵌套。

    ## 8 表格

1.  使用`<table>`标签定义
2.  `<tr>`表示行，`<td>`表示列
3.  表格的一些属性：`<caption>`定义表格标题，`<thead>`定义表格页眉，`<tbody>`定义表格主体，`<tfoot>`定义表格页脚，`<colgroup>`用于对表格中的列进行组合，以便对其进行格式化<pre>`<span class="hljs-tag"><<span class="hljs-title">table</span> <span class="hljs-attribute">border</span>=<span class="hljs-value">"1"</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">tr</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">td</span>></span>row 1, cell 1<span class="hljs-tag"></<span class="hljs-title">td</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">td</span>></span>row 1, cell 2<span class="hljs-tag"></<span class="hljs-title">td</span>></span>
    <span class="hljs-tag"></<span class="hljs-title">tr</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">tr</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">td</span>></span>row 2, cell 1<span class="hljs-tag"></<span class="hljs-title">td</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">td</span>></span>row 2, cell 2<span class="hljs-tag"></<span class="hljs-title">td</span>></span>
    <span class="hljs-tag"></<span class="hljs-title">tr</span>></span>
    <span class="hljs-tag"></<span class="hljs-title">table</span>></span>
    `</pre>

    ## 9 框架

1.  定义：`<frameset>`
2.  定义了框架后，文档不能包含`<body>`标签<pre>`<span class="hljs-tag"><<span class="hljs-title">frameset</span> <span class="hljs-attribute">cols</span>=<span class="hljs-value">"25%,75%"</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">frame</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"frame_a.htm"</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">frame</span> <span class="hljs-attribute">src</span>=<span class="hljs-value">"frame_b.htm"</span>></span>
    <span class="hljs-tag"></<span class="hljs-title">frameset</span>></span>
    `</pre>注意：浏览器难以抓取框架的内容

    ## 10 表单

    ### 10.1 定义：`<form>`

    ### 10.2 属性

*   name: 表单提交时的名称
*   action: 提交到的地址
*   method: 提交方式，get和post

    注意：post和get方式的区别？ 

1.  数据提交方式不同，get把提交的数据url可以看到，post看不到2.  get一般用于提交少量数据，post用于提交大量数据3.  get最多提交1k数据，浏览器的限制。post理论上无限制，受服务器限制4.  get提交的数据在浏览器历史记录中，安全性不好

    ### 10.3 type类型

1.  `type="text"`: 用于输入文本。placeholder属性（可选）展示的是输入框里的提示，maxlength（可选）限制最大输入长度；
    <!-- 要加上name -->
    <pre>`<input <span class="hljs-variable">name=</span><span class="hljs-string">"username"</span> <span class="hljs-variable">type=</span><span class="hljs-string">"text"</span> <span class="hljs-variable">placeholder=</span><span class="hljs-string">"用户名"</span> <span class="hljs-variable">maxlength=</span><span class="hljs-number">10</span> />
    `</pre>
2.  `type="password"`: 用于输入密码，输入的内容显示为星号。
    <pre>`<input <span class="hljs-variable">name=</span><span class="hljs-string">"password"</span> <span class="hljs-variable">type=</span><span class="hljs-string">"password"</span> <span class="hljs-variable">placeholder=</span><span class="hljs-string">"密码"</span> />
    `</pre>
3.  `type="radio"`: 单选圆圈按钮。注意：name要相同才能实现单选，value要有值
    <pre>`<input <span class="hljs-variable">type=</span><span class="hljs-string">"radio"</span> <span class="hljs-variable">name=</span><span class="hljs-string">"sex"</span> <span class="hljs-variable">value=</span><span class="hljs-string">"male"</span> /> 男
    <input <span class="hljs-variable">type=</span><span class="hljs-string">"radio"</span> <span class="hljs-variable">name=</span><span class="hljs-string">"sex"</span> <span class="hljs-variable">value=</span><span class="hljs-string">"female"</span> /> 女
    `</pre>
4.  `type="checkbox"`: 复选框。加checked属性会默认选上。提交时，如果选中（如bike），则bike=on
    <pre>`<input <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"checkbox"</span> name=<span class="hljs-string">"bike"</span>  checked/>自行车
    <input <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"checkbox"</span> name=<span class="hljs-string">"car"</span> />汽车
    `</pre>

    5.`type="textarea"`: 文本域，用于输入多行文本

    <pre>`<span class="hljs-tag"><<span class="hljs-title">textarea</span> <span class="hljs-attribute">name</span>=<span class="hljs-value">"maneywords"</span> <span class="hljs-attribute">maxlength</span>=<span class="hljs-value">10</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"ddd"</span>></span><span class="hljs-tag"></<span class="hljs-title">textarea</span>></span>
    `</pre>

1.  `type="hidden"`: 隐藏域，用户看不到，用于暂存数据。或者安全性校验
    <pre>`<input <span class="hljs-variable">name=</span><span class="hljs-string">"url_delete"</span> <span class="hljs-variable">type=</span><span class="hljs-string">"hidden"</span> <span class="hljs-variable">value=</span><span class="hljs-string">"/delete.php"</span> />
    <input <span class="hljs-variable">name=</span><span class="hljs-string">"csrf_token"</span> <span class="hljs-variable">type=</span><span class="hljs-string">"hidden"</span> <span class="hljs-variable">value=</span><span class="hljs-string">"a23dafd23444"</span> />
    `</pre>
2.  select
    选择列表，selected属性会默认选中该项目
    <pre>`<span class="hljs-tag"><<span class="hljs-title">form</span> <span class="hljs-attribute">action</span>=<span class="hljs-value">"#"</span>></span>     <span class="hljs-tag"><<span class="hljs-title">select</span> <span class="hljs-attribute">name</span>=<span class="hljs-value">"mycar"</span>></span>
       <span class="hljs-tag"><<span class="hljs-title">option</span> <span class="hljs-attribute">value</span> =<span class="hljs-value">"volvo"</span>></span>Volvo<span class="hljs-tag"></<span class="hljs-title">option</span>></span>
       <span class="hljs-tag"><<span class="hljs-title">option</span> <span class="hljs-attribute">value</span> =<span class="hljs-value">"saab"</span>></span>Saab<span class="hljs-tag"></<span class="hljs-title">option</span>></span>
       <span class="hljs-tag"><<span class="hljs-title">option</span> <span class="hljs-attribute">value</span>=<span class="hljs-value">"opel"</span>></span>Opel<span class="hljs-tag"></<span class="hljs-title">option</span>></span>
       <span class="hljs-tag"><<span class="hljs-title">option</span> <span class="hljs-attribute">value</span>=<span class="hljs-value">"audi"</span> <span class="hljs-attribute">selected</span>></span>Audi<span class="hljs-tag"></<span class="hljs-title">option</span>></span>
     <span class="hljs-tag"></<span class="hljs-title">select</span>></span>
     <span class="hljs-tag"><<span class="hljs-title">button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"submit"</span>></span>提交<span class="hljs-tag"></<span class="hljs-title">button</span>></span>
    <span class="hljs-tag"></<span class="hljs-title">form</span>></span>