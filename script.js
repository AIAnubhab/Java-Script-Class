let userOne = {
    name: "Yash",
    number: 1234567890,
    address: "Najafgarh"
};

let userTwo = {
    name: "Sagar",
    number: 6969696969,
    address: "Yamuna Nagar"
};

console.log("User One object:", userOne);

userTwo.name = "Kashyap";
console.log("Updated User Two name:", userTwo.name);

console.log("DOM document object:", document);

const firstParagraph = document.querySelector('p');
console.log("First paragraph text before:", firstParagraph.textContent);

firstParagraph.textContent = "Paragraph updated using querySelector('p')";
console.log("First paragraph text after:", firstParagraph.textContent);

const firstParaById = document.getElementById('firstPara');
firstParaById.textContent = "Updated using getElementById";
firstParaById.style.color = "green";
console.log("Element from getElementById:", firstParaById);

const paragraphsByClass = document.getElementsByClassName('textLine');
paragraphsByClass[0].style.fontWeight = "bold";
paragraphsByClass[1].style.color = "purple";
console.log("HTMLCollection from getElementsByClassName:", paragraphsByClass);

const paragraphsNodeList = document.querySelectorAll('.textLine');
console.log("NodeList from querySelectorAll:", paragraphsNodeList);

paragraphsNodeList.forEach((para, index) => {
    console.log(`NodeList item ${index}:`, para.textContent);
});

const firstTextLine = document.querySelector('.textLine');
firstTextLine.textContent = "Updated first .textLine using querySelector";
firstTextLine.style.color = "red";
console.log("First element with class textLine:", firstTextLine);

const hiddenParagraph = document.getElementById('hiddenPara');

console.log("Hidden paragraph textContent:", hiddenParagraph.textContent);
console.log("Hidden paragraph innerText:", hiddenParagraph.innerText);

paragraphsNodeList[1].innerHTML = "<div><b>Hello</b> World</div>";
console.log("Paragraph after innerHTML update:", paragraphsNodeList[1]);
const submitButton = document.querySelector("#submitBtn");

const toggleButton = document.querySelector("#toggleBtn");

toggleButton.addEventListener("click", function () {
    submitButton.classList.toggle("btn");
});

// function orderFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Food Ordered");
//             resolve();
//         }, 2000);
//     });
// }

// function deliverFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Food Delivered");
//             resolve("Food deliverd successfully");
//         }, 3000);
//     }); 
// }

// orderFood().then((data) => {
//     console.log(data)
//     return deliverFood();
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// }
// )

// async function order(){   
//     const data = await orderFood();
//         await orderFood();
//         await deliverFood();
//         console.log("All tasks completed");
// }

// console.log("first line");
// try{
//     console.log(a)
// }catch(error){
//     console.log("Error caught:", error.message);
// }

// console.log("first line");
// try{
//     let age = 25;
//     if(age < 18){
//         throw new Error("Age must be at least 18");
//     }
// }catch(error){
//     console.log("Error caught:", error.message);
// }finally{
//     console.log("This will always execute");
// }
// console.log("last line");

async function getdata() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
}catch(error){
    console.log("Error fetching data:", error.message);
}
}
