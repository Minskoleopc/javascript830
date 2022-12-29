// Promise.all
// Promise.race
// Promise.allSettled
// Promise.all
// function getUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)
//         .then(function (res) {
//             if (res.ok) {
//                 return res.json()
//             }
//             else {
//                 return new Error('new error found')
//             }
//         })
// }

// async function getUsers(id, id1, id2) {
//     try {
//         let a = await Promise.all([
//             getUser(id),
//             getUser(id1),
//             getUser(id2)
//         ])
//         console.log(a)
//     }
//     catch (err) {
//         console.log(err)
//     }

// }
// getUsers(1, 2, 332323)

// Promise.race

function getUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            if (res.ok) {
                return res.json()
            }
            else {
                return new Error('new error found')
            }
        })
}
function timeOut(sec){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject('Too much time')
        },sec*1000)
    })
}

// async function getUsersB(id, sec) {
//     try {
//         let a = await Promise.race([
//             getUser(id),
//             timeOut(sec)
//         ])
//         console.log(a)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// getUsersB(1,1)


// async function getUsersB(id, sec) {
//         let a = await Promise.allSettled([
//             getUser(id),
//             timeOut(sec)
//         ])
//         console.log(a)
// }
// getUsersB(1,1)


async function getUsersB(id,id2,sec) {
        let a = await Promise.any([
            timeOut(sec),
            getUser(id),
            getUser(id2),
        ])
        console.log(a)
}
getUsersB(1,2,3)