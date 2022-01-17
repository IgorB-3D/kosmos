const blobs = document.querySelectorAll('.blob')

function dist(px, py, cx, cy)
{ 
	return Math.hypot(cx - px, cy - py)
}

document.addEventListener('mousemove', (e) => {
	let px = e.pageX
	let py = e.pageY

	blobs.forEach(blob => {
		blob.style.transform = ''
		let rect = blob.getBoundingClientRect()
		
		let cx = (rect.left + rect.right) * 0.5
		let cy = (rect.top + rect.bottom) * 0.5
		
		let dfx = cx - px
		let dfy = cy - py

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
})