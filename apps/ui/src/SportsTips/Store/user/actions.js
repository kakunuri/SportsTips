export const setUserDetails=(userDetails)=>{
    return {
        type:"LOGIN",
        userDetails,
        segmentName:"user"
    }
}

export const logout=()=>{
    return{
        type:"LOGOUT",
        segmentName:"user"
    }
}