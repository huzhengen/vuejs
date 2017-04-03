来源：http://blog.csdn.net/FungLeo/article/details/51649074

作者：https://github.com/fengcms/vue-cNodeJsOrgTest

接口：https://cnodejs.org/api

vue，jQuery，Bootstrap，laypage.js（分页）

未解决问题：

原作者写的：
```
<span class="badge" v-text="info.create_at | time"></span>
```

我写的：
```
<span class="badge">{{info.create_at | time}}</span>
```

我用原作者写的会出错，没百度到解决方法。
