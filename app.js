let btn = document.querySelectorAll(".container button")
let div = document.querySelectorAll(".container div")
console.log(div);
let btn1 = btn[0]
let btn2 = btn[1]
let btn3 = btn[2]
let btn4 = btn[3]
let btn5 = btn[4]
let btn6 = btn[5]

let btn1Element = document.createElement("div")
let btn1Para = document.createElement("p")
btn1Para.textContent = "lorekjadhffkjahfkiahfjhaufhaskufflasshffiufiqfiuqhfiufkjahhadfkjanfdkjbahhbabadfbajskbajkfbfakjbdkadfbkafbakfbkabakdbkasdsbdbakdbkablkabvlakbvalkbavbakbbalkjbakljbbakbakdbakjbnakkbakjbasbasd"
btn1Element.appendChild(btn1Para)
// btn2.after(btn1Element)
// btn3.after(btn1Element)
// btn4.after(btn1Element)
// btn5.after(btn1Element)
// btn6.after(btn1Element)





btn1.addEventListener("click",() => {
    btn1Element.classList.toggle("netflix-content","hide")
    btn1Element.classList.toggle("hiding")
    btn1.after(btn1Element)
})