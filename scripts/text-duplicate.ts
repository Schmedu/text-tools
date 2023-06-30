// Name: Duplicate Text
// Description: Duplicate the selected text by replacing a word with multiple variations, divided by a comma separator.
// Video:
// Input: Selected text
// Output: Changed selected text
// Tags: text, replace text
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://uffelmann.me

import "@johnlindquist/kit";

let input = await getSelectedText();

let buildPreview = ([search, replacement]) => {
    if (!search) return md(input);
    if (!replacement)
        return md(
            `${input
                .replaceAll("\n", "<br>")
                .replaceAll(search, `<ins>${search}</ins>`)}`
        );
    return md(
        `${input}
${replacement
            .split(",")
            .map((item) => {
                return input
                    .replaceAll("\n", "<br>")
                    .replaceAll(search, `<ins>${item}</ins>`);
            })
            .join("<br>")}`
    );
};

let [search, replacement] = await fields({
    fields: ["Search", "Replacement"],
    preview: buildPreview(["", ""]),
    onChange: async (input, state) => {
        let preview = buildPreview(state?.value);
        setPreview(preview);
    },
});

let result = `${input}
${replacement
        .split(",")
        .map((item) => {
            return input.replaceAll(search, `${item}`);
        })
        .join("\n")}`;

// Output
await setSelectedText(result);
