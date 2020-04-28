const mockData=[
    {
      date:"Jan '09",
      profit:36.6,
      chance:87.8
    },
    {
      date:"Feb '09",
      profit:460.6,
      chance:50
    },
    {
      date:"Mar '09",
      profit:26.6,
      chance:2.8
    },
    {
      date:"Apr '09",
      profit:106.6,
      chance:17.8
    },
    {
      date:"May '09",
      profit:90.6,
      chance:7.8
    },
    {
      date:"Jun '09",
      profit:65.3,
      chance:97.8
    },
    {
      date:"Jul '09",
      profit:6.6,
      chance:37.8
    },
    {
      date:"Aug '09",
      profit:26.6,
      chance:2.8
    },
    {
      date:"Sep '09",
      profit:106.6,
      chance:17.8
    },
    {
      date:"Oct '09",
      profit:90.6,
      chance:7.8
    },
    {
      date:"Nov '09",
      profit:65.3,
      chance:97.8
    },
    {
      date:"Dec '09",
      profit:6.6,
      chance:37.8
    },
  ]
export function getMonthlyStats(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(mockData)
        },2500)
    })
}