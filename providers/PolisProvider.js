const { ServiceProvider } = require('@adonisjs/fold')

class PolisProvider extends ServiceProvider {
  async register () {
    this.app.singleton('Adonis/Addons/Polis', function (app) {
      const Config = app.use('Adonis/Src/Config')
      const Polis = require('../src/Polis')
      return new Polis(Config)
    })
    this.app.bind('Adonis/Middleware/TenantDetector', function () {
      const TenantDetector = require('../src/Middleware/TenantDetector')
      return new TenantDetector()
    })
    this.app.bind('Adonis/Traits/TenantAware', function () {
      const TenantAware = require('../src/Models/Traits/TenantAware')
      return new TenantAware()
    })
    this.app.alias('Adonis/Traits/TenantAware', 'TenantAware')
  }
}

module.exports = PolisProvider