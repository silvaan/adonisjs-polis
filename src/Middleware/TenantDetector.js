'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Polis = use('Polis')

class TenantDetector {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next, properties) {
    const tenantSource = properties[0] || Polis.getTenantSource()
    const tenantKey = Polis.getTenantSourceKey()
    let tenant = null

    switch (tenantSource) {
      case 'header':
        tenant = request.header(tenantKey)
        break;
      case 'url_query':
        tenant = request.get()[tenantKey]
        break;
      case 'url_param':
        tenant = request.params[tenantKey]
        break;
      case 'subdomain':
        tenant = request.subdomains()[0]
        break;
      default:
        break;
    }

    request.tenant = tenant
    Polis.setTenant(tenant)

    await next()
  }
}

module.exports = TenantDetector
