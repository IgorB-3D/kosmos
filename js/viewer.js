const viewer = document.createElement('div')
const button = document.createElement('button')
const figure = document.createElement('figure')
const image = document.createElement('img')
const twrap = document.createElement('div')
const header = document.createElement('h3')
const text = document.createElement('p')
const caption = document.createElement('figcaption')
const images = document.querySelectorAll('.galleryblock img')
const articles = document.querySelectorAll('article > a')

button.innerText = '✕'
figure.append(image)
figure.append(caption)
twrap.append(header)
twrap.append(text)
viewer.append(twrap)
viewer.append(button)
viewer.append(figure)
viewer.classList.add('viewer')
twrap.classList.add('contentblock')
twrap.classList.add('fullarticle')

document.body.append(viewer)

let arr = [...images]
arr.forEach(img => {
	img.addEventListener('click', () => {
		document.body.style.overflow = 'hidden'
		viewer.style.display = 'grid'
		figure.style.display = 'grid'
		image.style.display = 'initial'
		caption.style.display = 'initial'
		twrap.style.display = 'none'
		image.src = img.src
		image.alt = img.alt
		caption.innerText = img.alt
	})
});

let ararr = [...articles]
ararr.forEach(a => {
	a.addEventListener('click', () => {
		document.body.style.overflow = 'hidden'
		viewer.style.display = 'grid'
		image.style.display = 'none'
		caption.style.display = 'none'
		figure.style.display = 'none'
		twrap.style.display = 'block'
		header.innerText = a.parentNode.children[0].innerText
		text.innerText = a.parentNode.children[1].innerText
	})
});

button.addEventListener('click', hide)

viewer.addEventListener('click', (e) => {
	if(e.target === viewer)
		hide()
})

function hide()
{
	viewer.style.display = 'none'
	document.body.style.overflow = 'visible'
}