onmessage = function () {
    let data = []

    for (let index = 0; index < 50000; index++) {
        let random = Math.random().toString().split('0')
        data = data.concat(random)
    }
    this.postMessage(data)
}