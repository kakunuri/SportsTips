const mockData=[{
    image:"https://www.gstatic.com/webp/gallery/4.sm.webp",
    name:"Something came up in my life",
    timestamp:"12:02:02pm 27/10/2020"
},{
    image:"https://www.gstatic.com/webp/gallery/4.sm.webp",
    name:"Something",
    timestamp:"12:02:02pm 27/10/2020"
},{
    image:"https://www.gstatic.com/webp/gallery/4.sm.webp",
    name:"Something",
    timestamp:"12:02:02pm 27/10/2020"
},{
    image:"https://www.gstatic.com/webp/gallery/4.sm.webp",
    name:"Something",
    timestamp:"12:02:02pm 27/10/2020"
}]
export function getNewsData(){
    return new Promise((res)=>{
        res(mockData);
    })
}