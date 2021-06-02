const qs = (e)=> document.querySelector(e)

window.addEventListener('load',()=>{

    let formulario = qs('form.form-reg')
    let email = formulario.elements[0];
    let name = formulario.elements[1];
    let lastname = formulario.elements[2];
    let password = formulario.elements[3];
    let bases = formulario.elements[4];

    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]:+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    let regExLetras = /^[a-zA-Z\sñáéíóúü]*$/

    email.addEventListener('blur',()=>{
        switch (true) {
            case !email.value:
                errorEmail.innerHTML = "* obligatorio";
                email.classList.add('is-invalid');
                break;
            case !regExEmail.test(email.value) :
                errorEmail.innerHTML = "Ingrese un email válido";
                email.classList.add('is-invalid');
                break;
            default:
                errorEmail.innerHTML = "";
                email.classList.remove('is-invalid');
                email.classList.add('is-valid');
                break;
        }
    })
    name.addEventListener('blur',()=>{
        switch (true) {
            case !name.value:
                errorName.innerHTML = "* obligatorio";
                name.classList.add('is-invalid');
                break;
            case !regExLetras.test(name.value) :
                errorName.innerHTML = "Solo letras por favor";
                name.classList.add('is-invalid');
                break;
            case name.value.length < 2:
                errorName.innerHTML = 'El nombre debe tener al menos dos letras';
                name.classList.add('is-invalid');
                break;
            default:
                errorName.innerHTML = "";
                name.classList.remove('is-invalid');
                name.classList.add('is-valid');
                break;
        }
    })
    lastname.addEventListener('blur',()=>{
        switch (true) {
            case !lastname.value:
                errorLastName.innerHTML = "* obligatorio";
                lastname.classList.add('is-invalid');
                break;
            case !regExLetras.test(lastname.value) :
                errorLastName.innerHTML = "Solo letras por favor";
                lastname.classList.add('is-invalid');
                break;
            case lastname.value.length < 2:
                errorLastName.innerHTML = 'El apellido debe tener al menos dos letras';
                lastname.classList.add('is-invalid');
                break;
            default:
                errorLastName.innerHTML = "";
                lastname.classList.remove('is-invalid');
                lastname.classList.add('is-valid');
                break;
        }
    })
    password.addEventListener('blur',()=>{
        switch (true) {
            case !password.value:
                errorPassword.innerHTML = "* obligatorio";
                password.classList.add('is-invalid');
                break;
            case !regExPass.test(password.value) :
                errorPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número";
                password.classList.add('is-invalid');
                break;
            default:
                errorPassword.innerHTML = "";
                password.classList.remove('is-invalid');
                password.classList.add('is-valid');
                break;
        }
    })

    bases.addEventListener('change', () => {
        if(!bases.checked){
            errorBases.innerHTML = 'Para crear una cuenta debes aceptar bases y condiciones'
        }else{
            errorBases.innerHTML = "";
        }
    })
    formulario.addEventListener('submit',(e)=>{
        let error = false;
        e.preventDefault();

        let elementsForm = formulario.elements;

        for (let index = 0; index < elementsForm.length -1; index++) { /* -1 para que no cuente al boton cuando recorre el array */
            if (!elementsForm[index].value) {
                elementsForm[index].classList.add('is-invalid')
                msgError.innerHTML = "Los campos señalados son obligatorios"
                error = true;
            }            
        }
        if(!bases.checked){
            msgBases.innerHTML = 'Para crear una cuenta debes aceptar bases y condiciones'
            msgError.innerHTML = "Los campos señalados son obligatorios"
            error = true;
        }else{
            if(!error){
                formulario.submit()
            }
        }
    })   
})