import type { App } from "vue";

import { MyButton } from "./button";
export * from './button'

const components: Record<string, any> = {
  MyButton
}

export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    if (component.install) {
      app.use(component);
    }
  });
  return app;
};

export default {
  install,
};