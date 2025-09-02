import {
    globalIgnores,
} from "eslint/config";

import tselint from "typescript-eslint";
import js from "@eslint/js";

export default tselint.config([
    js.configs.recommended,
    tselint.configs.strict,
    {
        languageOptions: {
            parser: tselint.parser,
            "ecmaVersion": 2021,
            "sourceType": "module",
            parserOptions: {},
        },

        plugins: {
            "@typescript-eslint": tselint.plugin,
        },

        "rules": {
            "@typescript-eslint/no-explicit-any": "off",
        },
    }, globalIgnores(["**/dist/", "**/lib/", "**/node_modules/"])]);
