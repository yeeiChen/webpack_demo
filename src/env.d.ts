/*
 * @Description:
 * @Author: yeeChen
 * @Date: 2023-06-19 14:43:37
 * @LastEditTime: 2023-06-19 14:55:11
 * @LastEditors: yeeChen
 */
declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
