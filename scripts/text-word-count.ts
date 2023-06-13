// Name: Text Word Count
// Description: Counts the words in the selected text. It's a simple algorithm that counts the spaces between words.
// Video: nzzj6DoPv-Y
// Input: Selected text
// Output: Notification with the word count
// Tags: text, word count
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://uffelmann.me

import "@johnlindquist/kit";

let text = await getSelectedText();

function countWords(str: string): number {
    // let count = 0;
    const words = str.split(/\s+/).filter((word) => word);
    return words.length;
}

let result = await countWords(text);
await notify(`Word count: ${result}`);
