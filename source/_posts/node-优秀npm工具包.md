---
layout: title
title: node-优秀npm工具包
date: 2020-10-30 23:19:37
tags:
---

### concurrently

同时运行多个 node 命令

常见实例：

```js
  // package.json
  "scripts": {
    "dev": "concurrently \"tsc -w\" \"node ./dist/server/index.js\"",
  },
```
