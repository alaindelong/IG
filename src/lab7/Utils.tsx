export const convertDate=(date:Date):string =>{
    const yyyy = date.getFullYear()
    let mm = date.getMonth()+1
    let dd = date.getDate()
    let dn =""
    let mn =""
    if(dd<10) dn ="0"+dd
    if(mm <10) mn ="0"+mm
    return  dn+"/"+mn+"/"+yyyy
     
  }
export const compareDate=(source:string, target:string):number =>{
    // 02/08/2023
let ds = source.substring(0,2)
let ms = source.substring(3,5)
let ys = source.substring(6,10)

let dt = target.substring(0,2)
let mt = target.substring(3,5)
let yt = target.substring(6,10)

let date1 = new Date(ms+"/"+ds+"/"+ys)
let date2 = new Date(mt+"/"+dt+"/"+yt)
let diffInTime = date1.getTime()-date2.getTime()
let diffInDay = diffInTime/(1000*3600*24)
return Math.abs(diffInDay)
}  