class FieldHelper {

    isFieldFilled(field) {
        if(typeof field != 'undefined'){
            return true;
        }
        return false;
        
    }

    
    
}

module.exports =new FieldHelper();