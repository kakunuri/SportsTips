export const alert=(text)=>{
    return {
        type:"ALERT",
        text,
        segmentName:"alert"
    }
}

export const hideAlert=()=>{
    return{
        type:"CLOSE_ALERT",
        segmentName:"alert"
    }
}