import drag from "./drag";

const install = function(Vue) {
  Vue.directive("vp-drag-dialog", drag);
};

if (window.Vue) {
  window["vp-drag-dialog"] = drag;
  Vue.use(install); // eslint-disable-line
}

drag.install = install;
export default drag;
