const getstartDate = (startDate,timeDiffArray) =>{
  const datearr = startDate.slice(0,11).split("/");
  datearr[1] += ",";
  let dateStr = datearr.join(" ");
  dateStr += " "+startDate.slice(12,17);
  alert(dateStr);
  let DateObj = new Date(dateStr);
  if( timeDiffArray[0] === "+"){
    DateObj.setMinutes(DateObj.getMinutes() - timeDiffArray[2]);
    DateObj.setHours(DateObj.getHours() - timeDiffArray[1]);
  }
  else{
    DateObj.setMinutes(DateObj.getMinutes() + timeDiffArray[2]);
    DateObj.setHours(DateObj.getHours() + timeDiffArray[1]);
  }
  return DateObj;
}

const getEventText = (titleStr) =>{
  return titleStr.replaceAll(" ","+").replaceAll("#","%23");
}

const getTimeDiff = (tCell) =>{
  const diff = tCell.children[0].children[0].innerText.slice(4).split(".");
  return [tCell.children[0].children[0].innerText.charAt(3),parseInt(diff[0]),(parseInt(diff[1])/10)*60];
  //return  ["+",5,30]
}

const getEventId = (registerButton) =>{
  const linkarray = registerButton.href.split("/");
  return linkarray[linkarray.length - 1];
}

const getContestLength = (thirdTCell) =>{
  const lenStr = thirdTCell.innerText.split(":");
  return [parseInt(lenStr[0]),parseInt(lenStr[1])]
}

const getEndDate = (obj,cLenArr) =>{
  let retObj = new Date(obj);
  retObj.setMinutes(retObj.getMinutes() + cLenArr[1]);
  retObj.setHours(retObj.getHours() + cLenArr[0]);
  return retObj;

}

const dateToReqFormat = (myDateObj) =>{
  let finalRetStr = myDateObj.getFullYear() //2020
  let temp = myDateObj.getMonth().toString();
  if (temp.length < 2){
    temp = "0"+temp;
  }

  finalRetStr+=temp;
  temp = myDateObj.getDate().toString();
  if (temp.length < 2){
    temp = "0"+temp;
  }

  finalRetStr+=temp;
  finalRetStr+="T";

  temp = myDateObj.getHours().toString();
  if (temp.length < 2){
    temp = "0"+temp;
  }
  finalRetStr+=temp;

  temp = myDateObj.getMinutes().toString();
  if (temp.length < 2){
    temp = "0"+temp;
  }
  finalRetStr+=temp;
  finalRetStr+="00";

  return finalRetStr
  // 2020 10 04T 16 05 00
}


const openGoogleCalendar = (e) =>{
  const clickedTrChildren = e.target.parentNode.parentNode.children;

  const eventText = getEventText(clickedTrChildren[0].innerText);
  let startDateObj = getstartDate(clickedTrChildren[2].children[0].innerText,getTimeDiff(clickedTrChildren[2]));
  alert(startDateObj);
  let endDateObj = getEndDate(startDateObj,getContestLength(clickedTrChildren[3]));
  const eventId = getEventId(e.target);


  const finalEventUrl = "https://calendar.google.com/calendar/u/0/r/eventedit?text="+eventText+"&details=url:+http://codeforces.com/contests/"+eventId+"&location=codeforces.com&dates="+dateToReqFormat(startDateObj)+"Z/"+dateToReqFormat(endDateObj)+"Z"
  window.open(finalEventUrl);
  // 2020 10   03   T   14 30 00 Z  /  2020 10 04 T 02 30 00 Z
  // year oct date

  // https://calendar.google.com/calendar/u/0/r/eventedit?text=Codeforces+Round+%23675+(Div.+2)&details=url:+http://codeforces.com/contests/1422&location=codeforces.com&dates=20201004T160500Z/20201004T180500Z

}

const allRedLinks = document.getElementsByClassName('red-link');
console.log(allRedLinks);
for(let  i = 0;i < allRedLinks.length; i++){
  allRedLinks[i].addEventListener('click',openGoogleCalendar);
}
