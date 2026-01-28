let input = document.getElementById('input')
let katta = document.getElementById('katta')
let kichkina = document.getElementById('kichkina')
let light = document.getElementById('light')

let qiymat = 0;

katta.onclick = function(){
    qiymat++;
    input.value = qiymat;
}

kichkina.onclick = function(){
    qiymat = 0;
    input.value = qiymat;
}

light.onclick = function(){
    input.style.backgroundColor = "lightyellow"
    input.style.boxShadow = "0px 0px 30px lightyellow"
    input.style.mixBlendMode = "differnce"
}