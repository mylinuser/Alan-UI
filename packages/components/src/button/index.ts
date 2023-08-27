import Button from "./button.vue";
import { withInstall } from "@hz-ui/utils";

const MyButton = withInstall(Button);

export const _ButtonComponent = MyButton;

export default MyButton;

export * from './button.vue'
export * from './type'
