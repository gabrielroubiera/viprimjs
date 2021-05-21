const validateField = require('./validateFields');

function validateFields(campos){
    
    let fields = [];
    let field = {}
    let erromsg = [];
    let camposArray = campos;

    for(let i = 0; i < camposArray.length; i++){
        let fieldName = camposArray[i].campo;
        let valor = camposArray[i].valor;
        let validaciones = camposArray[i].validaciones;

        //? Debo lograr hacer que nombre y edad sean una variable.
        field = {field: fieldName, value: valor};
        fields.push(field);
        erromsg = validateField(fieldName, valor, validaciones);
    }
    
    if(erromsg.length > 0){
        return {validateStatus: false, erroMessage: erromsg, fields: fields}
    } else {
        return {validateStatus: true, erroMessage: [], fields: fields}
    }
}

module.exports = validateFields;