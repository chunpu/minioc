import Logger from './interfaces/logger'

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message)
  }
}

export default ConsoleLogger
