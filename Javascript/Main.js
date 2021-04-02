/*let imAlone;
let nullVariable = true;
let variable = "I am string : "+3+" : "+nullVariable;
let variable2 = 1;
let variable3 = '1';*/
//console.log(imAlone);
//console.log("variable type: ",typeof(variable));
//console.log("variable2 type: ",typeof(variable2));
//console.log("variable3 type: ",typeof(variable3));

//console.log(variable2==variable3);

const AdminName = "Captain Admin";

//AdminName = "I am nobody";

//variable = 2+'3';
//variable = parseInt(variable);
//variable2 = "I am not an integer anymore, I've changed."; 
//variable3 = true;
//console.log("variable was changed, now it's tpye: ",typeof(variable));
//console.log("variable2 was changed, now it's tpye: ",typeof(variable2));
//console.log("variable3 was changed, now it's tpye: ",typeof(variable3));
//console.log(variable);

/*let human = {
    name : "my name",
    age : 23,
    isWoman : false
}*/
//human.age += 2;
//console.log(human);

//-------------------------

//arrays

/*let arr = []; //lots of way to do this
arr.push(3,3,4,5);//always start with zero index
arr.push(human);
arr.push([2,3,8]);*/
//let firstElemAndRemoved = arr.shift();
//console.log(firstElemAndRemoved);
//let lastElemAndRemoved = arr.pop();
//console.log(lastElemAndRemoved);
//console.log(arr);

//let index = arr.indexOf(8); //what if not in the array -1
//console.log(index);

//arr.splice(1,0,10);
//console.log(arr);

//there are a lot of functions with arrays, but you can make them too.

//-----------------------

//Statments
/*
let imPig = true;
let imOverWeight = true;
if(imPig){
    console.log("I should eat more!");
}
else if(imPig && imOverWeight){
    console.log("The farmer will invite me to a dinner");
}
else{
    console.log("I should eat less!");
}
let whatIsDayToday = "Monday";
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
/*let arr = ["I","I am important!","I am hot!","I am super!","I am proud of myself!"];
for(let i=0;i<arr.length;i++){
    console.log((i+1)+". element: ",arr[i]);
}
for (let element of arr){
    console.log(element);
}*/

let arr = [1,2,3,4,5,6,9];
let searchedItem = 5;
for(let item of arr){
    if(item===searchedItem){
        console.log("I found it!");
        continue;
    }
    console.log(item.key,"Next turn.")
}

//return, break, continue
