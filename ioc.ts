class IOCContainer {
  private dependencies: Map<string, any> = new Map()

  register<T>(name: string, dependency: T) {
    this.dependencies.set(name, dependency)
  }

  // may name resolve or get
  resolve<T>(name: string, ...args: any[]): T {
    let dependency = this.dependencies.get(name)
    if (typeof dependency === 'function') {
      dependency = new dependency(...args)
      this.dependencies.set(name, dependency)
    }
    return dependency
  }
}

export default IOCContainer
