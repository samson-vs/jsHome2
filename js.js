let arr =[1,2,'html',4,false,6,'js',8,9,true]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// ----------------------------------------------------------------------------------------------------

let blackSun= {
    title: 'Black sun',
    pageCount: 304,
    genre: 'historical-novel'
}

console.log(blackSun);

let mrMercedes ={
    title: 'MR Mercedes',
    pageCount: 544,
    genre: 'novel'
}
console.log(mrMercedes);

let holod ={
    title: 'kholodnyi Yar',
    pageCount: 464,
    gener: 'historical-novel'
}

console.log(holod);

// --------------------------------------------------------------------------------------------------

let blackSun2= {
    title: 'Black sun',
    pageCount: 304,
    genre: 'historical-novel',
    authors :[{name:'Vasyl Shkliar', age: 71}]
}

console.log(blackSun2);

let mrMercedes2 ={
    title: 'MR Mercedes',
    pageCount: 544,
    genre: 'novel',
    authors:[{name: 'Stiven King', age: 75}]
}
console.log(mrMercedes2);

let holod3 ={
    title: 'kholodnyi Yar',
    pageCount: 464,
    gener: 'historical-novel',
    authors:[{name:'Yurii Horis-Horskiyi', age: `Died in ${48}`}]
}

console.log(holod3);

// ---------------------------------------------------------------------------------------------------

let user =[
    {name:'valera', username: 'sweet', password:123, age: 95},
    {name:'valera', username: 'sweet', password:1234, age: 95},
    {name:'valera', username: 'sweet', password:12345, age: 95},
    {name:'valera', username: 'sweet', password:12346, age: 95},
    {name:'valera', username: 'sweet', password:12347, age: 95},
    {name:'valera', username: 'sweet', password:12348, age: 95},
    {name:'valera', username: 'sweet', password:12349, age: 95},
    {name:'valera', username: 'sweet', password:12341, age: 95},
    {name:'valera', username: 'sweet', password:12343, age: 95},
    {name:'valera', username: 'sweet', password:12345, age: 95},
    {name:'valera', username: 'sweet', password:123467, age: 95},
    ];
console.log(user[0]['password']);
console.log(user[1]['password']);
console.log(user[2]['password']);
console.log(user[3]['password']);
console.log(user[4]['password']);
console.log(user[5]['password']);
console.log(user[6]['password']);
console.log(user[7]['password']);
console.log(user[8]['password']);
console.log(user[9]['password']);
console.log(user[10]['password']);

// ------------------------------------------------------------------------------------------

let x = 0;
if ( x!==0 ){
    console.log(true);
}else {
    console.log(false)
}
//-------------------------------------------------------------------------------------------

let time = +prompt(`ведіть число від 0 до 59`);
if (time<15){
    console.log(`Перша четверть`);
} else if (time>15 && time<=30 ){
    console.log(`Друга четверть`);
} else if(time>30 && time<=45){
    console.log('Третя чверть');
} else if (time>45 && time<=59){
    console.log(`Четверта четверть`);
}

//-------------------------------------------------------------------------------------------
let day = +prompt(`ведіть день від 1 до 31`);
if (day<11){
    console.log(`Перша декада`);
} else if (day>11 && day<=21 ){
    console.log(`Друга декада`);
} else if(day>21 && day<=31){
    console.log('Третя декада');}

// --------------------------------------------------------------------------------------------

let deys = +prompt('розклад на тиждень ');

switch (deys) {
    case 1:
        console.log('Monday')
    break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;

}
// ----------------------------------------------------------------------------------------------

let a = +prompt(`ведіть число`);
let b = +prompt(`ведіть число`);

if (a>b){
    console.log(a);
} else if (a<b){
    console.log(b);
} else if (a===b){
    console.log('рівні')
}

// _____________________________________________________________________________________________________-
 let x2 = `value`;
if (x2 === false || x2 === undefined || x2 === null ){
    x2 = "default";
    console.log(x2);
}




