onmessage = function onMessage() {
  let data = []

  for (let index = 0; index < 12000; index += 1) {
    const random = Math.random().toString().split('0')
    data = data.concat(random)
  }

  this.postMessage(data)
}
