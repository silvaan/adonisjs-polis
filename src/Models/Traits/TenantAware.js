'use strict'

const { ioc } = require('@adonisjs/fold')
const Polis = ioc.use('Polis')

class TenantAware {
  register (Model) {
    Model.addGlobalScope(function (builder) {
      builder.where(Polis.getTenantColumn(), Polis.getTenant())
    })

    Model.addHook('beforeSave', async (modelInstance) => {
      modelInstance[Polis.getTenantColumn()] = Polis.getTenant()
    })
  }
}

module.exports = TenantAware
