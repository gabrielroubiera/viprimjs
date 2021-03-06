const validate = require('./validate');


function validateField(fieldName, campo, validaciones = []){
    let erromsg = [];
    let errors = [];
    let lengthNumber = 0;
    for(let i = 0; i < validaciones.length; i++){
        
        if (validaciones[i].indexOf(':') == -1){
            errors = validate(validaciones[i], campo, fieldName);
        } else {
            lengthNumber = validaciones[i].split(':')[1];
            errors = validate(validaciones[i].split(':')[0], campo, fieldName,lengthNumber);
        }

    }
    if(errors.length > 0){
        erromsg = errors;
    }
    return erromsg;
}

module.exports = validateField;