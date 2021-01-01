
---

title: 如何处理json文件结尾的逗号

urlname: vawzeq

date: 2020-10-13 00:44:03 +0800

tags: [python,json]

categories: [后端开发]

---

<a name="f6d01664"></a>
# python如何处理json文件结尾多余的逗号

<br />问题描述, json文件结尾是不允许使用逗号的<br />
正确格式如下:<br />

```json
{
    "key1": "value1",
    "key2": "value2"
}
```

<br />但如果使用json作为配置文件时,人为输入可能如下<br />

```json
{
    "key1": "value1",
    "key2": "value2",
}
```

<br />在使用上述格式的文件时, json.loads文件会报错<br />参考来源 [https://stackoverflow.com/questions/23705304/can-json-loads-ignore-trailing-commas](https://stackoverflow.com/questions/23705304/can-json-loads-ignore-trailing-commas)<br />

<a name="2eed9a76"></a>
## 方法一

<br />使用 jsoncomment 包进行解析<br />

```python
import json
from jsoncomment import JsonComment

with open(filename) as data_file:    
    parser = JsonComment(json)
    data = parser.load(data_file)
```

<br />缺陷 会从字符串中删除逗号 例如<br />

```python
import json
from jsoncomment import JsonComment
string = '{"key1": "{my special value,}"}'
parser = JsonComment()
json_boj = parser.loads(string)
print(json_boj)
# {'key1': '{my special value}'}
# 原本值中的字符串逗号也被删除了
```

<br />局限: 原本值中的字符串逗号也被删除了<br />

<a name="f3deb6e7"></a>
## 方法二

<br />先通过python 将字符串进行eval,同时 替换null, true false例如<br />

```python
import ast, json

def clean_json(str):
  str = str.replace('null', 'None').replace('true', 'True').replace('false', 'False')
  return json.dumps(ast.literal_eval(str))
```

<br />局限:<br />

1. 会破坏原本字符串中包含 null, true, false
2. 即算使用 ast.literal_eval 也需要考虑一些安全性的问题



<a name="54bbba80"></a>
## 结论


- json最好写对 ![](https://gw.alipayobjects.com/os/lib/twemoji/11.2.0/2/svg/1f602.svg#align=left&display=inline&height=18&margin=%5Bobject%20Object%5D&originHeight=150&originWidth=150&status=done&style=none&width=18), 如果作为需要手动添加内容的配置文件,最好还是改格式把

