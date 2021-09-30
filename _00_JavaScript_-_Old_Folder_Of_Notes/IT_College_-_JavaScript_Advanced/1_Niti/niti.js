console.info('HELLO')

let myButton = document.querySelector('.btn')
myButton.addEventListener('click', function () {
    const worker = new Worker('time-intensive')

    worker.postMessage('Start')
    console.log('worker: ', worker);

    console.log('Hello from statment after time-intensive operation')

    worker.onmessage = function (e) {        
        console.log(e.data.length)
    }

})
