let errors = [];
let required_status = false;
let fieldString = 0;

function validate(validacion, campo, fieldName, lengthNumber){
    switch (validacion){
        case "required":
            required_status = true;
            if(campo != "0" || campo != 0){
                if(typeof campo == "undefined" || campo == "" || campo == " " || typeof campo == "null" || campo == null){
                    errors.push({'mensaje': `El campo ${fieldName} es obligatorio.`, 'validacion': "Requerido", 'campo': fieldName});
                }
            }
        break;
        //? Datatypes
        case "string":
            if(required_status){
                if(typeof campo != "string"){
                    errors.push({'mensaje': `El campo ${fieldName} debe ser string.`, 'validacion': "Debe de ser un texto", 'campo': fieldName});
                }
            } else if(typeof campo != "undefined"){
                if(campo != null){
                    if(typeof campo != "string"){
                        errors.push({'mensaje': `El campo ${fieldName} debe ser string.`, 'validacion': "Debe de ser un texto", 'campo': fieldName});
                    }
                }
            }
        break;
        case "number":
            if(required_status){
                if(typeof campo != "number"){
                    errors.push({'mensaje': `El campo ${fieldName} debe ser numerico.`, 'validacion': "Debe de ser numerico", 'campo': fieldName});
                }
            } else if(typeof campo != "undefined"){
                if(campo != null){
                    if(typeof campo != "number"){
                        errors.push({'mensaje': `El campo ${fieldName} debe ser numerico.`, 'validacion': "Debe de ser numerico", 'campo': fieldName});
                    }
                }
            }
        break;
        case "boolean":
            if(required_status){
                if(typeof campo != "boolean"){
                    errors.push({'mensaje': `El campo ${fieldName} debe ser un boleano.`, 'validacion': "Debe de ser un boleano", 'campo': fieldName});
                }
            } else if(typeof campo != "undefined"){
                if(campo != null){
                    if(typeof campo != "boolean"){
                        errors.push({'mensaje': `El campo ${fieldName} debe ser un boleano.`, 'validacion': "Debe de ser un boleano", 'campo': fieldName});
                    }
                }
            }
        break;
        //? Arrays
        case "array":
            if(required_status){
                if(typeof campo != "object"){
                    errors.push({'mensaje': `El campo ${fieldName} debe ser un arreglo.`, 'validacion': "Debe de ser un arreglo", 'campo': fieldName});
                }
            } else if(typeof campo != "undefined"){
                if(campo != null){
                    if(typeof campo != "object"){
                        errors.push({'mensaje': `El campo ${fieldName} debe ser un arreglo.`, 'validacion': "Debe de ser un arreglo", 'campo': fieldName});
                    }
                }
            }
        break;
        case "arrayString":
            if(required_status){
                if(typeof campo != "object" || campo == null){
                    errors.push({'mensaje': `El campo ${fieldName} debe ser un arreglo de string.`, 'validacion': "Debe de ser un arreglo de string", 'campo': fieldName});
                } else {
                    let count = 0;
                    for(let i = 0; i < campo.length; i++){
                        if(typeof campo[i] != "string"){
                            count++;
                        }
                    }
                    if(count > 0){
                        errors.push({'mensaje': `El campo ${fieldName} debe ser un arreglo de string.`, 'validacion': "Debe de ser un arreglo de string.", 'campo': fieldName});
                    }
                }
            } else if(typeof campo != "undefined"){
                if(campo != null){
                    if(typeof campo == "object"){
                        let count = 0;
                        for(let i = 0; i < campo.length; i++){
                            if(typeof campo[i] != "string"){
                                count++;
                            }
                        }
                        if(count > 0){
                            errors.push({'mensaje': `El campo ${fieldName} debe ser un arreglo de string.`, 'validacion': "Debe de ser un arreglo de string.", 'campo': fieldName});
                        }
                    } else {
                        errors.push({'mensaje': `El campo ${fieldName} debe ser un arreglo de string.`, 'validacion': "Debe de ser un arreglo de string.", 'campo': fieldName});
                    }
                }
            }
        break;
        case "arrayNumber":
            if(required_status){
                if(typeof campo != "object" || campo == null){
                    errors.push({'mensaje': `El campo ${fieldName} debe ser un arreglo de numeros.`, 'validacion': "Debe de ser un arreglo de numeros", 'campo': fieldName});
                } else {
                    let count = 0;
                    for(let i = 0; i < campo.length; i++){
                        if(typeof campo[i] != "number"){
                            count++;
                        }
                    }
                    if(count > 0){
                        errors.push({'mensaje': `El campo ${fieldName} debe ser un arreglo de numeros.`, 'validacion': "Debe de ser un arreglo de numeros.", 'campo': fieldName});
                    }
                }
            } else if(typeof campo != "undefined"){
                if(campo != null){
                    if(typeof campo == "object"){
                        let count = 0;
                        for(let i = 0; i < campo.length; i++){
                            if(typeof campo[i] != "number"){
                                count++;
                            }
                        }
                        if(count > 0){
                            errors.push({'mensaje': `El campo ${fieldName} debe ser un arreglo de numeros.`, 'validacion': "Debe de ser un arreglo de numeros.", 'campo': fieldName});
                        }
                    } else {
                        errors.push({'mensaje': `El campo ${fieldName} debe ser un arreglo de numeros.`, 'validacion': "Debe de ser un arreglo de numeros.", 'campo': fieldName});
                    }
                }
            }
        break;
        //? lenghts
        case "max":
            fieldString = campo.toString().length;
            if(required_status){
                if(fieldString > lengthNumber){
                    errors.push({'mensaje': `El campo ${fieldName} debe tener menos ${lengthNumber} digitos.`, 'validacion': `Debe tener menos ${lengthNumber} digitos`, 'campo': fieldName});
                }
            } else if(typeof campo != "undefined"){
                if(campo != null){
                    if(fieldString > lengthNumber){
                        errors.push({'mensaje': `El campo ${fieldName} debe tener menos ${lengthNumber} digitos.`, 'validacion': `Debe tener menos ${lengthNumber} digitos`, 'campo': fieldName});
                    }
                }
            }
        break;
    }
    return errors;
}

module.exports = validate;