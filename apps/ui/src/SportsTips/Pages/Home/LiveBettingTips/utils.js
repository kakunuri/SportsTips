export function prepareTabOption(value){
    return {
        label:value,
        value
    }
}

export function prepareTabOptions(options){
    return options.map(prepareTabOption)
}