var elInp = document.querySelector('.inp')

function fn(){

    var Inp = elInp.value

    if( Inp.length > 8  ){
        elInp.style. backgroundColor = 'green'
        elInp.style. color = 'wheat'
     }else if(Inp.length < 8 ){
        elInp.style. backgroundColor = 'red'
        elInp.style. color = 'wheat'
   } 
   elInp.value = ''
   elInp = focus()
}


    







































