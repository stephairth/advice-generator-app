var generatorBtn = document.querySelector(".generator"),
    adviceField = document.querySelector(".advice-text"), 
    adviceIdField = document.querySelector(".advice-num");

generatorBtn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var advice = JSON.parse(XHR.responseText).slip.advice;
      var adviceId = JSON.parse(XHR.responseText).slip.id;
      adviceField.innerText = advice;
      adviceIdField.innerText = adviceId;
    }
  };
   XHR.open("GET","https://api.adviceslip.com/advice");
  XHR.send();
});