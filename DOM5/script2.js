let body = document.querySelector('body')
console.log(body)


body.addEventListener('click',function(event){
    console.log(event.target)
    console.log(event.target.tagName)
    console.log(event.target.className)
})