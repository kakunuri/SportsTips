const mockData=[{
    image:"",
    name:"Something",
    timestamp:"Some Time"
},{
    image:"",
    name:"Something",
    timestamp:"Some Time"
},{
    image:"",
    name:"Something",
    timestamp:"Some Time"
},{
    image:"",
    name:"Something",
    timestamp:"Some Time"
}]
export function getNewsData(){
    return new Promise((res)=>{
        res(mockData);
    })
}