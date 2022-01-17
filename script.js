const pages = document.querySelectorAll('.pg')

let pageIdx = 0

function scrlPage(idx)
{
	pages[idx].scrollIntoView({
		behavior: "smooth",
		block: "end",
		inline: "nearest"
	})
}

document.addEventListener('wheel', (e) => {
	e.preventDefault()

	pageIdx += Math.min(Math.max(e.deltaY, -1), 1)
	pageIdx = Math.min(Math.max(pageIdx, 0), pages.length - 1)

	scrlPage(pageIdx)
}, {passive:false});