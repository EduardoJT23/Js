/* ARROW FUNCTIONS  */


/*first we have common Js functions  those are the common functions
you would encounter on Js*/
function examplefunction (){

}
/* now we have an arrow function
it's basically the same on usage terms but with another presentation*/
const examplearrowfunction = () =>{
}
/*the reason to prefer arrow functions over normal ones is because "components"
in react, work with a similar structure look*/

const componexample =() =>{
    return <div> </div>
}
/*also because it helps when working with anonymous functions example */
/*<button onClick={}
//usually you would just reference the function the button would do inside the brackets
    ></button> */

    <button2 onClick={() =>{console.log("hi bitches")}}
/*using an anonymous function would allow you to add what you want that button to do directly, that way you don't actually need 
 to create and declare a function to only this, it's quite used for react*/
    ></button2>


    /*TERNARY OPERATORS*/

    /* usin let for variables instead of var is useful because they will be only useable for a specific part of the code
    instead of the whole code, unless you want them to be used for the whole code use let*/
    let ejstring ="variable string";
    let ejnum=24;


/* OBJECTS*/

/*now first let's understand objects as an entity that has a set of different values basically variables that may or not be constant
let's say for example this one*/
const cellphone = {
model:"AGT135",
year: 2020,
ram: "8GB",
rom:"256GB",
};
/*In this one, we have a cell phone as an object, inside the object there's a set of values that represent some of the specs of the object
 now to work with those values we would need to take them out*/

 const modelong =model.cellphone
 const yearlong =year.cellphone
 /* we declared two variables now, model and year, each one has the same value as the one inside the object
 the problem is, this method of doing it would require more lines of code, and would look more messy*/
 const{model, year, ram, rom}=cellphone;
 /*this way of doing requires less space and works the same way*/

 /*Other thing to note, if there's an object using values that have already been declared before, there's no need to make them as new ones
 inside the object */

 const drink="beer"
 const salad= "sour"
 const mealorder={
    salad,
    drink,
    maindish:"beef",
    desert:"cake",
/*see, in this case, there's already two of the four values defined already, and because they already are defined, we just write the name of the
variable inside to reference it*/
 }

 /*now as another case, lets say, you're making a website, you need multiple kind of users, and they all share a good chunk of the same values
 and just some of them have to be different, you would think that you need to make them from scratch each one, but well, there's a way to cut down
 some of the work
 */
 const stduser ={
    usrname:"whom",
    dateregister:"12/06/2020",
    verified:"yes",
    id:"s12",

 }
 /* now in this case we made "stduser"and "bttruser" while stduser was built the usual way, bttruser is build differently, thats because by writing "...stduser"
  we are letting the code know that we're going to use the same values in stduser for bttruser, and by adding "username:"", we're saying that that specific value,
  is not going to be the same"*/
 const bttruser={...stduser,usrname:"grant",id:"s89"}
 /*similar for objects you can fasten times with arrays too */
 const sports=["golf","soccer","diving"]
//array sports will contain "golf, soccer, and diving"
 const sportsV2=[...sports,"tennis"]
 //array sportsV2 will contain golf, soccer diving(the ones in sports array) and tennis