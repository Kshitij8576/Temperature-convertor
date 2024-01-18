var cel = document.querySelector("#cel")
var far = document.querySelector("#far")

cel.addEventListener("input",function(){
    let a = this.value
    let b = (a*9/5)+32
    far.value = b
})
far.addEventListener("input",function(){
    let a = this.value
    let b = (f-32)*5/9
    cel.value = b
})