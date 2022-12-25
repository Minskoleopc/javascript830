function getUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return res.data
        })
}


async function getInfo(id, id2, id3) {
    Promise.all(
        [
            getUser(id),
            getUser(id2),
            getUser(id3)
        ]
    )
}
getInfo(1, 2, 3)



