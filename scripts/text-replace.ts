// Name: Replace Text
// Description: Replace text in the selected text.
// Input: Selected text
// Output: Changed selected text
// Tags: text, replace text
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://uffelmann.me
// Shortcut: shift control R

import "@johnlindquist/kit";

let text = await getSelectedText();

let toReplace = await arg(
    { placeholder: "What to replace?", strict: false },
    (input) => {
        if (!input)
            return {
                name: `Replace ${input}`,
                preview: md(text.replaceAll("\n", "<br/>")),
                value: text,
            };
        return {
            name: `Replace ${input}`,
            preview: md(
                text.replaceAll("\n", "<br/>").replaceAll(input, `<ins>${input}</ins>`)
            ),
            value: input,
        };
    }
);

let replaceWith = await arg(
    {
        placeholder: "What is the new text?",
        strict: false,
    },
    (input) => {
        if (!input)
            return {
                name: `Replace ${input}`,
                preview: md(
                    text
                        .replaceAll("\n", "<br/>")
                        .replaceAll(toReplace, `<ins>${toReplace}</ins>`)
                ),
                value: text,
            };
        return {
            name: `Replace ${input}`,
            preview: md(
                `${text
                    .replaceAll("\n", "<br/>")
                    .replaceAll(toReplace, `<ins>${input}</ins>`)}`
            ),
            value: input,
        };
    }
);

let result = text.replaceAll(toReplace, replaceWith);

// Output
await setSelectedText(result);
