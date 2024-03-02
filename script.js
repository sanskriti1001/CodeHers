
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

//   document.getElementById("addNotes").addEventListener("click", function() {
//     var mainContainer = document.querySelector(".main-container");
//     if (mainContainer.style.display === "none" || mainContainer.style.display === "") {
//         mainContainer.style.display = "block";
//     } else {
//         mainContainer.style.display = "none";
//     }
// });

// document.getElementById("submit").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent form submission
//     var noteText = document.getElementById("note-text").value.trim();
//     if (noteText !== "") {
//         // Save the note
//         saveNoteInContainer(noteText);
//         // Clear the textarea
//         document.getElementById("note-text").value = "";
//         // Hide the notes container after saving note
//         document.querySelector(".main-container").style.display = "none";
//     } else {
//         alert("Please enter a note.");
//     }
// });

// document.getElementById("remove").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent form submission
//     document.getElementById("note-text").value = ""; // Clear the textarea
//     // Hide the notes container after clearing note
//     document.querySelector(".main-container").style.display = "none";
// });

// // Function to save note in the container
// function saveNoteInContainer(noteText) {
//     var notesContainer = document.getElementById("notesContainer");
//     var noteElement = document.createElement("div");
//     noteElement.textContent = noteText;
//     notesContainer.appendChild(noteElement);
// }

// function onPlayerReady(event) {
//   // Event listener for save note button
//   document.getElementById('save-note').addEventListener('click', function() {
//     var note = document.getElementById('note-input').value;
//     saveNoteToLocalStorage(note);
//   });

//   // Load note from local storage
//   var savedNote = getNoteFromLocalStorage();
//   if (savedNote) {
//     document.getElementById('note-input').value = savedNote;
//   }
// }

// // Save note to local storage
// function saveNoteToLocalStorage(note) {
//   localStorage.setItem('note', note);
// }

// // Get note from local storage
// function getNoteFromLocalStorage() {
//   return localStorage.getItem('note');
// // }
// var videoId = 'https://www.youtube.com/embed/IsLyduxZ9sc';
