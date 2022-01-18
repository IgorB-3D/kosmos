const blobs = document.querySelectorAll('.blob')

function dist(px, py, cx, cy)
{ 
	return Math.hypot(cx - px, cy - py)
}

let px = 0
let py = 0
let scrl = 0

document.addEventListener('mousemove', (e) => {
	px = e.clientX
	py = e.clientY
})

document.addEventListener('scroll', (e) => {
	scrl = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
})

document.addEventListener('mousemove', update)
document.addEventListener('scroll', update)

function update()
{
	blobs.forEach(blob => {
		blob.style.transform = ''
		let rect = blob.getBoundingClientRect()
		
		let cx = (rect.left + rect.right) * 0.5
		let cy = (rect.top + rect.bottom) * 0.5
		
		let dfx = cx - px
		let dfy = cy - (py + scrl)

		dfx *= 0.01
		dfy *= 0.01

		if(blob.classList.contains('bgblob'))
		{
			dfx *= 0.5
			dfy *= 0.5
		}

		if(window.innerWidth <= 1000)
		{
			dfx = 0
			dfy = 0
		}

		blob.style.transform = `translate(${dfx}px, ${dfy}px)`
	})
}