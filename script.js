const btn_l = document.querySelector(".bot_left")
const btn_r = document.querySelector(".bot_right")
const container = document.querySelectorAll(".itens")

v = container.length -1
c = 0

function add(){
    const r = document.querySelector('.itens.active')
    r.classList.remove('active')

    container[c].classList.add('active')
}

btn_r.addEventListener('click', () => {

    if(c < v){
        c = c +1
        add()
        
    }
    else{
        c = 0
        add()
    }

})
btn_l.addEventListener('click', () => {

    if(c >0){
        c = c -1
        add()
        
    }
    else{
        c = v
        add()
    }

})
