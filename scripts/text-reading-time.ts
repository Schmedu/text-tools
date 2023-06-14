// Name: Get Reading Time of Text
// Description: How much time does the text take to read? Just select the text in any application and run this script.
// Video: 3G4TzT6VJdY
// Input: Selected text
// Output: Notification with reading time
// Tags: Reading Time, Text
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://uffelmann.me

import "@johnlindquist/kit";

import readingTime from "reading-time";

let input = await getSelectedText();
let stats = readingTime(input);

notify({
    title: `Reading time`,
    message: `${stats.minutes} Minutes`,
});
