'use strict'

const { ioc } = require('@adonisjs/fold')
const Polis = ioc.use('Polis')

class TenantAware {
  register (Model) {
    Model.addGlobalScope(function (builder) {
      builder.where(Polis.getTenantColumn(), Polis.getTenant())
    })

    console.log('register')

    Model.addHook('beforeSave', async (modelInstance) => {
      console.log('Saving model')
      modelInstance[Polis.getTenantColumn()] = Polis.getTenant()
    })
  }
}

module.exports = TenantAware
