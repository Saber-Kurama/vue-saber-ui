import Button from '../packages/button';
const components = {
    Button
}
const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
export default {
  config,
  install
}
export {
  config,
  install
}
