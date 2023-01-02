
(() => {

    const btns = document.querySelector('.btn')
    const btns2 = document.querySelector('.btn2')
    const btns3 = document.querySelector('.btn3')
    const btns4 = document.querySelector('.btn4')
    const btns5 = document.querySelector('.btn5')

    const input = document.querySelector('input')

    const btnTxt = btns.textContent
    const btnTxt2 = btns2.textContent
    const btnTxt3 = btns3.textContent
    const btnTxt4 = btns4.textContent
    const btnTxt5 = btns5.textContent

    

    btns.addEventListener('click', (evt) => {
        input.value = btnTxt
    })

    btns2.addEventListener('click', (evt) => {
        input.value = btnTxt2
    })

    btns3.addEventListener('click', (evt) => {
        input.value = btnTxt3
    })

    btns4.addEventListener('click', (evt) => {
        input.value = btnTxt4
    })

    btns5.addEventListener('click', (evt) => {
        input.value = btnTxt5
    })

})()


