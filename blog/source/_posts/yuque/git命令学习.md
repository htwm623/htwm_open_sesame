
---

title: git命令学习

urlname: ylxuuw

date: 2020-12-09 22:49:53 +0800

tags: [git]

categories: [其他]

---



```bash
# 提交 
git commit

# 创建分支
git branch <分支名称>

# 切换分支
git checkout <分支名称>

# 合并分支 合并指定分支到当前分支
git merge <指定分支>

# 线性分支 (还需学习)
git rebase master

# 分离Head (还需学习)

# 相对引用 切换到上一次提交
git checkou HEAD^

# 相对引用 切换到上n次的提交
git checkout C1 HEAD指向C1
git branch -f bugFix HEAD^ 分支bugFix指向HEAD的上一级
git branch -f master C6 分支master直接指向C6

# 撤销变更
git reset HEAD^
git checkout pushed
git revert HEAD

# cherry-pick (还需要学习)
git cherry-pick c3 c4 c7

# 使用标签
git Tag
```



