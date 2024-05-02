import pluginJs from "@eslint/js";
import sort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { "simple-import-sort": sort },
    rules: {
      //#region  //*=========== Import Sort ===========
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            // ext library & side effect imports
            ["^@?\\w", "^\\u0000"],
            // {s}css files
            ["^.+\\.s?css$"],
            // Lib and hooks
            ["^@/lib", "^@/hooks"],
            // static data
            ["^@/data"],
            // components
            ["^@/components", "^@/container"],
            // zustand store
            ["^@/store"],
            // Other imports
            ["^@/"],
            // relative paths up until 3 level
            [
              "^\\./?$",
              "^\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\.\\.(?!/?$)",
              "^\\.\\./\\.\\./?$",
              "^\\.\\./\\.\\.(?!/?$)",
              "^\\.\\./\\.\\./\\.\\./?$",
              "^\\.\\./\\.\\./\\.\\.(?!/?$)",
            ],
            ["^@/types"],
            // other that didnt fit in
            ["^"],
          ],
        },
      ],
      //#endregion  //*======== Import Sort ===========
    },
  },
  { ignores: [".next/**/*"] },
];
