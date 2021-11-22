const EventEmitter = require('events')

class Logger extends EventEmmiter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const loger = new Logger()

Logger.on('message', data => {
    consolge.log(data)
})

Logger.log('First')
Logger.log('Second')
Logger.log('Third')


