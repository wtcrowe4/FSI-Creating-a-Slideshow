const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

//Declaring Variables
const image = document.querySelector('.image')
const nextButton = document.querySelector('.next')
const previousButton = document.querySelector('.previous')
const bubbleButtons = document.querySelectorAll('.bubble')

let imageIndex = 0
image.src = images[imageIndex]
bubbleButtons[imageIndex].textContent = '●'

for (let i = 0; i < bubbleButtons.length; i++) {
    bubbleButtons[i].addEventListener('click', (e) => {
        imageIndex = i;
        image.src = images[imageIndex]
        for (let i =0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
        bubbleButtons[imageIndex].textContent = '●'
    })
}

previousButton.addEventListener('click', () => {
    if (imageIndex > 0) imageIndex--
    image.src = images[imageIndex]
    for (let i = 0; i < bubbleButtons.length; i ++) bubbleButtons[i].textContent = '○'
    bubbleButtons[imageIndex].textContent = '●'
})

nextButton.addEventListener('click', () => {
    if (imageIndex < 5) imageIndex++
    image.src = images[imageIndex]
    for (let i = 0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
    bubbleButtons[imageIndex].textContent = '●'
})