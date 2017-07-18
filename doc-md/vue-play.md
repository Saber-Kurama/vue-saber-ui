##  引入

###  安装

`yarn global add getplay`


```
# semver以x.y.z为格式，x为major，y为minor，z为patch

# npm version [major|minor|patch|semver] -m "%s message"

# npm version会生成计算好的semver，生成相应的commit和tag，
# 我们需要运行git push和npm publish同步到git和npm

# 在不同的branch上追加version时，会出现version非线性的状况，
# 可以直接输入计算好的semver，
# 当然，实战策略是在master branch得到更新后，尽快进行版本升级
```
