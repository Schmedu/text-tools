// Name: Get Text Length
// Description: Return the length of the selected text.
// Video: xAYnKCIH0F0
// Input: Selected text
// Output: Notification with the word count
// Tags: text, word count
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://schmedu.com

import "@johnlindquist/kit";

let input = await getSelectedText();

let result = input.length;

notify({
    title: "Text Length",
    message: result.toString(),
});
