---
title: yaml文件格式及python解析
date: 2019-10-26 21:52:22
tags:
- yaml
- python
categories:
- IT技术
---

# yaml文件格式及python解析

## 用途及基本规则

- 常用于配置文件
- 大小写敏感
- 使用缩进表示嵌套
- 使用空格表示缩进,不允许使用  <kbd>Tab</kbd> 键作为缩进
- 缩进的空格数目没有实际意义,左侧对其即为同级



<!--more-->



## Python解析

- 涉及到的包 pip install PyYAML
- 示例代码

yaml文件

```yaml
# test.yaml
age: 37
spouse:
  name: Jane Smith
  age: 25
children:
  - name: Jimmy Smith
    age: 15
  - name1: Jenny Smith
    age1: 12

```

python 解析示例

```python
import yaml

if __name__ == '__main__':
    with open('test.yaml','r',encoding='utf-8')as fr:
        data = yaml.load(fr, Loader=yaml.Loader)
    print(data)
# {'age': 37, 'spouse': {'name': 'Jane Smith', 'age': 25}, 'children': [{'name': 'Jimmy Smith', 'age': 15}, {'name1': 'Jenny Smith', 'age1': 12}]}    
```





## yaml语法

- 参考 [YAML语言教程 阮一峰](<http://www.ruanyifeng.com/blog/2016/07/yaml.html>)

