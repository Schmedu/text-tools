// Name: Title Case
// Description: Convert the selected text to title case.
// Video: lxf5W8EWGqU
// Input: Selected text
// Output: Changed selected text
// Tags: title case, text
// Author: Eduard Uffelmann
// Twitter: @schmedu_
// Linkedin: https://www.linkedin.com/in/euffelmann/
// Website: https://schmedu.com

import "@johnlindquist/kit";
import { titleCase } from "title-case";

// Input
let input = await getSelectedText();

// Output
await setSelectedText(titleCase(input));
