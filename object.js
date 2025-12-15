const marvel_heroes=["shafiq","rafiq","vijay"];
console.log(marvel_heroes);
const dc_heroes=["Shushant","Sudhanshu","Akib"]
console.log(dc_heroes);

const pushHeroes=marvel_heroes.push(dc_heroes);
console.log(pushHeroes);

const concat_heroes=marvel_heroes.concat(dc_heroes);
console.log(concat_heroes[3][0])

const all_heroes=[...dc_heroes,...marvel_heroes]
console.log(all_heroes);


const anothe_arra=[1,2,3,[4,5,6],[6,7,[4,5]]];
const real_another_arra=anothe_arra.flat(Infinity);
console.log(real_another_arra);

console.log(Array.isArray(anothe_arra));

console.log(Array.from(anothe_arra));
console.log(Array.isArray("Hitesh"))

let score1=100
let score2=300
let score3=3300
console.log([score1,score2,score3]);


const Jsuser={
    name: "Hitesh",
    age:18,
    location:"jaipur",
    Email:"hitesh@google.com",
    isLoggedIn: false,
    lastloginDays:["Monday","Sunday"]
}
console.log(Jsuser.lastloginDays);

Jsuser.lastloginDays=["Friday"];
console.log(Jsuser.lastloginDays);
// Object.freeze(Jsuser);

Jsuser.Email="sheikhrafiullah57@gmail.com"
console.log(Jsuser.Email);

Jsuser.greeting= function(){
    console.log("Hello js user");
}
console.log(Jsuser.greeting());

Jsuser.greetingtwo=function(){
    console.log(`Hello js user ${Jsuser.name}`);
}

console.log(Jsuser.greetingtwo());


//vide=17
// const tinderUser=new Object();
// console.log(tinderUser);
const tinderUser={};
console.log(tinderUser);


tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularuser={
    email:"sheikhrafiullah57@gmail.com",
    userfullname:{
        fullname:{
            First_Name:"Shafiq",
            Last_Name:"Shekh"
        }
    }
}

console.log(regularuser.userfullname.fullname.Last_Name);

//4

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

const obj3={obj1,obj2};
console.log(obj3)

const obj4={...obj1,...obj2};
console.log(obj4)

console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course={
    course_name: "JavaScript",
    price:"999",
    courseInstructor:"Hitesh"
}

console.log(course)
console.log(course.courseInstructor);
const {courseInstructor:instructor}=course
console.log(instructor);




