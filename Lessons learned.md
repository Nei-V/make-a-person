1. Function to create objects
2. At this stage, it is easier for me to create many variables to understand the logic, then remove them one by one.
For example, at first I had variables for firstName, lastName, fullName, then I replaced them with items in a single array fullNameArray[0] and fullNameArray[1] and fullNameArray.join(" "). The same can be done in the functions on the buttons, like in the setFullName button. That should be 2 lines less of code (for each button),I'm not sure that is has any impact on performance.
3. In HTML you shouldn't set an ID with the exact same name as the function - I don't know exactly why, but I got errors (that is why the functions on the buttons have "1" at the end). Also, the functions should have different names. Quite obvious now, but at first I had used the excat same name for the functions on the buttons and the functions in the Person functions, which, of course, didn't work.
4. Using split and join methods
5. Scope, Closures, Obhects ... In this github exercise I've created a new object, "yosi" to emphasize that the objects have different scopes, so the fullNameArray variable is different for each of them.
6. Interesting article on forms + example
https://mattstauffer.com/blog/a-little-trick-for-grouping-fields-in-an-html-form/
