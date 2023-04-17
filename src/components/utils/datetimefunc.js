
import { DateTime } from "luxon";


export const datetimeFunc = ({datetime}) => {

    // let DateTime=new Date()

    let localeString=DateTime.fromISO(datetime).toLocaleString();    
    let myDate=DateTime.fromISO(datetime); myDate=myDate.minus({hour:3}); //setzone ile timezonu ayarlayamadım. o nedenle 3 saat çıkarttım
    const now = DateTime.now().setZone('local');
    
    // const diff = myDate.diff(now, ["years", "months", "days", "hours", "minutes"]);
    let diffMinutes = now.diff(myDate, ["minutes"])?.values?.minutes; diffMinutes=Math.floor(diffMinutes);
    let diffHours = now.diff(myDate, ["hours"])?.values?.hours; diffHours=Math.floor(diffHours);
    let diffDays = now.diff(myDate, ["days"])?.values?.days; diffDays=Math.floor(diffDays);
    let diffMonths = now.diff(myDate, ["months"])?.values?.months; diffMonths=Math.floor(diffMonths);
    let diffYears = now.diff(myDate, ["years"])?.values?.years; diffYears=Math.floor(diffYears);
    

//  console.log("diff.toObject(): ", diff.toObject());

 let timeAgo="";
 //let hours=0;  // herhangi bir yerde salt saat kontrolü yapacaksak saate ihtiyacımız olacak

if (diffHours<1 && diffMinutes<6 && diffDays<1 && diffMonths<1 && diffYears<1 ) { 
  timeAgo=`Şimdi`   
}
else if (diffHours<1 && diffDays<1 && diffMonths<1 && diffYears<1) { 
  timeAgo=`${diffMinutes} dk. önce`   
}
else if (diffHours>0  && diffDays<1  && diffMonths<1 && diffYears<1) { 
  timeAgo=`${diffHours} saat önce `   
}
else  if (  diffMonths<1 && diffYears<1) { 
  timeAgo=`${diffDays} gün önce`   
}
else if (diffMonths>=1  && diffYears<1) { 
  timeAgo=`${diffMonths} ay önce`  
}   
if (diffYears>=1) { // burada ayın gününe göre detaylandırmak lazım
  timeAgo=`${diffYears} yıl önce `  
}  








               
              
  


// console.log("sssstimeFirst:",datetime);
// console.log("sssstimeDate:",myDate);
// console.log("sssstimeNow:",now);
// console.log("sssstimeAgo:",diffHours);

 return {localeString , timeAgo, diffMinutes, diffHours, diffDays, diffMonths, diffYears }

}
