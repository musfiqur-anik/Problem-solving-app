<img width="776" alt="Screenshot 2024-09-23 071123" src="https://github.com/user-attachments/assets/587502b4-02a6-4fda-86cc-812ee61411b4">
<img width="776" alt="Screenshot 2024-09-23 071207" src="https://github.com/user-attachments/assets/0906c12a-4ad0-4130-950a-aa699f236ecc">

welcome to the project. Here we will try to build a web based app which can solve equations or expressions. Primerily the webpage will contain some buttons and some text input sections with some headings and paragraph. It's goal is find solutions to mathematical problems like for those who are trying to learn competitive mathematics or are in college and trying to build up their mathematical foundations by solving problems. this app can save alot of time for them and will make the problems easier to solve. Now how this program will work in 3 steps. First, it will collect the type of expression they want to solve from the input section. Second, the program will to go through the expression by using a loop and find possible solutions to that expression. Third, as an output it will show a list of solutions which satisfies the given expression. Now the buttons that should  be in that webpage are given below:-

1. plus:- +
2. minus:- -
3. division:- /
4. multiplication:- */x
5. mod: mod
6. exponent:- ^
7. brackets:- ()
8. equal:- =
9. variables:- x and y (the user will be able to choose one or both. if they choose both the solution will come in pairs).

there will be a text input element where this buttons will apear and the user will be able to make the expressioon. there will an another text input element also for inputing the limit. Now limit what this limit will do is it will set a range of numbers from which the program will loop through. In other words, the limit is an array of numbers which the program will look solution in. So, in the text input section the user have to choose a from number and a To number. after that there will be a submit button
which will trigger the program. there will be a section in the html page where the results will be delivered.

Now, to make this simpler I have added an example code in the js file. I have made a prototype of this code . What the code basically does is it takes a number and loops through numbers from 1 to 1000 which then be used to check an expression and if the expression yields that particular value which was initially given to it then the code returns the pair of number that caused the result. Now I haven't worked on the project much yet so to check the answer  you have to go the console and if there is a valid solution found then it will be between the array shown in the console( you have to check it by your own). 
