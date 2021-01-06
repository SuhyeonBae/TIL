// Practice for JS
// https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/JavaScript_basics

let myImage = document.querySelector('img');

myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201812022340"){
    myImage.setAttribute('src', 'https://www.mozilla.org/media/protocol/img/logos/firefox/browser/nightly/logo-lg-high-res.2ae024a36eed.png');
  }else{
    myImage.setAttribute('src', 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201812022340');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('Please enther your name');
  if(!myName||myName===null){
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = `hello, ${myName}!`;
  }
}


if(!localStorage.getItem('name')){ // localStorage에 name이 data item이 없으면
  setUserName()
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = `hello, ${storedName}!`;
}

myButton.onclick = function(){
  setUserName();
};