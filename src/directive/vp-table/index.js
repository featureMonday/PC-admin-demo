import adaptive from "./adaptive";

const install = function(Vue) {
  Vue.directive("vp-height-adaptive-table", adaptive);
};

if (window.Vue) {
  window["vp-height-adaptive-table"] = adaptive;
  Vue.use(install); // eslint-disable-line
}

adaptive.install = install;
export default adaptive;
