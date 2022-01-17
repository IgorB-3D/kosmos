const viewer = document.querySelector('.viewer')
const button = document.querySelector('.viewer button')
const image = document.querySelector('figure img')
const caption = document.querySelector('figcaption')
const images = document.querySelectorAll('.galleryblock img')

let arr = [...images]
arr.forEach(img => {
	img.addEventListener('click', () => {
		viewer.style.display = 'grid'
		image.src = img.src
		image.alt = img.alt
		caption.innerText = img.alt
	})
});

button.addEventListener('click', () => {
	viewer.style.display = 'none'
})

viewer.addEventListener('click', (e) => {
	if(e.target === viewer)
		viewer.style.display = 'none'
})