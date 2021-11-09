class FieldHelper {

    checkFieldIsEmpty(field) {
        if(!field){
            throw new Error("The field: "+field+" is empty");
        }
    }

    
    
}

module.exports =new FieldHelper();