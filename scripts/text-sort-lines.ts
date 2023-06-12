// Name: Text Sort Lines
// Description: Sort Text Lines
// Input: Selected Text
// Output: Set selected text
// Tags: text, sort lines
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://uffelmann.me

import "@johnlindquist/kit";

const input = await getSelectedText();

const splitInput = input
    .split("\n") // Split the string by new lines
    .filter((line) => line.trim() !== ""); // Remove any empty lines

let result = await arg("Which order?", [
    {
        name: "A -> Z",
        preview: md(splitInput.sort().join("<br>")),
        value: splitInput.sort().join("\n"),
    },
    {
        name: "Z -> A",
        preview: md(splitInput.sort().reverse().join("<br>")),
        value: splitInput.sort().reverse().join("\n"),
    },
    {
        name: "Shortest -> Longest",
        preview: md(splitInput.sort((a, b) => a.length - b.length).join("<br>")),
        value: splitInput.sort((a, b) => a.length - b.length).join("\n"),
    },
    {
        name: "Longest -> Shortest",
        preview: md(
            splitInput
                .sort((a, b) => a.length - b.length)
                .reverse()
                .join("<br>")
        ),
        value: splitInput
            .sort((a, b) => a.length - b.length)
            .reverse()
            .join("\n"),
    },
]);

await setSelectedText(result);
