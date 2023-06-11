import IOCContainer from '../ioc'
import App from './app'
import Console from './console'
import Logger from './interfaces/logger'

// 控制反转，用容器管理依赖注入
const container = new IOCContainer()

// 依赖倒置，通过接口耦合，Console 是 Logger 的实现
container.register('logger', Console)
container.register('app', App)

const logger = container.resolve<Logger>('logger')
// 依赖注入，传参注入
const app = container.resolve<App>('app', { logger })

app.log('hello')
