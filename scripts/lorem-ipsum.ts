// Name: Lorem Ipsum Text Generator
// Description: Generate Lorem Ipsum text. You can choose between paragraphs, sentences and words, the number of units and the format (plain text / html).
// Input: None
// Output: Notification with the generated text
// Tags: create text, lorem ipsum
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://uffelmann.me

import "@johnlindquist/kit";
import { loremIpsum } from "lorem-ipsum";
import { LoremUnit } from "lorem-ipsum/types/src/constants/units";
import { LoremFormat } from "lorem-ipsum/types/src/constants/formats";

let units: LoremUnit = await arg("Which Unit", [
    "paragraphs",
    "sentences",
    "words",
]);
let count = await arg(
    {
        placeholder: "How many units? (Currently: 1)",
        defaultValue: "1",
        strict: false,
        validate: (input) => {
            try {
                parseInt(input);
            } catch {
                return false;
            }
            return true;
        },
    },
    (input) => {
        if (input === "")
            return {
                name: `How many units?`,
                preview: loremIpsum({
                    count: 1,
                    units: units,
                    format: "html",
                }),
                value: 1,
            };
        return {
            name: input,
            preview: loremIpsum({
                count: parseInt(input),
                units: units,
                format: "html",
            }),
            value: input,
        };
    }
);

let format: LoremFormat = await arg("Which Format", ["plain", "html"]);

const lipsum = loremIpsum({
    count: parseInt(count),
    units: units,
    format: format,
});

await setSelectedText(lipsum);
