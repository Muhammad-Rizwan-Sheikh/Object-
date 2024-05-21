// let studentData ={
//     userName : "Rizwan",
//     age : 20 ,
//     rollNo : 1111,
//     address : "Karachi",
    

// }
// // delete studentData.address
// console.log(studentData.userName);



// let studentData : {
//     name: string;
//     age: number;
//     rollNo: number;
//     address: string;
// }={
//     name : "Rizwan",
//     age : 20,
//     rollNo :1111,
//     address:"karchi",
// }






//                             TYPE ALISES                //


// type IStudent = {
//     name:string, 
//     age:number,
// }

// let student1:IStudent = {
//     name : "Rizwan",
//     age : 19,
// }

// let student2:IStudent = {
//     name : "Rizwan",
//     age : 19,
// }
// let student3:IStudent = {
//     name : "Rizwan",
//     age : 19,
// }




// type IRollNum = string | number | boolean
// let rollNum : IRollNum = "5"
// rollNum = 5;


















type IStudent={
    name:string,
    age:number,
    rollNum:number
}

let student:IStudent= {
    name : "Rizwan",
    age : 19,
    rollNum : 12345
}


type ITeacher={
    name:string,
    age:number,
    rollNum:number,
    experience:number
}

let teacher:ITeacher= {
    name : "Rizwan",
    age : 19,
    rollNum : 12345,
    experience : 10
}

type IBoth = IStudent & ITeacher    // intersection

let both : IBoth={
    name :"Rizwan",
    age : 19,
    rollNum : 12345,
    experience : 10

}


console.log(both)



// ANSWERE { name: 'Rizwan', age: 19, rollNum: 12345, experience: 10 }    //






















