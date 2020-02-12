## Setup
Register Polis provider inside `start/app.js` file:
```
const providers = [
  ...
  '@jrmiranda/adonisjs-polis/providers/PolisProvider'
  ...
]
```
Set up the middleware in `start/kernel.js` file:
```
const namedMiddleware = {
  ...
  tenant: 'Adonis/Middleware/TenantDetector'
  ...
}
```

## Usage
Add Polis trait to your multi tenant models:
```
const Model = use('Model')

class User extends Model {
  static boot () {
    super.boot()
    this.addTrait('@provider:TenantAware')
  }
}
```
And use Polis middleware in the related routes:
```
Route.group(() => {
  Route.post('/login', 'SessionController.create')
}).middleware(['tenant'])
```
You can override the default tenant source in `config/polis.js` file for certain routes by specifying the source of tenant as property of the middleware(header, url_query, url_param, subdomain). For example: `middleware(['tenant:subdomain'])`.