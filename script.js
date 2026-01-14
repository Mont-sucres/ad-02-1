const h1Element = document.getElementById("change")
h1Element.textContent = "Adios"

const h4Element = document.getElementById("actual")
h4Element.style.color = "orange"

const h2Element =document.getElementById("push")
h2Element.addEventListener("click",(event)=>{
    h2Element.textContent = "Me hicieron click"
    h2Element.style.color = "pink"
})
