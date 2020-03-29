import cricketLogo from '../../Resources/sportLogos/cricket.svg';
const sportsLogos={
    cricket:cricketLogo
}
export function getSports(){
    return new Promise((resolve,reject)=>{
        let mockSportsList=[{
            title:"Cricket",
            tag:"cricket",
            notifications:0,
            image:sportsLogos["cricket"]
        }];
        resolve(mockSportsList)
    });
}