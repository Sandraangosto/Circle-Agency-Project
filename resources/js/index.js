/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

/*Logica botón menú responsive*/
const btnmenu = document.getElementsByClassName('btncollapsemenu');
let isBtnMenuOpen = false;
btnmenu[0].addEventListener('click', () => {

    console.log(isBtnMenuOpen);

    let elems = document.getElementById('lista-collapse').getElementsByTagName('li');
    for (let i = 0; i < elems.length; i++) {
        if(isBtnMenuOpen){
            elems[i].className="box";
        }else{
            elems[i].className="box-show"
        } 
        
    }

    if(!isBtnMenuOpen){
        btnmenu[0].getElementsByTagName('i')[0].className="fa-solid fa-xmark fa-2xl";
        isBtnMenuOpen=true;
    }else{
        btnmenu[0].getElementsByTagName('i')[0].className="fa-solid fa-bars fa-2xl";
        isBtnMenuOpen=false;
    }
  });