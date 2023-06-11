## minioc

Dead Simple IOC Container

## Usage

```ts
import IOCContainer from 'minioc'

const container = new IOCContainer()

container.register('myModule', Module)

const myModule = container.resolve<Module>('myModule')
```

## Example

See [example](./example/example.ts)
