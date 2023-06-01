const Validation=(value:any)=>{
    type Users={
        username?:String;
        password?:any;
    }
    
    let errors:Users={}
    if(!value.username){
        errors.username="Username is required"
    }
    else if(value.username.length< 5){
        errors.username= "Name must be more than 5 characters"

    }
    if(!value.password){
        errors.password="Password is required"
    }
    else if(value.password.length<9){
        errors.password="Password must be more than 9 characters"
    }
    return errors;

}
export default Validation;