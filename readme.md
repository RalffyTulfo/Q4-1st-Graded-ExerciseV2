Q3 - rujia (p12554)
========================

There are n people (excluding myself) in my 30th birthday party. They sing the traditional “happy
birthday” song:

> *Happy birthday to you! Happy birthday to you! Happy birthday to Rujia! Happy birthday to you!!!*

Since I love music, I want to hear something more interesting, not that everyone sings together. Ah yes, I want one person to sing one word!

![qownnotes-media-fRFSMD](images/banner.png)


For example, there are three people: Mom, Dad, Girlfriend, I’d like them to sing like this:

```
Mom: Happy
Dad: birthday
Girlfriend: to
Mom: you
Dad: Happy
Girlfriend: birthday
Mom: to
Dad: you
Girlfriend: Happy
Mom: birthday
Dad: to
Girlfriend: Rujia
Mom: Happy
Dad: birthday
Girlfriend: to
Mom: you
```

Very nice, right? What if there are more than 16 people? That’s easy: repeat the song until
everyone has sung at least once :)

Please, don’t stop in the middle of the song.

## Input

The input contains a single line of strings. Each of the n strings contains a capitalized name (i.e. one upper-case letter followed by zero or more lowercase
letters). Each name contains at most 100 characters and do not have whitespace characters inside.
Name and gender fields are required.

## Output

Output the Happy Birthday song as demonstrated above and at the end include the song Good Fellow using the correct pronoun determined by the selected Gender. See sample screen shots below.

Note: Most of the HTML, CSS and JS code to create dynamic textboxes to get guests name, **the focus is on generating the songs**

**New things to learn:** The use of form and the use w3.css framework (https://www.w3schools.com/w3css/) an alternative to bootstrap

**example screenshots**
**index.hbs - when website is loaded or when home is clicked**
![qownnotes-media-fRFSMD](images/form1.png)
![qownnotes-media-fRFSMD](images/form1_b.png)

**happy.hbs - when submit button or happy link had been clicked**
**this is a partial output only**
![qownnotes-media-fRFSMD](images/form2.png)
![qownnotes-media-fRFSMD](images/form3.png)


## Procedure
1. Use the given UI and try to change it to suit your style by modifying style.css 
2. Make your own favicon.
3. Modify the names to contain your own.
4. Modify the copyright footer also to contain your name.
5. Modify the meta tags content.
6. Make users entered the required data (name of celebrant, gender, names of guests).  Show message if it can not proceed for no entries.
7. Place your own comments on the code you had added.
8. Validate users' input all are required.
9. Create a route heading for happy.hbs (one for get method due to a link to it and one for post due to form method)
10. happy.hbs should display the output as shown below and as described above.
11. Format happy.hbs anyway you want it.
10. Submit the link of this replit repository through KHub only.  **I will not check if submitted only in the replit teams.**
   

## Q1 Grading: 30/30
 - 60% javascript program to display the happy birthday (18pts)
   - defined route heading and reading of posted data
   - display of inputs in happy.hbs
   - the happy birthday song
   - the jolly good fello with correct gender.
 - 30% user interface (9pts)
   - changed of the look of the UI (for both home(inde.hbs) and Happy (happy.hbs)
   - all names had been changed to yours
   - inclusion of favicon
 - 10% overall organization (3pts)
   - code readability
   - comments on the JS code
   - proper content on the meta tags

## Due Date
week 3.

---

