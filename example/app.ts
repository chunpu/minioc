import Logger from './interfaces/logger'
import Console from './console'

class App {
  logger: Logger

  constructor({ logger }: { logger: Logger }) {
    this.logger = logger
  }

  log(message: string) {
    this.logger.log(message)
  }
}

const app = new App({
  logger: new Console(),
})

app.log('hello')
