Description:
1. In Html tags
In a form tag I use input tag with id search and a pagraph tag with id message. 
2. In Javascript
I declare two block constant for id search and paragraph using queryselector method.
For search I declare a function with keyup event using addEventListener method so that it occurs when a user release a key from the search bar. Inside that function I again declare a variable using var keyword which store the length of value inside the search bar when a user type certain letters. Similarly using if else statement I check the length of value if it is less than 5 then using const message which I declare above will send the message to the paragraph tag of HTML document using innerHTML property. Then using return function the if statment will stop executing and came outside it where I declare an empty message to notify the user the length of letter is sufficient.
![Output-1](./assests/output/Output-1.png)
![Output-2](./assests/output/output-2.png)
