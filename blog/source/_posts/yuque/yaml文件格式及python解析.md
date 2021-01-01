
---

title: yaml文件格式及python解析

urlname: pz6s2n

date: 2020-10-13 00:43:58 +0800

tags: [yaml,python]

categories: [后端开发]

---

<a name="883b9673"></a>
## 用途及基本规则


- 常用于配置文件
- 大小写敏感
- 使用缩进表示嵌套
- 使用空格表示缩进,不允许使用   键作为缩进
- 缩进的空格数目没有实际意义,左侧对其即为同级
<a name="9b6ac63f"></a>
## Python解析


- 涉及到的包 pip install PyYAML
- 示例代码


<br />yaml文件<br />

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

<br />python 解析示例<br />

```python
import yaml

if __name__ == '__main__':
    with open('test.yaml','r',encoding='utf-8')as fr:
        data = yaml.load(fr, Loader=yaml.Loader)
    print(data)
# {'age': 37, 'spouse': {'name': 'Jane Smith', 'age': 25}, 'children': [{'name': 'Jimmy Smith', 'age': 15}, {'name1': 'Jenny Smith', 'age1': 12}]}
```


<a name="c5350820"></a>
## yaml语法


- 参考 [YAML语言教程 阮一峰](http://www.ruanyifeng.com/blog/2016/07/yaml.html)

