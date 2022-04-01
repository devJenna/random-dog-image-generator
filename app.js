const generateButton = document.querySelector(".generate-button");
const imageContainer = document.querySelector(".image-container");

generateButton.addEventListener("click", fetchImages);

function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function (response) {
            return response.json();
        })
        // .then(response => response.json()) // arrow function
        .then(function (data) {
            console.log(data);
            imageContainer.innerHTML = `<img class="generated" src="${data.message}"></img>`;
            // another way to execute function
            // displayImage(data);
        })
        // .then(data => {
        //     console.log(data);
        //     imageContainer.innerHTML = `<img class="generated" src="${data.message}"></img>`;
        // }) // arrow function
        .catch(function (error) {
            console.log(error);
        })
}


// function displayImage(data) {
//     imageContainer.innerHTML = `<img class="generated" src="${data.message}"></img>`
// }