# _Won't You  Be My Neighbor?_ #
**A WebApp to test out function writing using loops and arrays**

### Contributer(s)
* Hans Schroeder

## Technologies Used:
* HP Laptop
* Windows 10
* VS Code
* JSFiddle (for testing)
* Google Chrome (for debugging)
* Github and GitBash
* JSQuery (v 3.6.0)

## Description:
_The purpose of this website is to serve as my third Code Review for Epicodus._


**Goal**
* Create a webpage that gathers a value from a user. When submitted, the webpage will return to the user a list of all values from 0 through whatever number they have submitted.
* Certain values will be changed to either a word or a phrase. More specificially, values containing a 1 will be changes to "Beep!", values containing a 2 will be changed to "Boop!", and values containing a 3 will be changed to "Won't you be my neighbor". If a user, for example, were to enter '10', they would get the following returned to them:<br>
"0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!"

* Next, we need to identify a heirarchy of these values. The conversion of 1 to "Beep!" is the least important, 2 to "Boop!" is the second most important, and 3 to "Won't you be my neighbor", So, for instance, if a user entered "13" the return would be "...8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor". In other words, the conversion of a 1 digit is negated by the presence of a 2, and the conversion of a 2 is negated by the presence of a 3.

> It is my opinion that the difficulty of these functions in order of simplest to most difficut is:

1. Writing an array that returns the values to the user
2. Writing a function to convert 1, 2, and 3 to their respective values
3.  Writing a function that states the heirachy of the conversions 


*Known Bugs*
<br>
* 11/18, the javascript that is written will not work, but I feel is a step in the right direction.

<br>

* 11/20, the original script was abandoned (for now) and a new direction is being pursued. 

