---
layout: title
title: async函数的return问题
date: 2020-10-31 00:58:55
tags:
---

async函数能正常返回，并且不执行下面的代码
```js
let main = async () => {
  console.log(1)
  return "res"
  console.log(2)
}

main().then((value) => {
  console.log(value)
})

// print result
// 1
// res

```

返回的值作为promise的resolve值，可以在main().then()里的value获取