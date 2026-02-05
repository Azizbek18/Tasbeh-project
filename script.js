let input = document.getElementById('input')
let katta = document.getElementById('katta')
let kichkina = document.getElementById('kichkina')
let light = document.getElementById('light')

let qiymat = 0;

katta.addEventListener('click',()=>{
    qiymat++;
    input.value = qiymat;
})
kichkina.addEventListener('click',()=>{
    qiymat = 0;
    input.value = qiymat;
});
light.addEventListener("click", function(){
    if(input.style.backgroundColor === "lightyellow"){
        input.style.backgroundColor = "white";
        input.style.boxShadow = "none";
    } else {
        input.style.backgroundColor = "lightyellow";
        input.style.boxShadow = "0px 0px 30px lightyellow";
    }
});