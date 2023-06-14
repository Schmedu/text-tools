// Name: Replace Text
// Description: Replace text in the selected text.
// Video: z4B6cPqMPtw
// Input: Selected text
// Output: Changed selected text
// Tags: text, replace text
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://uffelmann.me
// Shortcut: shift control R

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
        `${input
            .replaceAll("\n", "<br>")
            .replaceAll(search, `<ins>${replacement}</ins>`)}`
    );
};

let [search, replacement] = await fields({
    fields: ["Search", "Replacement"],
    preview: buildPreview([]),
    onChange: async (input, state) => {
        let preview = buildPreview(state?.value);
        setPreview(preview);
    },
});

div(); // will be fixed soon, see https://github.com/johnlindquist/kit/issues/1275
let result = input.replaceAll(search, replacement);

// Output
await setSelectedText(result);
