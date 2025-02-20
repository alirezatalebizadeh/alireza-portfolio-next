// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

const extendedConfig = compat.extends("next/core-web-vitals");

console.log("Extended Config:", extendedConfig); // بررسی مقدار خروجی

const eslintConfig = [...(extendedConfig || [])];

export default eslintConfig;

