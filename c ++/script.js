const hamburgarEl = document.getElementById("hamburgar");
const bodyEl = document.querySelector("body");
const linksEl = document.querySelectorAll("#links li");
const containerEl = document.querySelector(".container");

const ctaModalEl = document.querySelectorAll(".ctaModal");

hamburgarEl.addEventListener("click", (e) => {
  bodyEl.classList.toggle("nav-open");
});

linksEl.forEach((link) => {
  link.addEventListener("click", (e) => {
    linksEl.forEach((item) => {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Create Modal

function createModal() {
  const modalCont = document.createElement("div");
  const modalEl = document.createElement("div");
  modalCont.classList.add("modalCont");
  modalEl.classList.add("modal");

  // Modal Top

  const modalTop = document.createElement("div");
  modalTop.classList.add("modalTop");
  modalEl.appendChild(modalTop);
  modalCont.appendChild(modalEl);
  // Modal Title

  const modalTitle = document.createElement("h2");
  modalTitle.innerHTML = `Sign In`;
  modalTop.appendChild(modalTitle);

  // Close Btn
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = `<ion-icon name="close"></ion-icon>`;
  modalTop.appendChild(closeBtn);
  const formEl = document.createElement("form");

  // UserName
  const userNameDiv = document.createElement("div");
  const userNameLabel = document.createElement("label");
  userNameLabel.htmlFor = "userName";
  const userNameInput = document.createElement("input");
  userNameInput.id = "userName";
  userNameInput.placeholder = "Username";
  userNameLabel.innerHTML = `User Name`;
  userNameDiv.appendChild(userNameLabel);
  userNameDiv.appendChild(userNameInput);
  formEl.appendChild(userNameDiv);

  // Email

  const userEmailDiv = document.createElement("div");
  const userEmailLabel = document.createElement("label");
  userEmailLabel.htmlFor = "email";
  const userEmailInput = document.createElement("input");
  userEmailInput.id = "email";
  userEmailInput.placeholder = "Email";
  userEmailLabel.innerHTML = `Email`;
  userEmailDiv.appendChild(userEmailLabel);
  userEmailDiv.appendChild(userEmailInput);
  formEl.appendChild(userEmailDiv);

  // PassWord
  const userPasswordDiv = document.createElement("div");
  const userPasswordLabel = document.createElement("label");
  userPasswordLabel.innerHTML = `Password`;
  userPasswordLabel.htmlFor = `password`;
  const userPasswordInput = document.createElement("input");
  userPasswordInput.id = `password`;
  userPasswordInput.placeholder = `Password`;
  userPasswordDiv.appendChild(userPasswordLabel);
  userPasswordDiv.appendChild(userPasswordInput);
  formEl.appendChild(userPasswordDiv);

  // Submit btn
  const ctaBtn = document.createElement("button");
  ctaBtn.type = "submit";
  ctaBtn.innerHTML = `Submit`;
  formEl.appendChild(ctaBtn);

  closeBtn.addEventListener("click", (e) => {
    bodyEl.classList.remove("modal-open");
    modalCont.remove();
  });

  //
  window.addEventListener("click", (e) => {
    if (e.target.classList == "overlay2") {
      bodyEl.classList.remove("modal-open");
      modalCont.remove();
    }
  });

  modalEl.appendChild(formEl);
  containerEl.appendChild(modalCont);
}

ctaModalEl.forEach((button) => {
  button.addEventListener("click", (e) => {
    createModal();
    bodyEl.classList.add("modal-open");
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList == "overlay") bodyEl.classList.remove("nav-open");
});



 //DISPLAY LESSONS BY @ACHENYU BK
 function CreateAndFollow() {
  getVisitedPages(); 
  const myDiv = document.getElementById("welcome")
  const divEl = document.createElement('div');
  divEl.id = "lessonHolder";
  divEl.classList.add("lessonHolder");
  const linkURLs = [
    {

      ulr: `C++Lesson1.html`,
      textCont: `Lesson #1 : Introduction to C++`
    },
    {

      ulr: `C++Lesson2.html`,
      textCont: `Lesson #2 : Anathomy of a Simple C++ program`
    },
    {

      ulr: `C++Lesson3.html`,
      textCont: `Lesson #3 : Comments in C++`
    },
    {

      ulr: `C++Lesson4.html`,
      textCont: `Lesson #4 : Data Types in C++`
    },
    {

      ulr: `C++Lesson5.html`,
      textCont: `Lesson #5 : Setting Development Environment`
    },
    {

      ulr: `C++Lesson6.html`,
      textCont: `Lesson #6 : Outputs in C++`
    },
    {

      ulr: `C++Lesson7.html`,
      textCont: `Lesson #7 : Variables in C++`
    },


  ];
  for (let i = 0; i < linkURLs.length; i++) {

    //  const link = document.createElement('a');
    //   link.url = linkURLs[i].ulr;
    //   alert(link.url)
    const linkCont = document.createElement('div');
    linkCont.id = "linkContId";
    const link = document.createElement('a');
    link.classList.add("lessonAncor");
    link.href = linkURLs[i].ulr;
    link.textContent = linkURLs[i].textCont;


   // alert(temp);
   
    linkCont.appendChild(link);
  
    divEl.appendChild(linkCont) 
    
  }
  myDiv.appendChild(divEl);
//disabble created button so funtion dont work Button
  const button1 = document.getElementById('lessonGenButton');
  button1.disabled = true ;



}
//IDE STUFF
async function compileC() {
  const code = document.getElementById('cCode').value;
  const outputFrame = document.getElementById('output-1');
  outputFrame.contentWindow.document.body.innerHTML = "Compiling...";

  const response = await fetch("https://wandbox.org/api/compile.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      code: code,
      compiler: "gcc-head",
      options: "c11"
    }),
  });

  const result = await response.json();
  outputFrame.contentWindow.document.body.innerHTML = result.program_message || result.compiler_message;
}

//START STOP SPEECH
const textToread =document.getElementById('textToget').innerText
function readText(texting){
const utterance = new SpeechSynthesisUtterance(texting);
window.speechSynthesis.speak(utterance);
console.log(textToread);

}
function stopReading(){
window.speechSynthesis.cancel();
}

//####################################### Not ME @achenyu  bk made this
//Visited pages  
function getVisitedPages() {
  // Get the current list of visited pages (if any) from local storage
  let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || []; 

  // Add the current page URL to the list
  visitedPages.push(window.location.href); 

  // Remove duplicates (optional)
  visitedPages = [...new Set(visitedPages)]; 

  // Save the updated list to local storage
  localStorage.setItem('visitedPages', JSON.stringify(visitedPages)); 
}

// Call the function to update the list
getVisitedPages(); 



