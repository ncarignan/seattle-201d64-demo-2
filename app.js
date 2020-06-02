'use strict'; // a string at the start of the file
// chrome reads this string and decides to be strict about the js that runs on th page

/*
  About Nich

  How tall is nich in inches - 73
  if they are exactly right
    you are correct
  else
    prompt to try again

  how old is nich - more than 20 less than 40
  if they are between the range

  if greater
    try a little younger
  if less
    but then i couldnt do over 21 things

  "is nich" - yes
  if they are eactly right
    yay
  else
    nay
  */

var theAnswer = prompt('is nich?');

// 'Y' is truthy, because it exists
// a variable by itself is an implicit conditional in anything checking for true or false. Because it exists the condition evaluates true
// 0, null, undefined, '', NaN are the things that evaluate as false in this kind of check// they are falsey

if(theAnswer === 'yes' || theAnswer === 'Y' || theAnswer === 'y'){
  alert('nice job');
  console.log('they answered is nich correctly');
} else {
  alert('booooooo, of course nich is');
}


// var howTallTheyThinkNichIs = prompt('how tall is nich');

