const mockData={
    sections:[
        {
            name:"Today's Stats",
            stats:[
                {
                    label:"Win Chance",
                    value:"38.6%"
                },
                {
                    label:"Profit Percentage",
                    value:"86.7%"
                }
            ]
        },
        {
            name:"Overall Stats",
            stats:[
                {
                    label:"Total Number of Bets",
                    value:"1,345"
                },
                {
                    label:"Total Profit",
                    value:"$5,346.5"
                },
                {
                    label:"Total Wins",
                    value:"1,034"
                }
            ]
        },
    ]
}
export function getSomeStats(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(mockData);
        },2000);
    })
}