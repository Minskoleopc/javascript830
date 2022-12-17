// sync call 


// async call


// API call one  --- 3 seconds
// API call two  ---6 seconds 
// API call three --- 9 seconds

// sync
//async


// API to get single user info


function getUserInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
       // console.log(res.data)
        return res.data
    })
}


async function getUserInfos(id,id2,id3){
    let a = await getUserInfo(id) //2
    let b = await getUserInfo(id2)//4
    let c = await getUserInfo(id3)//6
    console.log(a,b,c)
}


//getUserInfos(1,2,3)
// async function getUsersInfo(id,id2,id3){
//     let info = await Promise.all([
//         getUserInfo(id),
//         getUserInfo(id2),
//         getUserInfo(id3)
//     ])
//     console.log(info)
// }
// getUsersInfo(1,2,3)


// Promise.all()
async function getUserss(){
   let data = await Promise.all([
        Promise.resolve('hello'),
        Promise.resolve('Bye'),
        Promise.resolve('hello2'),
   ])
   console.log(data)
}
getUserss()


