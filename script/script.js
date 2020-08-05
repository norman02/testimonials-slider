
// create an array of slide objects 
const slides = [
    {
        name: 'Tanya Sinclair',
        title: 'UX Engineer',
        quote: "\“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. \”",
        picture: './images/image-tanya.jpg',
    },
    {
        name: 'John Tarkpor',
        title: 'Junior Front-end Developer',
        quote: "\“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \”",
        picture: "./images/image-john.jpg"
    },
]

let slideNumber = 0;

let targetSlide = slides[slideNumber]

// rewind to previous slide

const prevSlide = () => {

    if (slideNumber != 0) {
        targetSlide = slides[slideNumber - 1]
        switchSlide()
        slideNumber--;
    } 

}

// advance to next slide

const nextSlide = () => {
    if(slideNumber != slides.length - 1) {
        targetSlide = slides[slideNumber + 1];
        switchSlide()
        slideNumber++
    } 
}

const switchSlide = () => {
    document.getElementById("name").innerHTML = targetSlide.name
    document.getElementById('title').innerHTML = targetSlide.title
    document.getElementById('quote').innerHTML = targetSlide.quote
    document.getElementById('image').src = targetSlide.picture
   
}


document.getElementById('prev').addEventListener('click', prevSlide)
document.getElementById('next').addEventListener('click', nextSlide)

