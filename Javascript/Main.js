let imAlone;
let nullVariable = true;
let variable = "I am string : "+ 3 +" : "+nullVariable;
let variable2 = 1;
let variable3 = '1';
//console.log(imAlone);
//console.log(variable2);
//console.log("variable type: ",typeof(variable));

//console.log("variable2 type: ",typeof(variable2));
//console.log("variable3 type: ",typeof(variable3));

//console.log(variable2===variable3);

/*const AdminName = "Captain Admin";
variable3 = 2;
console.log(variable3);*/
//AdminName = "I am nobody";

/*variable = 2+'3';
variable = parseInt(variable);
variable += 2;
console.log(variable,typeof(variable));*/
/*variable = parseInt(variable);
variable2 = "I am not an integer anymore, I've changed."; 
variable3 = true;
console.log("variable was changed, now it's tpye: ",typeof(variable));
console.log("variable2 was changed, now it's tpye: ",typeof(variable2));
console.log("variable3 was changed, now it's tpye: ",typeof(variable3));
console.log(variable);*/

let human = {
    name : "my name",
    age : 23,
    isWoman : false
}
human.age += 2;
human.name = "Im a person.";
//console.log(human);

//-------------------------

//arrays //dynamic and static
/*
let arr = []; //lots of way to do this
arr.push(3);
arr.push(3,3,4,5);//always start with zero index
arr.push(human);
arr.push([2,3,8]);
arr.push(3);*/
//console.log(arr);
//console.log(arr);
/*let firstElemAndRemoved = arr.shift();
console.log(firstElemAndRemoved);
let lastElemAndRemoved = arr.pop();
console.log(lastElemAndRemoved);
console.log(arr);*/
/*
let index = arr.indexOf(3); //what if not in the array -1
//console.log(index);

arr.splice(1,0,10);
console.log(arr);*/

//there are a lot of functions with arrays, but you can make them too.

//-----------------------

//Statments
/*
let imPig = true;
let imOverWeight = true;
if(imPig==false){
    console.log("I should eat more!");
}
else if(imPig && imOverWeight){
    console.log("The farmer will invite me to a dinner");
}
else{
    console.log("I should eat less!");
}

let whatIsDayToday = "Wednesday";
switch(whatIsDayToday){
    case "Monday":
        console.log("I should compalin about it");
        break;
    case "Friday":
        console.log("Let's have a party!");
        break;    
    default : 
        console.log("I don't care, i love it");   
}*/

//------------------------

//Loop



/*for(let i=0;i<10;i++){
    console.log(i);
}*/
//let arr = ["I","I am important!","I am hot!","I am super!","Pig","I am proud of myself!"];
/*for(let i=0;i<arr.length;i++){
    console.log((i+1)+". element: ",arr[i]);
}
for (let element of arr){
    console.log(element);
}*/
/*let i = 0;
while(arr[i]!="Pig"){
    console.log(arr[i]);
    i++;
}*/
/*
let arr = [1,2,3,4,5,6,9];
let searchedItem = 5;
for(let idx in arr){
    if(arr[idx]===searchedItem){
        console.log("I found it!");
        //continue;
        //break;
        return;
    }
    console.log(arr[idx]);
}*/

//---------------
//functions

//nyam();
/*
const nyamnyam = (food) => {
    console.log("I ate this "+food);
    console.log("and i want MORE!");
    nyam(food);
}
function nyam(food){
    console.log("I ate this "+food);
    console.log("and i want MORE!");
}

nyamnyam("Strawberry");*/

//--------------------

//classes


class Programmer{
    constructor(imHired){
        this.name = "I'm a professional programmer.";
        if(imHired){
            console.log("I'm hired, so i am so happy!");
        }
        else{
            console.log("I'm not hired, but i'm i will be");
        }
    }
    whoIAm(){
        return this.name;
    }
    myToDoList(arr){
        return this.myList = {
                name : "Things that are waiting for to get done.",
                list : arr

            }
    }
    
}
let ImBob = new Programmer(true);
console.log(ImBob.whoIAm());
console.log(ImBob.name);
let array = ["make my bed","earn money","clean my room","have a nice chat with somebody"];
console.log(ImBob.myToDoList(array));

//map await reduce find..etc

//OOP 
//*****************≤
//---------------------------------