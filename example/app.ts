import Logger from './interfaces/logger'

class App {
  logger: Logger

  constructor({ logger }: { logger: Logger }) {
    this.logger = logger
  }

  log(message: string) {
    this.logger.log(message)
  }
}

export default App
