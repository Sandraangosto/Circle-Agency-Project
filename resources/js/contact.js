/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

const sendForm = (preventForm) => {
    preventForm.preventDefault();
    let name = document.querySelector('#nombre').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let message = document.querySelector('#mensaje').value;

    //console.log(`${name} ${email} ${phone} ${message}`);
    if (name.toLowerCase() == "ironhack"){
        document.querySelector('.alertaIronHack').style.display = "block";
        setTimeout(()=> document.querySelector('.alertaIronHack').style.display = "none", 6000);
    }else{
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: name,
                body: `${email} ${phone} ${message}`,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => {
                if(response.status===201){
                    //alert('Thank you, your message have been send.');
                    document.querySelector('.alerta').style.display = "block";
                    setTimeout(()=> document.querySelector('.alerta').style.display = "none", 6000);
                    document.getElementById("enviarForm").reset();
                } else {
                    document.querySelector('.alertaError').style.display = "block";
                    setTimeout(()=> document.querySelector('.alertaError').style.display = "none", 6000);
                }
                return response.json();
            })
            .then((json) => console.log(json));
    }
}

document.querySelector('#enviarForm').addEventListener('submit', sendForm);

