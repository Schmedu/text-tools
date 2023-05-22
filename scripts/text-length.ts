// Name: Get Text Length ⌨
// Description: Return the length of the selected text.
// Input: Selected text
// Output: Notification with the word count
// Tags: text, word count
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://uffelmann.me

import "@johnlindquist/kit";

let text = await getSelectedText();

let result = text.length;

notify(result.toString());
