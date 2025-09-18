// Chapter No. 1  --- ALERTS
// -------------------------

// Q-1
alert("Welcome to my Website");

// Q-2
alert("Error! Please enter a valid password");

// Q-3
alert("Welcome to JS Land... \n Happy Coding!");

// Q-4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Q-5
console.log("Hello... I can run JS through my web browser's console");

// Q-6 & 7      Done

// Chapter No. 2  --- VARIABLES FOR STRINGS 
// ----------------------------------------

// Q-1
var username;

// Q-2

var username = "Rashid Akhter";

// Q-3
    // a) 
    var message;

    // b)
    message = "Hello World";

    // c)
    alert(message)

// Q-4
var stdNm = "Jhone Doe"; 
var stdAge = 15;
var stdCrs = "Certified Mobile Application Development";
alert(stdNm);
alert(stdAge);
alert(stdCrs);

// Q-5

alert("PIZZA \n PIZZ \n PIZ \n PI \n P");

// Q-6

var email = "rashidakhter08051972@gmail.com";

alert("My email address is "+email);

// Q-7

var Book = "A smarter way to learn JavaScript";
alert("I m trying to learn from the Book "+Book);

// Q-8
document.write("Yah! I can write HTML content through JavaScript"+"<br>");

// Q-9
var abc = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"+"<br>";
alert(abc);
document.write(abc);


// Chapter No. 3  --- VARIABLES FOR NUMBERS 
// ----------------------------------------

// Q-1

var age = 15;``
alert("I am " + age + " years old")

// Q-2
var N = 14
alert("You have visited this site " + N + " times");

// Q-3

var birthyear = "1990"
document.write("My birth year is " + birthyear + "<br>"+"Data type of my delcared variable is Number");

// Q - 4

var name = prompt("Enter Viositor's Name");
var title = prompt("Enter Product Title");
var qty = prompt("Enter Quantity");

document.write(name + " " + "ordered" + qty + " " + title + " " + "From XYZ Clothing Store");

// // Chapter No. 4  --- VARIABLE NAMES: LEGAL & ILLEGAL
// // --------------------------------------------------

// Q-1
var x, y, z;

// Q-2
var numbers, $, _, _d2, e2, 1a, 2b, 3c, @d, &e

// Q-3
    // a)
    document.write("Rules for naming JS variables");

    // b)
    var numbers, $, _, _d2, e2, 1a, 2b, 3c, @d, &e, $my1stVariable
    document.write("Variable names can only contain "+numbers,$+"and"+" "+_+"."+"For Example:"+" ",$my1stVariable+"<br>");
    alert("Variable names can only contain "+numbers,$+"and"+" "+_+"."+"For Example:"+" ",$my1stVariable+"<br>");

    // c)
    document.writeln("Variables must begin with a ______, ______ or _____. For example $name, _name or name"+"<br>");

    // d)

    document.write("Variable names are case sensitive"+"<br>");

    // e)
    document.write("Variable names should not be JS keywords"+"<br>")

    // Chapter No. 5  --- MATH EXPRESSIONS
    // -----------------------------------

    // Q-1
    var val1 = +prompt("1st Value");
    var val2 = +prompt("2nd Value");
    var val3 = val1 + val2;

    document.write("Sum of "+val1+" and "+val2+" is "+val3);

    // Q-2
    var val1 = +prompt("1st Value");
    var val2 = +prompt("2nd Value");
    var val3 = val1 + val2;
    var val4 = val1 - val2;
    var val5 = val1 * val2;
    var val6 = val1 / val2;
    var val7 = val1 % val2;

    document.write("Addition of "+val1+" and "+val2+" is "+val3+"<br>");

    document.write("Substraction of "+val1+" and "+val2+" is "+val4+"<br>");

    document.write("Multiplication of "+val1+" and "+val2+" is "+val5+"<br>");

    document.write("Division of "+val1+" and "+val2+" is "+val6+"<br>");

    document.write("Modulus of "+val1+" and "+val2+" is "+val7);

    // Q-3
        // a)
        var myVal;

        // b)
        document.write("Value after variable declaration is: "+myVal+"<br>");

        // c)
        myVal = 5

        // d)
        document.write("Initial value:"+myVal+"<br>")

        // e)
        myVal++

        // f)
        document.write("Value after increment is:"+myVal+"<br>")

        // g)
        myVal = myVal+7

        // h)
        document.write("Value after addition is: "+myVal+"<br>")

        // i)
        myVal--

        // j)
        document.write("Value after decrement is:"+myVal+"<br>")

        // k)
        myVal=myVal%3

       // l)        
        document.write("The remainder is :"+myVal+"<br>")


// Q-4
var val1 = 600
var val2 = 5

document.write("Total cost to buy "+val2+" "+"Tickets is: "+ val1 * val2+" PKR "+"<br>")

// Q-5

var myInp = +prompt("Enter any Number:");

var myNum = 0;

document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");

// Q-6
    // a)
    var clsTmp = prompt("Enter Celsius temperature");

    // b)
    var dgr= String.fromCharCode(176);
    var FrnTmp = (clsTmp * 9 / 5) + 32;
    document.write(FrnTmp+" "+dgr+"F"+"<br>");



    // c)
    var FrhnTmp = prompt("Enter Fahrenheit temperature");

    // d)
    var ClssTmp = (FrhnTmp - 32) * 5 /9;
    document.write(ClssTmp+" "+dgr+"C");

// Q-7

var prc1 = +prompt("Price of item 1");
var prc2 = +prompt("Price of item 2");
var qty1 = +prompt("Ordered quantity of item 1");
var qty2 = +prompt("Ordered quantity of item 2");
var shpChg = +prompt("Shipping charges");

var TotCost;

TotCost = (prc1 * qty1) + (prc2 * qty2) + shpChg;


document.write("Shopping Cart"+"<br>")
document.write("Price of item 1: " + prc1 + "<br>");
document.write("Price of item 2: " + prc2 + "<br>");

document.write("Ordered quantity of item 1: " + qty1 + "<br>");
document.write("Ordered quantity of item 2: " + qty2 + "<br>");

document.write("Shipping charges: " + shpChg + "<br>");

document.write("Total cost of your order is: " + TotCost + "<br>");

// Q-8

var totMark = +prompt("Total Marks");
var markObtn = +prompt("Marks Obtained");

document.write("Marks Sheet"+"<br>");
document.write("Total Marks: " + totMark + "<br>");
document.write("Marks Obtained: " + markObtn + "<br>");
document.write("Percentage: " + (markObtn/totMark)*100 + "%" +"<br>");

// Q-9

document.write("Total Currency in PKR: "+ ((10 * 104.80) + (25 * 28)) + "<br>")

// Q-10

var val1 = +prompt("Enter any number");

valAdd = val1 + 5;
valMlt = val1 * 10;
valDiv = val1 / 2;

//var tot = valAdd + valMlt + valDiv;

document.write("Value After Addition: "+ valAdd +"<br>");
document.write("Value After Multiplication: "+ valMlt +"<br>");
document.write("Value After Division: "+ valDiv +"<br>");

document.write("Total: "+ (valAdd + valMlt + valDiv) +"<br>");

// Q-11

var CrntYr = +prompt("Current Year: ");
var BrthYr = +prompt("Birth Year: ");

document.write("Age Calculator "+"<br>");
document.write("Current Year: "+CrntYr+"<br>");
document.write("Current Year: "+BrthYr+"<br>");

document.write("Your Age is: "+(CrntYr - BrthYr)+"<br><br>");

// Q-12

    // a)
    var radius=+prompt("Enter Radius");

    // b)

    // Circumference of a circle = 2 π r
    //  π = 3.142
    document.write("The Geometrizer"+"<br>")
    document.writeln("Circumference of a circle: "+ (2 * 3.142 * radius)+"<br>");
    document.writeln("The area is: "+ (3.142 * (radius*radius))+"<br><br>");

// Q-13
    // a)
    var FavSnk = prompt("Your favorite snack");

    // b)
    var CrntAge = +prompt("Your current age");

    // c)
    var MaxAge = +prompt("Your maximum age");

    // d)
    var EstQty = +prompt("Estimated amount per day");    

    // e)

    var age = MaxAge - CrntAge;

    document.write("Your favorite snack: "+FavSnk+"<br>");
    document.write("Your current age: "+CrntAge+"<br>");
    document.write("Your maximum age: "+MaxAge+"<br>");
    document.write("Estimated amount per day: "+EstQty+"<br>");

    document.write("You will need "+(age*EstQty)+" "+FavSnk+" " +"to last you until the ripe old age of "+MaxAge+"<br>");

// Chapter No. 6-9  --- MATH EXPRESSIONS
// -----------------------------------

// Q - 1

var a = +prompt("Enter a Number:");

document.write("Result:"+"<br>");
document.write("The value of a is: "+ a +"<br>")
// document.write("---------------------"+"<br"+"<br>")

document.write("The value of ++a is: "+ ++a +"<br>")

document.write("Now the value of a is: "+ a +"<br>")

document.write("The value of a++ is: "+ a++ +"<br>")

document.write("Now the value of a is: "+ a +"<br>")

document.write("The value of --a is: "+ --a +"<br>")

document.write("Now the value of a is: "+ a +"<br>")

document.write("The value of a-- is: "+ a-- +"<br>")

document.write("Now the value of a is: "+ a +"<br>")

// Q - 2

var a = 2; 
var b = 1; 
var c;

document.write("a is: "+a+"<br>")
document.write("b is: "+b+"<br>")

c = --a;                        
c = -a - --b;                   
c = --a - --b + ++b;            
c = --a - --b + ++b + b--;      

document.write("Result is: "+c)

// Q-3

var UserNm = prompt("User Name:");
alert("Welcome Mr. "+UserNm+" "+"to my website")

// Q-4 is blank

// Q-5
var myInp = +prompt("Enter any Number:");

var myNum = 0;

document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");
document.write(myInp+" * " + ++myNum+" = "+myInp * myNum +"<br>");

// Q-6
    // a)
    var SbjNm1 = prompt("Enter Subject 1");
    var SbjNm2 = prompt("Enter Subject 2");
    var SbjNm3 = prompt("Enter Subject 3");

    // b)
    var TotMrk = 100;

    // c)
    var  SbjMrk1 = +prompt("Enter Marks 1");

    // d)
    var SbjMrk2 = +prompt("Enter Marks 2");
    var SbjMrk3  = +prompt("Enter Marks 3");

    // e)

    document.write("Subject"+"          "+"Total Marks"+"          "+"Obtained Marks"+"          "+"Percentage"+"<br><br>");
    document.write(SbjNm1+"               "+TotMrk+"               "+SbjMrk1+"               "+((SbjMrk1/TotMrk)*100)+"<br>");
    document.write(SbjNm2+"               "+TotMrk+"               "+SbjMrk2+"               "+((SbjMrk2/TotMrk)*100)+"<br>");
    document.write(SbjNm3+"               "+TotMrk+"               "+SbjMrk3+"               "+((SbjMrk3/TotMrk)*100)+"<br>");
    document.write("                      "+(TotMrk*3)+"               "+(SbjMrk1+SbjMrk2+SbjMrk3)+"               "+(((((SbjMrk1/TotMrk)*100)+((SbjMrk2/TotMrk)*100)+((SbjMrk3/TotMrk)*100)))/3)+"<br>");


//Q-7       Blank


// Chapter No. 9-11  --- USER INPUT & CONDITIONAL STATEMENT 
// --------------------------------------------------------

// Q-1
var city = prompt("Enter your city");

if (city == 'Karachi'){
    alert("Welcome to city of lights");
}

// Q-2
var gender = prompt("Enter your gender");

if(gender == "male"){
    console.log("Good Morning Sir");
}

if(gender == "female"){
    console.log("Good Morning Ma'am");
}

if(gender !== "male" && gender !== "female"){
    console.log("Kindly enter corerect gender.... male or female");
}

// Q-3
var signal = prompt("Enter color of road lights.... red / yellow / green");

if(signal == "red"){
    console.log("Must Stop");
}

if(signal == "yellow"){
    console.log("Ready to move");
}

if(signal == "green"){
    console.log("Move now");
}


if(signal!== "red" && signal !== "yellow" && signal !== "green"){
    console.log("Kindly enter corerect color.... red / yellow / green");
}

// Q-4

var fuel = +prompt("Enter remaining fuel in your car");

if (fuel <= 0.25){
    console.log("Please refill the fuel in your car");
}

// Q-5

    // a)
    var a = 4;
    if(++a === 5){
        alert("given condition for variable a is true");
    }

    // b)
    var b = 82;
    if(b++ === 83){
        alert("given condition for variable b is true");
    }    

    // c)
    var c = 12;
    if(c++ === 13){
        alert("Condition 1 is true");
    }     

    if(c === 13){
        alert("Condition 2 is true");
    }     

    if(++c < 14){
        alert("Condition 3 is true");
    }   

    if(c === 14){
        alert("Condition 4 is true");
    }       

    // d)
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;

    if (totalCost === laborCost + materialCost ){
        alert("The Cost equal");
    }

    // e)    
    if (true){
        alert("True")
    }

    if (false){
        alert("False");
    }

    // f)
    if("car" < "cat"){
        alert("car is smaller than cat")
    }

// Q-6
var mrkobt1 = +prompt("Enter Marks Obtained 1");
var mrkobt2 = +prompt("Enter Marks Obtained 2");
var mrkobt3 = +prompt("Enter Marks Obtained 3");
var totMark = +prompt("Enter Total Marks");

var totMarkObt = mrkobt1 + mrkobt2 + mrkobt3;
var prcnt = (totMarkObt / totMark) * 100;

if (prcnt >= 80 && prcnt <= 100){
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total Marks: "+totMark+"<br>");
document.write("Marks Obtained: "+totMarkObt+"<br>");
document.write("Percentage: "+prcnt+"%"+"<br>");
document.write("Grade: A-one"+"<br>");
document.write("Remarks: Excellent"+"<br>");
}

else if (prcnt >= 70){
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total Marks: "+totMark+"<br>");
document.write("Marks Obtained: "+totMarkObt+"<br>");
document.write("Percentage: "+prcnt+"%"+"<br>");
document.write("Grade: A"+"<br>");
document.write("Remarks: Good"+"<br>");
}

else if (prcnt >= 60){
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total Marks: "+totMark+"<br>");
document.write("Marks Obtained: "+totMarkObt+"<br>");
document.write("Percentage: "+prcnt+"%"+"<br>");
document.write("Grade: B"+"<br>");
document.write("Remarks: You need to improve"+"<br>");
}

else {
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total Marks: "+totMark+"<br>");
document.write("Marks Obtained: "+totMarkObt+"<br>");
document.write("Percentage: "+prcnt+"%"+"<br>");
document.write("Grade: Fail"+"<br>");
document.write("Remarks: Sorry"+"<br>");
}

// Q-7
    // a)
    var mySecNum = 5;
    var usrGssNum = +prompt("Come On .... Guess My Secret Number...");

    if (mySecNum === usrGssNum){
        alert("Bingo! Correct answer")
    }
    else(
        alert("ooops! Incorrect answer")
    )

    // b)
    if (++usrGssNum === mySecNum){
        alert("Close enough to the correct answer")
    }

// Q-8

var usrNum = +prompt("Enter a number");

if (usrNum % 3 === 0){
    alert("Your number is divisible by 3")
}



// Q-9

var usrNum = +prompt("Enter a number");

if (usrNum % 2 === 0){
    alert("This number is Even")
}
else{
    alert("This number is Odd")
}

// Q-10

var Tmp = +prompt("What's your temperature today ...");

if (Tmp >= 40){
    alert("It is too hot outside")
}
else if (Tmp >= 30){
    alert("The Weather today is Normal")
}
else if (Tmp >= 20){
    alert("Today's weather is cool")
}
else if (Tmp >= 10){
    alert("OMG! Today's weather is so cool")
}

// Q-11

var Num1 = +prompt("Enter Number 1");
var opt = prompt("Enter + or - or * or / or %")
var Num2 = +prompt("Enter Number 2");

if (opt==="+"){
    alert(Num1+Num2);
}
else if (opt==="-"){
    alert(Num1-Num2);
}
else if (opt==="*"){
    alert(Num1*Num2);
}
else if (opt==="/"){
    alert(Num1/Num2);
}
else if (opt==="%"){
    alert(Num1%Num2);
}

// Chapter No. 12-13  --- IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
// -----------------------------------------------------------------------------

// Q-1

var chkstr = prompt("Type any Character / Number");

var myascii = chkstr.charCodeAt(0);

if(myascii>65 && myascii<=90){
    alert("This is an Uppercase Letter");
}

else if(myascii>=97 && myascii<=122){
    alert("This is a Lowercase Letter");
}
else if(myascii>=48 && myascii<=57){
    alert("This is a Number");
}
else{
    alert("Other than Letters and Numbers");
}

// Q-2

var Num1 = +prompt("Enter First Number");

var Num2 = +prompt("Enter Second Number");

if(Num1>Num2){
    alert("Number 1 is greater than Number 2");
}
else if(Num2>Num1){
    alert("Number 2 is greater than Number 1");
}
else{
    alert("Both Numers are Equal");
}

// Q-3

var Num = +prompt("Enter any Number");


if(Num>0){
    alert("Number is Positive");
}
else if(Num<0){
    alert("Number is Negative");
}
else{
    alert("Number is Zero");
}

// Q-4

var char = prompt("Enter any character(a-z)");

character = char.toUpperCase()

if(character === "A" || character === "E" ||character === "I" ||character === "O" ||character === "U"){
    alert("true");
}
else{
    alert("false");
}

// Q-5

    // a)
    var pw = "J@wanP@kistan";

    // b)
    var usrpwd = prompt("Enter your password");

    // c)
        // i)
        if(usrpwd === ""){
            alert("Please enter your password");
        }

        // ii)
        if(usrpwd === pw){
            alert("Correct! The password you entered matches the original password");
        }
        else{
            alert("Incorrect password")
        }

// Q-6
var greeting;
var hour = 13;
if(hour < 18){
    greeting="Good day";
    alert(greeting);
} 
else {
    greeting="Good evening";
    alert(greeting);
}

// Q-7

var time = +prompt("Enter Time e.g. 1900=7pm");

if(time>= "0000" && time < 1200){
       alert("Good morning!") 
}

else if(time>=1200 && time < 1700){
       alert("Good afternoon!") 
}

else if(time>=1700 && time < 2100){
       alert("Good evening!") 
}
else if(time>=2100 && time <= 2359){
       alert("Good night!") 
}
else{
    alert("Incorrect Time .... Please enter between 0000 and 2359")
}

// Chapter No. 14-16  --- ARRAYS 
// -----------------------------

// Q-1
var students = [];
console.log(students);

// Q-2  same as Question No. 1
var student = new Array();
console.log(Array());

// Q-3
var str = ["ahmed", "ali", "rashid", "faraz", "farooq"];
console.log(str);

// Q-4
var numbers = [10, 200, 300, 400, 500];
console.log(numbers);

// Q-5
var bool = [true, false, false, true, false];
console.log(bool);

// Q-6
var mixed = ["Rashid", 100, "Akhter", true, 300, undefined, true, "JawanPakistan"];
console.log(mixed);

// Q-7
var qlf = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>" + "Qualifications:" + "</h1>" + "<br>");
document.write("<h1>"+"1) "+qlf[0]+"<br>"+"2) "+qlf[1]+"<br>"+"3) "+qlf[2]+"<br>"+"4) "+qlf[3]+"<br>"+"5) "+qlf[4]+"<br>"+"6) "+qlf[5]+"<br>"+"7) "+qlf[6]+"<br>"+"8) "+qlf[7]+"</h1>"+"<br>");

// Q-8

var std=["Michael","John","Tony"];
var mrks=[85,92,87,65,79,52,61,91,92,96,86,78,92,88,77];
var mrksMch = mrks[0]+mrks[1]+mrks[2]+mrks[3]+mrks[4];
var mrksJhn = mrks[5]+mrks[6]+mrks[7]+mrks[8]+mrks[9];
var mrksTon = mrks[10]+mrks[11]+mrks[12]+mrks[13]+mrks[14];

var prntMch = mrksMch / 500 * 100;
var prntJhn = mrksJhn / 500 * 100;
var prntTon = mrksTon / 500 * 100;

document.write("<h1>"+"Score of Michael is: "+mrksMch+"."+"Percentage: "+prntMch+"%"+"<br>");
document.write("Score of Johnis: "+mrksJhn+"."+"Percentage: "+prntJhn+"%"+"<br>");
document.write("Score of Tony is: "+mrksTon+"."+"Percentage: "+prntTon+"%"+"<br>"+"<h1>");

// Q-9
    // a)
    var colors =["Blue","Green","Yellow","Red","Purple","Aqua","Lemongreen","Skyblue"];

    var col1 = prompt("What color do you want to add to the beginning of the array?");
    colors.unshift(col1);
    document.write(colors+"<br>");

    // b)
    var col1 = prompt("What color do you want to add to the end of the array?");
    colors.push(col1);
    document.write(colors+"<br>");

    // c)
    colors.splice(0,0,"Pink","Brown");
    document.write(colors+"<br>");

    // d)
    colors.shift(colors);
    document.write(colors+"<br>");

    // e)
    colors.pop(colors);
    document.write(colors+"<br>");

    // f)
    var col2 = prompt("which index you want to add a color?");
    var col3 = prompt("Enter your colour:");
    colors.splice(col2,0,col3);
    document.write(colors+"<br>");

    // g)
    var col4 = prompt("which index do you want to delete color(s)?");
    var col5 = prompt("How many color(s) do you want to delete?");
    colors.splice(col4,col5);
    document.write(colors+"<br>");
    
// Q-10
var stdScr = [95,85,96,59,73,62,99];

document.write("<h3>"+stdScr.sort()+"</h3><br>");

// Q-11

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawer","Multan"];

var cities1 = cities.slice(2,5);

document.write("<h3>"+cities1+"</h3><br>");

// Q - 12

var Animal = ["This ","is ","my ","cat"];

document.write(Animal.join("")+"<br><br>");

// Q-13

var device = ["keyboard","mouse","printer","monitor"];
document.write(device+"<br><br>");

document.write("Out:"+"<br>")
document.write(device[0]+"<br><br>");

document.write("Out:"+"<br>")
document.write(device[1]+"<br><br>");

document.write("Out:"+"<br>")
document.write(device[2]+"<br><br>");

document.write("Out:"+"<br>")
document.write(device[3]+"<br><br>");

// Q-14

var device = ["keyboard","mouse","printer","monitor"];
document.write("<br>"+device.reverse());

document.write("<br><br>Out:"+"<br>")
document.write(device[0]+"<br><br>");

document.write("Out:"+"<br>")
document.write(device[1]+"<br><br>");

document.write("Out:"+"<br>")
document.write(device[2]+"<br><br>");

document.write("Out:"+"<br>")
document.write(device[3]+"<br><br>");


// Q-15

var mobCmp = ["Apple","Samsum","Motorola","Nokia","Sony","Haier"];
document.write("<h1>Phone Manufacturers</h1>");
document.write("<h1><select><option>"+mobCmp[0]+"</option>+<option>"+mobCmp[1]+"</option>"+"<option>"+mobCmp[2]+"</option>"+"<option>"+mobCmp[3]+"</option>"+"<option>"+mobCmp[4]+"</option>"+"<option>"+mobCmp[5]+"</option></select></h1>")


// // Chapter No. 17-20  --- ARRAYS AND LOOP
// // --------------------------------------

// Q-1
var arr = [
    []
];

console.log(arr);
// Q-2
var mat = [
    [0,1,2,3],[1,0,1,2],[2,1,0,1]
];
for(var i=0; i<mat.length; i++){
    for (var j=0; j<=mat.length; j++){
        document.write("<strong>"+mat[i][j]+"     </strong>");
    }
    document.write("<br>");
};


// Q-3

for (var i=1; i<=10; i++){
    document.write(i+"<br>");
}

// Q-4

var tab = +prompt("Enter a number to show its multiplication");

var num = +prompt("Enter length multiplication table");

for (i=1; i<=num; i++){
    document.write(tab+" x "+i+" = "+tab*i +"<br>");
}

Q-5

var fruits = ["Apple", "Banana", "Mango","Orange","Strawberry"];

for(i=0; i<=fruits.length-1; i++){
    document.write("<h1>"+fruits[i]+"</h1>");
}

for(j=0; j<=fruits.length-1; j++){
    document.write("<h1>"+"Element at index "+j+" is "+fruits[j]+"</h1>");
}

// Q-6

    // a)
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    document.write("<h1>Counting: <br>")
    for(i=0; i<numbers.length; i++){
        document.write(i+"   ")
    }
    document.write("<br><br>");
    
    // b)
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    document.write("Reverse Counting: <br>")
    for(i=numbers.length; i>=0; i--){
        document.write(i+"   ")
    }
    document.write("<br><br>");

    // c)
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    document.write("Even: <br>")
    for(i=0; i<=numbers.length; i++){
        if (i%2==0){
            document.write(i+"   ")
        }    
    }
    document.write("<br><br>");

    // d)
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    document.write("Odd: <br>")
    for(i=0; i<=numbers.length; i++){
        if (i%2!==0){
            document.write(i+"   ")
        }    
    }
    document.write("<br><br>");

    // e)
    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    document.write("Series: <br>")
    for(i=2; i<=numbers.length; i++){
        if (i%2==0){
            document.write(i+"k   ")
        }    
    }
    document.write("<br><br></h1>");

// Q-7
var bakeryItems = ["cake","apple pie","cookies","chips","patties"];
var userinput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'a`m?").toLowerCase();

for(i=0;i<=bakeryItems.length;i++){
    if(userinput===bakeryItems[0] && i==0){
        document.write(bakeryItems[0]+" is available at index 0 in our bakery"+"<br>");
        // document.write(bakeryItems)
    }

    else if(userinput===bakeryItems[1] && i==1){
        document.write(bakeryItems[1]+" is available at index 1 in our bakery"+"<br>");
        // document.write(bakeryItems)
    }

    else if(userinput===bakeryItems[2] && i==2){
        document.write(bakeryItems[2]+" is available at index 2 in our bakery"+"<br>");
        // document.write(bakeryItems)
    }
    else if(userinput===bakeryItems[3] && i==3){
        document.write(bakeryItems[3]+" is available at index 3 in our bakery"+"<br>");
        // document.write(bakeryItems)
    }
    else if(userinput===bakeryItems[4] && i==4){
        document.write(bakeryItems[4]+" is available at index 4 in our bakery"+"<br>");
        // document.write(bakeryItems)
    }
}

if(userinput!==bakeryItems[0] && userinput!==bakeryItems[1] && userinput!==bakeryItems[2] && userinput!==bakeryItems[3] && userinput!==bakeryItems[4]){
        document.write("We are sorry. "+userinput+" is not available in our bakery"+"<br>");
    }

// Q-8
var numbers = [24,53,78,91,12];

if (numbers[0]> numbers[1] && numbers[0]> numbers[2] && numbers[0]> numbers[3] && numbers[0]> numbers[4]){
    var a = numbers[0]
}
else if (numbers[1]> numbers[0] && numbers[1]> numbers[2] && numbers[1]> numbers[3] && numbers[1]> numbers[4]){
    var a = numbers[1]    
}
else if (numbers[2]> numbers[0] && numbers[2]> numbers[1] && numbers[2]> numbers[3] && numbers[2]> numbers[4]){
    var a = numbers[2]    
}
else if (numbers[3]> numbers[0] && numbers[3]> numbers[1] && numbers[3]> numbers[2] && numbers[3]> numbers[4]){
    var a = numbers[3]    
}
else if (numbers[4]> numbers[0] && numbers[4]> numbers[1] && numbers[4]> numbers[2] && numbers[4]> numbers[3]){
    var a = numbers[4]    
}

document.write("Array items: "+numbers+"<br>");
document.write("The largest number is "+a+"<br>")

// Q-9
var numbers = [24,53,78,91,12];

if (numbers[0]< numbers[1] && numbers[0]< numbers[2] && numbers[0]< numbers[3] && numbers[0]< numbers[4]){
    var a = numbers[0]
}
else if (numbers[1]< numbers[0] && numbers[1]< numbers[2] && numbers[1]< numbers[3] && numbers[1]< numbers[4]){
    var a = numbers[1]    
}
else if (numbers[2]< numbers[0] && numbers[2]< numbers[1] && numbers[2]< numbers[3] && numbers[2]< numbers[4]){
    var a = numbers[2]    
}
else if (numbers[3]< numbers[0] && numbers[3]< numbers[1] && numbers[3]< numbers[2] && numbers[3]< numbers[4]){
    var a = numbers[3]    
}
else if (numbers[4]< numbers[0] && numbers[4]< numbers[1] && numbers[4]< numbers[2] && numbers[4]< numbers[3]){
    var a = numbers[4]    
}

document.write("Array items: "+numbers+"<br>");
document.write("The smallest number is "+a+"<br>")

// Q-10

for(i=5;i<=100;i++){
    if (i%5==0){
        document.write(i+", ");
    }
}

// // // Chapter No. 21-25  --- STRING METHODS 
// // // -------------------------------------

// Q-1
var firstname = prompt("Enter your First Name: ");
var lastname = prompt("Enter your Last Name: ");

var fullname = firstname+" " +lastname

alert("Welcome Mr. /Ms. " +fullname+" to our website"); 

// Q-2
var mobmod = prompt("Enter your favorite mobile phone model: ");

document.write("My favorite phone is: " + mobmod +"<br>");
document.write("Length of string: " + mobmod.length +"<br>");

// Q-3
var countname = "Pakistani";
document.write("String: "+countname + "<br>")
document.write("index of 'n': "+countname.indexOf('n') + "<br>");

// Q-4
var str = "Hello World";
document.write("String: "+str + "<br>");
document.write("Last index of 'l': "+str.lastIndexOf('l') + "<br>");

// Q-5
var string = "Pakistani";
document.write("String: "+string+"<br>");
document.write("Character at index 3 is:"+string[3]+"<br>");

// Q-6
var firstname = prompt("Enter your First Name: ");
var lastname = prompt("Enter your Last Name: ");
var fullname = firstname.concat(" ",lastname);
document.write("Welcome Mr. /Ms. " +fullname+" to our website"); 

// Q-7
var city = "Hyderabad"
document.write("City: "+city +"<br>");
document.write("After replacement: "+city.replace("Hyder","Islam")+"<br>");

// Q-8
var message = "Ali and Sami are best friends. They play cricket and football together."; 
document.writeln(message.replaceAll("and","&"));

// Q-9
var strnum = "472";
var cnvnum = Number(strnum);
document.write("Value: "+strnum+"<br>");
document.write("Type: "+typeof(strnum)+"<br>");
document.write("Value: "+cnvnum+"<br>");
document.write("Type: "+typeof(cnvnum)+"<br>");

// Q-10
var text = prompt("Enter any text: ");
document.write("User input: "+text);
document.write("<br>");
document.write("Upper case: "+text.toUpperCase());
document.write("<br>");

// Q-11
var inptxt = prompt("Enter any text: ");
var remtxt = inptxt.slice(1)
document.write(inptxt[0].toUpperCase()+remtxt);

// Q-12
 var num = 35.36
 var constr = num.toString();
document.write("Number: "+num+"<br>");
 document.write("Result: "+constr.slice(0,2)+constr.slice(3,5))

// Q-13
var usrinp = prompt("Enter any text: ");


for(i=0;i<usrinp.length;i++){
    var myascii = usrinp.charCodeAt(i);
    if (myascii==33 || myascii==44 || myascii==46 || myascii==64) 
        alert("Pleae enter a valid username");
}

// Q-14
var bakeryItems = ["cake","apple pie","cookies","chips","patties"];
var userinput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'a`m?").toLowerCase();

for(i=0;i<=bakeryItems.length;i++){
    if(userinput===bakeryItems[0] && i==0){
        document.write("<strong>"+bakeryItems[0]+" is <strong>available</strong> at index 0 in our bakery"+"<br>");
      }

    else if(userinput===bakeryItems[1] && i==1){
        document.write("<strong>"+bakeryItems[1]+" is <strong>available</strong> at index 1 in our bakery"+"<br>");
    }

    else if(userinput===bakeryItems[2] && i==2){
        document.write("<strong>"+bakeryItems[2]+" is <strong>available</strong> at index 2 in our bakery"+"<br>");
      }
    else if(userinput===bakeryItems[3] && i==3){
        document.write("<strong>"+bakeryItems[3]+" is <strong>available</strong> at index 3 in our bakery"+"<br>");
      }
    else if(userinput===bakeryItems[4] && i==4){
        document.write("<strong>"+bakeryItems[4]+" is <strong>available</strong> at index 4 in our bakery"+"<br>");
     }
}

if(userinput!==bakeryItems[0] && userinput!==bakeryItems[1] && userinput!==bakeryItems[2] && userinput!==bakeryItems[3] && userinput!==bakeryItems[4]){
        document.write("We are sorry. "+userinput+" is <strong>not available</strong> in our bakery"+"<br>");
    }

// Q-15
var usrinp = prompt("Enter your password");
var myascii = usrinp.charCodeAt(0);
var flag=""

for(i=0;i<usrinp.length;i++){
    alert(myascii);
    if(myascii>=48 && myascii<=57){
    }
    // else if(myascii>=65 && myascii<=90){
    // }
    // else if(myascii>=97 && myascii<=122){
    // }
     else{
         var flag = "False"
    }
}
if(flag="False"){
    alert("Invalid Password");
}

var chkstr = prompt("Type any Character / Number");

var myascii = chkstr.charCodeAt(0);

if(myascii>65 && myascii<=90){
    alert("This is an Uppercase Letter");
}


// Q-16
var university = "University of Karachi"; 
var myArray = university.split("");

for(i=0;i<myArray.length;i++){
    document.write(university[i]);
    document.write("<br>");
}
console.log(myArray)
// Q-17
var usrinp = prompt("Enter any word");
for(i=0;i<usrinp.length;i++){
    if(i==usrinp.length-1){
        alert(usrinp[i]);
    }
}

// Q-18

var text = "The quick brown fox jumps over the lazy dog";
document.write("Welcome");
document.write(text.count("the"));

// Chapter No. 26-30  --- MATH METHODS
// -----------------------------------

// Q-1
var num = prompt("Enter any number greater than 0");
if (num<0){
	alert("Kindly Enter Positive Value");
}

// a)
if(num>=0){
   document.write("Number: "+num+"<br>");
}

// b)
if(num>=0){
   document.write("Round off value: "+Math.round(num)+"<br>");
}

// c)
if(num>=0){
   document.write("Floor value: "+Math.floor(num)+"<br>");
}

// d)
if(num>=0){
   document.write("Ceil value: "+Math.ceil(num)+"<br>");
}

// Q-2
var num = prompt("Enter any number Less than 0");
if (num>0){
	alert("Kindly Enter Negative Value");
}

// a)
if(num<=0){   
    document.write("Number: "+num+"<br>");
}

// b)
if(num<=0){
    document.write("Roud off value: "+Math.round(num)+"<br>");
}

// c)
if(num<=0){
    document.write("Floor value: "+Math.floor(num)+"<br>");
}
// d)
if(num<=0){
    document.write("Ceil value: "+Math.ceil(num)+"<br>");
}

// Q-3
var num = prompt("Enter any number");
document.write("absolute value of  "+num+" is "+Math.abs(num)+"<br>");

// Q-4
alert(Math.round(Math.random()*100));

// Q-5
alert(Math.round(Math.random()));
if(Math.round(Math.random())==1){
    document.write("Random coin value: Head")
}
else{
    document.write("Random coin value: Tail")
}

// Q-6
if(Math.random()*1000>=1){
    document.write("Random number between 1 and 100: "+Math.round(Math.random()*100))
}

// Q-7
    // a)
    var usrinp=prompt("Enter your weight in kilograms");
    mynum=parseInt(usrinp);
    alert("The weight of user is: "+mynum+" kilograms");

    // b)
    var usrinp=prompt("Enter your weight in kilograms");
    mynum=parseInt(usrinp);
    alert("The weight of user is: "+mynum+" kilograms");

    // c)
    var usrinp=prompt("Enter your weight in kilograms");
    mynum=parseFloat(usrinp);
    alert(mynum)
    alert("The weight of user is: "+mynum+" kilograms");
    
      // d)
    var usrinp=prompt("Enter your weight in kilograms");
    mynum=parseFloat(usrinp);
    alert("The weight of user is: "+mynum+" kilograms");

// Q-8
var mynum=Math.round(Math.random()*10);
var usrinp=prompt("Enter a number between 1 and 10");
if(usrinp==mynum){
    alert("Congratulations...");
}
else{
    alert("Try again...");
}

// Chapter No. 31-34  --- DATE METHODS
// -----------------------------------

// Q-1
var Date = new Date();
document.write(Date)

// Q-2
var Date = new Date();
var mntharr =["January","February","March","April","May","June","July","August","September","October","November","December"];
document.write("Current Month: "+mntharr[Date.getMonth()])

// Q-3
var Date = new Date();
var dayarr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var currday = dayarr[Date.getDay()]

document.write("Today is "+currday.slice(0,3))

// Q-4
var Date = new Date();
var dayarr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var currday = dayarr[Date.getDay()]
alert(currday)
if (currday.slice(0,3)==="Sat" || currday.slice(0,3)==="Sun"){
  document.write("Today is Fun day")  
} 
else{
    document.write("Today is Boring day")
}

// Q-5
var Date = new Date();
var dayarr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var currdate = dayarr[Date.getDate()]
alert(currdate)
if (currdate>=0 && currdate<=15){
  document.write("First fifteen days of the month")  
} 
else{
    document.write("Second fifteen days of the month")
}

// Q-6
var Date = new Date();
// var EpDate = new Date("1970-01-01");
document.write("Current Date: "+ Date,"<br>");
// document.write("Elapsed milliseconds since January 1, 1970: "+EpDate.getMilliseconds(),"<br>");
document.write("Elapsed milliseconds since January 1, 1970: ","<br>");
document.write("Elapsed minutes since January 1, 1970: ","<br>");

// Q-7
var Date = new Date();
var dayarr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var currhours= dayarr[Date.getHours()]
alert(currhours)
if (currhours>=0 && currhours<=11){
  document.write("Its AM")  
} 
else{
    document.write("Its PM")
}

// Q-8
var Date = new Date("2020-12-31");
document.write("Later Date"+Date,"<br>");
