chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});



// const openGoogleCalender = () =>{
//   window.open("https://www.w3schools.com");
// }
//
// document.addEventListener('DOMContentLoaded', function(){
//   const allRedLinks = document.getElementsByClassName('red-link');
//   console.log(allRedLinks);
//   for(let  i = 0;i < allRedLinks.length; i++){
//     allRedLinks[i].addEventListener('click',openGoogleCalender);
//   }
//
// });
