window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        let navbar = document.querySelector(".navbar")
        navbar.classList.toggle("active" , window.scrollY > 0)
        
    })
})
window.addEventListener("load", () => {
    document.getElementById("end_button").addEventListener("click" , () => {
        let input1 = document.getElementById("input_1")
        let input2 = document.getElementById("input_2")
        let input3 = document.getElementById("input-3")
        let set  = new Set()
        set.add({name: input1})
        set.add({family: input2})
        set.add({job: input3})
        console.log(set)
        fetch(("https://echo.htmlacademy.ru"), {
            method : "post",
            body: set
        })
    })
})