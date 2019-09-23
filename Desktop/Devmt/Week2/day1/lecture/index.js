const myH1 = document.getElementsByTagName('h1');
        myH1[0].style.color = "blue";

let count = 0;
const mySpanTag = document.getElementById('count');
mySpanTag.innerHTML = count;

function incrementor(){
    mySpanTag.innerHTML = count += 1
}
function setInnerText(){
    //get th inbput with an Id of user-input
    let userTest =document.getElementById('user-input');
    //get the H! with a classname of my-h1
    let targetH1 = document.getElementsByClassName('my-h1')[0];
    //set thhe calue of the h1 elemnt equal to the value of the input
    targetH1.innerText = userText.value;
}

function toggler(){
    //grab all the p tags on the page
    let allPTags =document.getElementsByTagName('p')
    //loop through all p tags based on the length of the returned p tag array
    for(let i = 0; i <= allPTags.length -1; i++){
    //for each p tag add a classname of toggled-class
        console.log(allPTags[i])
        allPTags[i].className = 'toggled-class';
    }
}
