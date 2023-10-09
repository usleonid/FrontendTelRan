const paragraphs = document.querySelectorAll("p");
const wrapper = document.getElementById("wrapper");

// for (let i=0; i < paragraphs.length; i++) {
//     paragraphs[i].addEventListener('click', function(event) {
//         console.log(event);
//         event.target.style.color = 'red'
//     })
// }

wrapper.addEventListener("click", function (event) {
  console.log(event.target.tagName);

  if (event.target.tagName.toLowerCase() === 'li') {
    event.target.style.color = "red";
  }
});