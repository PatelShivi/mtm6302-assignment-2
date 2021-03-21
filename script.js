let images = ["./images/1.jpeg", "./images/2.jpeg", "./images/3.jpeg", "./images/4.jpeg", "./images/5.jpeg", "./images/6.jpeg",
"./images/7.jpeg", "./images/8.jpeg", "./images/9.jpeg", "./images/10.jpeg", "./images/11.jpeg", "./images/12.jpeg", "./images/13.jpeg", 
"./images/14.jpeg", "./images/15.jpeg", "./images/16.jpeg", "./images/17.jpeg", "./images/18.jpeg"];
document.addEventListener('DOMContentLoaded', init);

function init()
{
    let image;
    let count = 1;
    // get main-conatiner
    let mainContainer = document.getElementById('main-container');
    //loop through array to create images
    images.forEach(item => {
        //create images
        let imageDiv = document.createElement('div');
        imageDiv.setAttribute('id', `imageDiv${count}`);
        image = document.createElement('img');
        image.setAttribute('class', 'imgGallery');
        image.setAttribute('id', `image${count}`);
        image.src = item;
        imageDiv.appendChild(image);
        mainContainer.appendChild(imageDiv);
        count += 1;
        //add event listener to images
        image.addEventListener('mouseenter', largeImage);
        image.addEventListener('mouseleave', smallImage);
        image.addEventListener('click', imageDetail);
    });
}

//to display large images
function largeImage(e) {
    let targetImage = e.target;
    targetImage.style.transform = "scale(1.2)";

}

//to display small images
function smallImage(e) {
    let targetImage = e.target;
    targetImage.style.transform = "scale(1)";
}

//display image details
function imageDetail(e) {
    let targetImage = e.target;
    let imageParentDiv = e.target.parentElement;
    let imageDetailDiv = document.createElement('div');
    let imageTitle = document.createElement('h3');
    imageTitle.innerHTML = targetImage.id;
    imageDetailDiv.appendChild(imageTitle);
    imageParentDiv.appendChild(imageDetailDiv);
}
