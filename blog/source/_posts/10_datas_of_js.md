# hackrank 10 days of js





## day 7 Regular Expressions I

```
Objective

In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.

Task

Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

Constraints

The length of string  is  .
String  consists of lowercase letters only (i.e., [a-z]).
Output Format

The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.

Sample Input 0

bcd
Sample Output 0

false
Explanation 0

This string starts with (and ends in) a consonant, so it cannot start and end with the same vowel.

Sample Input 1

abcd
Sample Output 1

false
Explanation 1

This string ends in a consonant, so it cannot start and end with the same vowel.

Sample Input 2

abcda
Sample Output 2

true
Explanation 2

This string starts and ends with the same vowel (a).

Sample Input 3

abcdo
Sample Output 3

false
Explanation 3

This string starts with the vowel a but ends in the vowel o.
```

```javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    
    /*
     * Do not remove the return statement
     */
    let re = /^(a|e|i|o|u).*\1$/
    return re;
}

```



## Day 7: Regular Expressions II

```
Task

Complete the function in the editor below by returning a RegExp object, , that matches any string  satisfying both of the following conditions:

String  starts with the prefix Mr., Mrs., Ms., Dr., or Er.
The remainder of string  (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
Constraints

The length of string  is  .
Output Format

The function must return a RegExp object that matches any string  satisfying both of the given conditions.

Sample Input 0

Mr.X
Sample Output 0

true
Explanation 0

This string starts with Mr., followed by an English alphabetic letter (X).

Sample Input 1

Mrs.Y
Sample Output 1

true
Explanation 1

This string starts with Mrs., followed by an English alphabetic letter (Y).

Sample Input 2

Dr#Joseph
Sample Output 2

false
Explanation 2

This string starts with Dr# instead of Dr., so it's invalid.

Sample Input 3

Er .Abc
Sample Output 3

false
Explanation 3

This string starts with Er but there is a space before the period (.), making the string invalid.
```

```javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}
```





## Day 7: Regular Expressions III

```
Task

Complete the function in the editor below by returning a RegExp object, , that matches every integer in some string .

Constraints

The length of string  is  .
It's guaranteed that string  contains at least one integer.
Output Format

The function must return a RegExp object that matches every integer in some string .

Sample Input 0

102, 1948948 and 1.3 and 4.5
Sample Output 0

102
1948948
1
3
4
5
Explanation 0

When we call match on string  and pass the correct RegExp as our argument, it returns the following array of results: [ '102', '1948948', '1', '3', '4', '5' ].

Sample Input 1

1 2 3
Sample Output 1

1
2
3
Explanation 1

When we call match on string  and pass the correct RegExp as our argument, it returns the following array of results: [ '1', '2', '3' ].

```





```javascript
use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}


```



