let students  = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:34,
        city:"pune",
        skills:["python","javascript","cpp","html",'CSS3'],
        marks:80
    },
    {
        firstName:"poorva", // purva
        lastName:"vyas",
        age:29,
        city:"ujjain",
        skills:["python","cpp"],
        marks:79
    },

    {
        firstName:"amol",
        lastName:"rao",
        age:32,
        city:"nagpur",
        skills:["sql","python","css"],
        marks:43
    },

    {
        firstName:"abhisha",
        lastName:"burande",
        age:25,
        city:"nagpur",
        skills:["sql","javascript","tableau","css","python"],
        marks:23
    }

]

// program 4 - username with city nagpur
students.forEach(function(el){
    if(el.city == "nagpur"){
        console.log(el.firstName)
    }
})

// program 5
// add salesforce to every student

students.forEach(function(el){
    el.skills.push('sales force')
})
console.log(students)

// program 6
// amol:4
students.forEach(function(el){
    console.log(el.firstName+":"+el.skills.length)
})

// program 7
// userwith city nagpur && python

let q1 = students.filter(function(el){
    return el.city =="nagpur" && el.skills.includes('python')
})
console.log(q1)
q1.forEach(function(el){
    console.log(el.firstName)
})

students.forEach(function(el){
    if(el.city == "nagpur" && el.skills.includes('python')){
        console.log(el.firstName)
    }
})

// program 8
//skills of person with firstName starting from 'a'
// amol:7
students.forEach(function(el){
    if(el.firstName.startsWith('a')){
        console.log(el.firstName +":"+ el.skills)
    }
})

// program 9 
// add country:"india" to all students
students.forEach(function(el){
    el['country']  = "India"
})

// program 10
// 50 < -------> 10
// 50 > sum

students.forEach(function(el){
    if(el.marks < 50){
        el.marks = el.marks + 10
    }
})
console.log(students)

let q22 = students.filter(function(el){
    return el.marks > 50
})

let q223 = q22.reduce(function(acc,el){
    return acc + el.marks
},0)
console.log(q223)




/// revision////////////////////////////////

// console.log(students[0].firstName)
// console.log(students[0]['firstName'])
// // update name for poorva
// students[1].firstName = "purva"
// console.log(students[1])

// // program 1
// // print fullName
// for(let i = 0 ; i < students.length ; i++){
//     //console.log(i)
//     console.log(students[i].firstName + students[i].lastName)
// }


// //using forEach()
// students.forEach(function(el){
//     console.log(el.firstName + el.lastName)
//     console.log(el['firstName'] + el['lastName'])
// })

// // program 2
// students.forEach(function(el){
//     if(el.age > 25){
//         console.log(el.firstName + el.lastName)
//     }
// })



// let allAbove25 = students.filter(function(el){
//     return el.age > 25
// })
// console.log(allAbove25) //[obj,obj,obj]
// allAbove25.forEach(function(el){
//     console.log(el.firstName , el.lastName)
// })

// // Program3
// // sum of ages of all student (avg age)
// let sumA = students.reduce(function(acc,el){
//     return el.age + acc    // acc ==> 34
// },0)
// console.log(sumA/students.length)










