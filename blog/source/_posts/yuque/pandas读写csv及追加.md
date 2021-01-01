
---

title: pandas读写csv及追加

urlname: yfq9wx

date: 2020-03-12 00:28:23 +0800

tags: [pandas,csv]

categories: [后端开发]

---



<a name="jBSla"></a>
## pandas写入csv


```python
result = pd.DataFrame(columns=['key1', 'key2', 'key3', 'key4'])
for i in range(10):
    result = result.append({'key1': 1, 'key2': 2, 'key3': 3, 'key4': 4},ignore_index=True)
result.to_csv('test.csv', sep=',', index=False,mode='w')
```

<br />

- 追加写入



```python
result.to_csv('test.csv', sep=',', index=False,mode='a')
```


- 追加写入 时表头 也会追加
<a name="6OXQv"></a>
## pandas读取csv

- 遇到了再说




