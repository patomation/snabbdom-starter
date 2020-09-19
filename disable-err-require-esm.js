// https://github.com/standard-things/esm/issues/855
const m = require('module')
const fs = require('fs')
m.Module._extensions['.js'] = function (module, filename) {
  module._compile(fs.readFileSync(filename, 'utf8'), filename)
}
