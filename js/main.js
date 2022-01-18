const navItems = document.querySelectorAll('nav > ul > li')
const pages = document.querySelectorAll('.pg')
const ha = document.querySelector('header a')
const nav = document.querySelector('nav')
const navul = document.querySelector('nav > ul')

function mkNav(el, i)
{
	el.addEventListener('click', () => {
		pages[i].scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest"
		})
	})
}

for(let i = 0; i < navItems.length; i++)
	mkNav(navItems[i], i)

mkNav(ha, 1)

let en = window.innerWidth < 1000
let ndown = false
let d = 0
nav.addEventListener('mousedown', () => ndown = true)
document.addEventListener('mouseup', () => ndown = false)

function move(delta)
{
	d -= delta
	d = Math.max(d, 0)
	d = Math.min(d, navul.scrollWidth - window.innerWidth + 30)

	if(document.selection && document.selection.empty)
		document.selection.empty()
	else if(window.getSelection) 
	{
		var sel = window.getSelection();
		sel.removeAllRanges();
	}

	navul.style.transform = `translateX(-${d}px)`
}

document.addEventListener('mousemove', (e) => {
	if(!ndown || !en)
		return
	move(e.movementX)
})
nav.addEventListener('touchmove', (e) => {
	if(!en)
		return
	let delta = (e.changedTouches[0].clientX - window.innerWidth / 2) * 0.5
	move(delta)
})
window.addEventListener('resize', (e) => {
	en = window.innerWidth < 1000
	if(!en)
		navul.style.transform = `translateX(0px)`
})