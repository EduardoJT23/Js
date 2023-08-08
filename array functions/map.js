/* no we'll work with useful array functions
.map
.filter
*/
/*let's say, we have this one array, but we want to know the values inside it
usually a for loop would do the job, but the .map function can do the same as well*/

let animals =["cat","dog","mouse","rooster","horse","bunny"]
//here we see the code for running a .map function, it will show on console all of the objects inside of the array
animals.map((exmpl)=>{
//exmpl here just means the name of the temp variable that will store the object of the array
    console.log(exmpl);
   
})

//now if we wanted for example, to add like a list number to each object in the array
let plus=1;
//for safety and test measures I store the original array into another variable 
const trial=animals;
//using a similar structure, we store the result of this code in a new array called map1 wich will show a "listed" version of the array
const map1=animals.map((test)=>(plus++)+". "+test)
console.log(map1)

//we assign the values in map1 to animals array
animals=map1;

//here we run once more the original array, to see if the changes made stayed
animals.map((exmpl)=>{
    
        console.log(exmpl);
       
    })