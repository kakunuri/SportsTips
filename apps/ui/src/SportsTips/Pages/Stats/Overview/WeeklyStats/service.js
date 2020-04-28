const mockData=[
    {
      date:"10-10-2010",
      profit:36.6,
      chance:87.8
    },
    {
      date:"11-10-2010",
      profit:460.6,
      chance:50
    },
    {
      date:"12-10-2010",
      profit:26.6,
      chance:2.8
    },
    {
      date:"13-10-2010",
      profit:106.6,
      chance:17.8
    },
    {
      date:"14-10-2010",
      profit:90.6,
      chance:7.8
    },
    {
      date:"15-10-2010",
      profit:65.3,
      chance:97.8
    },
    {
      date:"16-10-2010",
      profit:6.6,
      chance:37.8
    },
  ]

  export function getWeeklyStats(){
      return new Promise((resolve)=>{
          setTimeout(()=>{
            resolve(mockData)
          },1500)
      })
  }