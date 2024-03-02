// Changing the style of scroll bar
// window.onscroll = function() {myFunction()};
		
// function myFunction() {
// 	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// 	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	var scrolled = (winScroll / height) * 100;
// 	document.getElementById("myBar").style.width = scrolled + "%"; 
// }

function scrollAppear() {
    var introText = document.querySelector('.side-text');
    var sideImage = document.querySelector('.sideImage');
    var introPosition = introText.getBoundingClientRect().top;
    var imagePosition = sideImage.getBoundingClientRect().top;
    
    var screenPosition = window.innerHeight / 1.2;
  
    if(introPosition < screenPosition) {
      introText.classList.add('side-text-appear');
    }
    if(imagePosition < screenPosition) {
      sideImage.classList.add('sideImage-appear');
    }
  }
  
  window.addEventListener('scroll', scrollAppear);
  
  // For switching between navigation menus in mobile mode
  var i = 2;
  function switchTAB() {
      var x = document.getElementById("list-switch");
      if(i%2 == 0) {
          document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
          document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
      }else {
          document.getElementById("list-switch").style= "display: none;";
          document.getElementById("search-switch").style= "display: none;";
      }
      i++;
  }
  
  // For LOGIN
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  var a = document.getElementById("log");
  var b = document.getElementById("reg");
  var w = document.getElementById("other");
  
  function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    w.style.visibility = "hidden";
    b.style.color = "#fff";
    a.style.color = "#000";
  }
  
  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    w.style.visibility = "visible";
    a.style.color = "#fff";
    b.style.color = "#000";
  }
    
  // CheckBox Function
  function goFurther(){
    if (document.getElementById("chkAgree").checked == true) {
      document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
    }
    else{
      document.getElementById('btnSubmit').style = 'background: lightgray;';
    }
  }
  
  function google() {
        window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
  }
  
  // QUIZ Page
  function quizt(frame) {
    document.getElementById('f1').style='display: none;';
    document.getElementById('f2').style='display: none;';
    document.getElementById('f3').style='display: none;';
    document.getElementById('f4').style='display: none;';
    document.getElementById('f5').style='display: none;';
    document.getElementById('f6').style='display: none;';
    document.getElementById('f7').style='display: none;';
    document.getElementById('f8').style='display: none;';
    document.getElementById('f9').style='display: none;';
    document.getElementById('f10').style='display: none;';
    document.getElementById('f11').style='display: none;';
    if(frame == 1) document.getElementById('f1').style = 'display: block';
    else if(frame == 2) document.getElementById('f2').style = 'display: block';
    else if(frame == 3) document.getElementById('f3').style = 'display: block';
    else if(frame == 4) document.getElementById('f4').style = 'display: block';
    else if(frame == 5) document.getElementById('f5').style = 'display: block';
    else if(frame == 6) document.getElementById('f6').style = 'display: block';
    else if(frame == 7) document.getElementById('f7').style = 'display: block';
    else if(frame == 8) document.getElementById('f8').style = 'display: block';
    else if(frame == 9) document.getElementById('f9').style = 'display: block';
    else if(frame == 10) document.getElementById('f10').style = 'display: block';
    else if(frame == 11) document.getElementById('f11').style = 'display: block'; 
    else alert('error');
  }
  
  function startquiz() {
    document.getElementById('title').style = 'display: none;'; 
  
    document.getElementById('panel').style = 'display: inline-flex;'; 
    document.getElementById('left').style = 'display: block;'; 
    document.getElementById('right').style = 'display: block;'; 
  }
  function searchdisplay() {
    document.getElementById('searchpanel').style.display="block";
  }
  
  function display(n) {
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var s3 = document.getElementById('s3');
    var s4 = document.getElementById('s4');
  
    img1.style = 'display: none;';
    img2.style = 'display: none;';
    img3.style = 'display: none;';
    img4.style = 'display: none;';
    s1.style = 'background: #DF2771; color: #FFF;';
    s2.style = 'background: #DF2771; color: #FFF;';
    s3.style = 'background: #DF2771; color: #FFF;';
    s4.style = 'background: #DF2771; color: #FFF;';
  
    if(n==1) {
      img1.style = 'display: block;';
      s1.style = 'background: #E5E8EF; color: #DF2771;';
    }
    if(n==2) {
      img2.style = 'display: block;';
      s2.style = 'background: #E5E8EF; color: #DF2771;';
    }
    if(n==3) {
      img3.style = 'display: block;';
      s3.style = 'background: #E5E8EF; color: #DF2771;';
    }
    if(n==4) {
      img4.style = 'display: block;';
      s4.style = 'background: #E5E8EF; color: #DF2771;';
    } 
  }
  
  
  function sideMenu(side) {
    var menu = document.getElementById('side-menu');
    if(side==0) {
      menu.style = 'transform: translateX(0vh); position:fixed;';
    }
    else {
      menu.style = 'transform: translateX(-100%);';
    }
    side++;
  }

  const submit = document.getElementById("submit")
const empty = document.querySelector("#remove")
const mainContainer = document.querySelector(".main-container")
const addNoteBtn = document.querySelector("#addNotes")
const notesContainer = document.querySelector(".notes-container");
const boxContainer = document.querySelector(".box-container")
const textContainer = document.querySelector(".containers")
let textareaValue = textContainer.querySelector('#note-text');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

addNoteBtn.addEventListener('click', () => {
    textareaValue.value = "";
    textContainer.classList.toggle("none")
})
empty.addEventListener('click', (e) => {
    e.preventDefault();

    textareaValue.value = "";
})
function getRandomLightColor() {
    const threshold = 150;
    
    const red = Math.floor(Math.random() * (255 - threshold) + threshold);
    const green = Math.floor(Math.random() * (255 - threshold) + threshold);
    const blue = Math.floor(Math.random() * (255 - threshold) + threshold);

    const redDiff = 255 - red;
    const greenDiff = 255 - green;
    const blueDiff = 255 - blue;

    const lightRed = red + Math.floor(Math.random() * redDiff);
    const lightGreen = green + Math.floor(Math.random() * greenDiff);
    const lightBlue = blue + Math.floor(Math.random() * blueDiff);
    const color = `rgb(${lightRed}, ${lightGreen}, ${lightBlue})`;

    return color;
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
        if (textareaValue.value != "") {
            const randomRotation = (Math.random() - 0.5) * 100;
            const color = getRandomLightColor();

            notesContainer.innerHTML +=
                `<div class="box-container" style="transform: rotate(${randomRotation}deg);">
            <textarea disabled style="background-color:${color};">${textareaValue.value}</textarea>
            <button class="delete">x</button>
        </div>`;
            tasks.push(textareaValue.value);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            textContainer.classList.toggle("none");
            deleteNotes();//if i call the function outside the box then all buttons value is null thats why i call this funciton inside the submit 
        }
})

function deleteNotes() {
    let deleteNotesBtn = document.querySelectorAll(".delete");
    deleteNotesBtn.forEach(function (button) {
        button.addEventListener('click', (event) => {
            event.target.parentElement.remove();
            let taskText = event.target.parentElement.querySelector('textarea').value.trim();
            let index = tasks.indexOf(taskText);
            if (index !== -1) {
                tasks.splice(index, 1);
                // Save tasks to local storage
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
            });
    });
}

function loadTasks() {
    tasks.forEach(function (notes) {
        const randomRotation = (Math.random() - 0.5) * 100;
        const color = getRandomLightColor();
        notesContainer.innerHTML +=
            `<div class="box-container" style="transform: rotate(${randomRotation}deg);">
        <textarea disabled style="background-color:${color};">${notes}</textarea>
        <button class="delete">x</button>
    </div>`
        deleteNotes()
    });
}
loadTasks();

/*
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (textareaValue.value != "") {
        if (textareaValue.value != "") {
            normal long old code
            let boxContainer = document.createElement('div');
            boxContainer.classList.add('box-container')
            let createNotes = document.createElement('textarea')
            createNotes.value = textareaValue.value;
            createNotes.setAttribute('disabled', true);
            let deletebtn = document.createElement('button');
            deletebtn.setAttribute("id", "delete");
            deletebtn.textContent = "x";
            notesContainer.appendChild(boxContainer);
            boxContainer.appendChild(createNotes);
            boxContainer.appendChild(deletebtn);
            textContainer.classList.toggle("none")
        }
    }
})*/
