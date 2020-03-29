export const showLoader=(text) => ({
    type:"SHOW_LOADER",
    text,
    segmentName:"loader"
});

export const hideLoader=()=> ({
    type:"HIDE_LOADER",
    segmentName:"loader"
});