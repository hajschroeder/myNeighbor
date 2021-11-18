**Specs**

Describe: numberFetch();

Test: it should prompt the user to imput a value, and make an array the runs from zero through inputted value

code:
const value = "5"
numberFetch(value);
Expected Output: ("0", "1", "2", "3, "4", "5");

Describe: numberConverter()

Test: it should convert numbers that contain certain values into strings that are words and/or phrases, specifically the following: <BR>
Digits containing a 1 are converted to "Beep!"
<br>Numbers containing a "2" are converted to "Boop!"
<br>Numbers containing a "3" are converted to "Won't you be my neighbor"
<br>The exceptions to this are as follows:
<br>

The importance of these rules are listed from least to most. In other words, "100" would convert to "Beep!" whereas "12" would convert to "Boop!". If "3" is the most important rule, than any value containing a "3" is dominated by that rule. Whereas "1" would return "Beep!", "1112" would return "Boop!", "122223" would return "Won't you be my neighbor?"

