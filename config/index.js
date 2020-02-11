'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Tenant Column
  |--------------------------------------------------------------------------
  |
  | The tenant column in your models. It must also be addded to your
  | migrations.
  |
  */
  tenantColumn: 'tenant',

  /*
  |--------------------------------------------------------------------------
  | Tenant Source
  |--------------------------------------------------------------------------
  |
  | The source of the tenant in every request.
  | Available Sources - header, url_query, url_param, subdomain
  |
  */
  tenantSource: 'subdomain',

  /*
  |--------------------------------------------------------------------------
  | Tenant Source Key
  |--------------------------------------------------------------------------
  |
  | The key to get tenant name from configured tenant source.
  | Such as request.params[tenantSourceKey] or request.get()[tenantSourceKey].
  |
  */
  tenantSourceKey: 'tenant',
}