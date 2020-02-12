const { ServiceProvider } = require('@adonisjs/fold')

class PolisProvider extends ServiceProvider {
  async register () {
    this.app.singleton('Adonis/Addons/Polis', (app) => {
      const Config = app.use('Adonis/Src/Config')
      const Polis = require('../src/Polis')
      return new Polis(Config)
    })
    this.app.bind('Adonis/Middleware/TenantDetector', () => {
      const TenantDetector = require('../src/Middleware/TenantDetector')
      return new TenantDetector()
    })
    this.app.bind('Adonis/Traits/TenantAware', () => {
      const TenantAware = require('../src/Traits/TenantAware')
      return new TenantAware()
    })

    this.app.alias('Adonis/Addons/Polis', 'Polis')
    this.app.alias('Adonis/Traits/TenantAware', 'TenantAware')
  }
}

module.exports = PolisProvider