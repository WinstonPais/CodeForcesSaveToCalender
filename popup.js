const click = () =>{
  chrome.tabs.executeScript(null,{
    code:"console.log('Welcome');"});
  window.close();

}
document.addEventListener('DOMContentLoaded', function(){
  document.addEventListener('click',click);
});
