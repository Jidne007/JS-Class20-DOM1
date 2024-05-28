let heading1 = document.querySelector('.heading1');


heading1.style.textAlign = "center";
heading1.style.fontFamily = "arial ";


let buttons = document.getElementsByTagName('button');


let counter = document.querySelector(".counter");
let incrementButton = document.querySelector(".increment");
let decrementButton = document.querySelector(".decrement");



for (const button of buttons) {
  button.style.width = "70px";
  button.style.height = "50px";
  button.style.fontSize = "15px";
  button.style.cursor = "pointer";
}
counter.style.fontSize = '40px';
counter.style.padding = "10px";






incrementButton.addEventListener("click" , () => {
     let count = +counter.innerHTML;
     let update = count + 1;
     counter.innerHTML = update;
});




decrementButton.addEventListener("click" , () => {
  let count = +counter.innerHTML;
  let update = count - 1;
  counter.innerHTML = update;
});

//Jodi 0 er niche ar decrement naa korte chai tahole amake nicher condition  ta use korte hobe

// decrementButton.addEventListener("click" , () => {
//   let count = +counter.innerHTML;

//   if(count > 0){
//     let update = count - 1;
//     counter.innerHTML = update;
//   }
// });



let textBox = document.querySelector('textarea')
let content = document.getElementById("content");
let post = document.getElementById("post");


textBox.style.height ='50px';
content.style.fontSize = "20px";
content.style.paddingBottom = "20px";

post.addEventListener("click", () => {
  let value = textBox.value;
  content.innerHTML = value;
  textBox.value = '';
})