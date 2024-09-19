// let btn = document.querySelector('.btn');
// let listContaienr = document.querySelector('#listContaienr');

// let listFunc=(InputBoxValue)=>{
//     let listItem = document.createElement('li');
//     listItem.innerText=(InputBoxValue);
//     listContaienr.append(listItem)
// }

// btn.addEventListener('click',()=>{
//     let inputBox = document.querySelector('#inputBox');
//     let InputBoxValue = inputBox.value;
//     if(InputBoxValue===""){
//         alert('Enter To Do List')
//     }else{
//         listFunc(InputBoxValue)
//     }
// })

const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');

function addTask(){
    if(inputBox.value===""){
        alert('Add Your Task');
    }else{
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }

    inputBox.value="";
    // saveData();
}

listContainer.addEventListener('click',(e)=>{

     if( e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    //  saveData();
 }
 else if(e.target.tagName==="SPAN"){
       e.target.parentElement.remove();
       
    //  saveData();
 }

 console.log(e)


});


// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }

// showTask();