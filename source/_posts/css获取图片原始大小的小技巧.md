---
title: css获取图片原始大小的小技巧
---

# css获取图片原始大小的小技巧


```js
// Get on screen image
var screenImage = document.getElementById('#img')

// Create new offscreen image to test
var theImage = new Image();
theImage.src = screenImage.src;

// Get accurate measurements from that.
var imageWidth = theImage.width;
var imageHeight = theImage.height;
console.log('imageWidth: ',imageWidth)
console.log('imageHeight: ',imageHeight)
```