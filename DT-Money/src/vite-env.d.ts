/// <reference types="vite/client" />
declare module '*.vue';

declare module "@heroicons/vue/*" {
  const content: any;
  export default content;
}

// declare module "@heroicons/vue/outline" {
//   export { default as AcademicCapIcon } from "@heroicons/vue/solid/esm/MagnifyingGlassIcon.js";
// }
  
// declare module "@heroicons/vue/solid" {
//   export { default as AcademicCapIcon } from "@heroicons/vue/solid/esm/MagnifyingGlassIcon.js";
// }