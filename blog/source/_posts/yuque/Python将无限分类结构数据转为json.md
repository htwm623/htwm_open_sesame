
---

title: Python将无限分类结构数据转为json

urlname: avt8nt

date: 2020-03-08 01:07:48 +0800

tags: [python,json]

categories: [后端开发]

---


<br />

- [原文链接](https://segmentfault.com/q/1010000008541784)



```python
source=[
    {"name":"my document","id":1 , "parentid": 0 },
    {"name":"photos","id":2 , "parentid": 1 },
    {"name":"Friend","id":3 , "parentid": 2 },
    {"name":"Wife","id":4 , "parentid": 2 },
    {"name":"Company","id":5 , "parentid": 2 },
    {"name":"Program Files","id":6 , "parentid": 1 },
    {"name":"intel","id":7 , "parentid": 6 },
    {"name":"java","id":8 , "parentid": 6 },
]
```


1. 递归
```python
def getChildren(id=0):
    res =[]
    for obj in source:
        if obj["parentid"] ==id:
            res.append({"id":obj["id"],"text":obj["name"],"children":getChildren(obj["id"])})
    return res
```

2. 哈希表



```python
tree_dict = {}
tree_data = []

for item in source:
    tree_dict[item["id"]] = item

for i in tree_dict:
    if tree_dict[i]["parentid"]:
        parentid = tree_dict[i]["parentid"]
        parent = tree_dict[parentid]
        parent.setdefault("children", []).append(tree_dict[i])

    else:
        tree_data.append(tree_dict[i])
```



