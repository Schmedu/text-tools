// Name: Text Case Converter
// Description: Transform the selected text to a different case. You can choose from CamelCase, Capital Case, CONSTANT_CASE, dot.case, Header-Case, param-case, PascalCase, path/case, Sentence case, snake_case, Swap Case, Title Case, lower case, UPPER CASE, Upper Case First, and Sponge Case.
// Input: Selected text
// Output: Changed selected text
// Tags: text, case, convert, transform
// Video: vTwgfNHP6b0
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://uffelmann.me

import "@johnlindquist/kit";

import * as changeCase from "change-case";
import { swapCase } from "swap-case";
import { titleCase } from "title-case";
import { lowerCase } from "lower-case";
import { upperCase } from "upper-case";
import { upperCaseFirst } from "upper-case-first";
import { spongeCase } from "sponge-case";

let input = await getSelectedText();

let stringCase = await arg("What case?", [
    {
        name: "camelCase",
        preview: md(changeCase.camelCase(input)),
        value: changeCase.camelCase(input),
    },
    {
        name: "Capital Case",
        preview: md(changeCase.capitalCase(input)),
        value: changeCase.capitalCase(input),
    },
    {
        name: "CONSTANT_CASE",
        preview: md(changeCase.constantCase(input)),
        value: changeCase.constantCase(input),
    },
    {
        name: "dot.case",
        preview: md(changeCase.dotCase(input)),
        value: changeCase.dotCase(input),
    },
    {
        name: "Header-Case",
        preview: md(changeCase.headerCase(input)),
        value: changeCase.headerCase(input),
    },
    {
        name: "no case",
        preview: md(changeCase.noCase(input)),
        value: changeCase.noCase(input),
    },
    {
        name: "param-case",
        preview: md(changeCase.paramCase(input)),
        value: changeCase.paramCase(input),
    },
    {
        name: "PascalCase",
        preview: md(changeCase.pascalCase(input)),
        value: changeCase.pascalCase(input),
    },
    {
        name: "path/case",
        preview: md(changeCase.pathCase(input)),
        value: changeCase.pathCase(input),
    },
    {
        name: "Sentence case",
        preview: md(changeCase.sentenceCase(input)),
        value: changeCase.sentenceCase(input),
    },
    {
        name: "snake_case",
        preview: md(changeCase.snakeCase(input)),
        value: changeCase.snakeCase(input),
    },
    {
        name: "sWAP cASE",
        preview: md(swapCase(input)),
        value: swapCase(input),
    },
    {
        name: "Title Case",
        preview: md(titleCase(input)),
        value: titleCase(input),
    },
    {
        name: "lower case",
        preview: md(lowerCase(input)),
        value: lowerCase(input),
    },
    {
        name: "UPPER CASE",
        preview: md(upperCase(input)),
        value: upperCase(input),
    },
    {
        name: "Upper case first",
        preview: md(upperCaseFirst(input)),
        value: upperCaseFirst(input),
    },
    {
        name: "sPoNge CaSe",
        preview: md(spongeCase(input)),
        value: spongeCase(input),
    },
]);

setSelectedText(stringCase);
