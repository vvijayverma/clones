
export const checkValidData=(email,password)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}

export const trimInputValue =(data)=>{
   const trimmedData = {};
   for(const key in data){
    if(data.hasOwnProperty(key)){
        const value = data[key];
        if(typeof value === 'string'){
            trimmedData[key] = value.trim();
        }else{
            trimmedData[key]= value;
        }
    }
   }
   return trimmedData;
}