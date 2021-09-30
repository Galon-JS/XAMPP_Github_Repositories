console.info('HELLOooo')

const myButton = document.querySelector('.btn')
myButton.addEventListener('click', () => {
    const worker = new Worker('time-intensive.js')
    worker.postMessage('Start')
    console.log('worker: ', worker)
    console.log('Hello from statment after time-intensive operation')
    worker.onmessage = function workerOnmessage(e) {
        console.log(e.data.length)
    }
})
