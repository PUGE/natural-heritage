function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})

// 微信加载完毕自动播放音乐
document.addEventListener("WeixinJSBridgeReady", function () {
  // @|bg.mp3|
  var music = new Audio("./static/resource/bg.mp3")
  music.loop = true
  music.play()
}, false)