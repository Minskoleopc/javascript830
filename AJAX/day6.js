

//console.log(e.total_pages)
//e.data[1].email
// e.data.forEach(function(el){
//     console.log(el.email)
// })


// let e = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }


function renderHtml(obj){
    document.write(`<h1>${obj.first_name}</h1>`)
    document.write(`<h1>${obj.last_name}</h1>`)
    document.write(`<h2>${obj.id}</h2>`)
    document.write(`<img src = ${obj.avatar}>`)
    document.write(`<h3>${obj.email}</h3>`)
}

function getUserId(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(res){
        //console.log(res)
        return res.json()
    })
    .then(function(res){
        //console.log(res)
        console.log(res.data[0].id)
        return res.data[0].id
    })
}

function getInfo(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
      return res.data
    })


}

// getUserId(1)
// .then(function(id){
//     return getInfo(id)
// })
// .then(function(data){
//     renderHtml(data)
// })

async function getInforamtion(pageNumber){
    let id = await getUserId(pageNumber)
    let data = await getInfo(id)
    renderHtml(data)
}
getInforamtion(2)







//getUserId(2)