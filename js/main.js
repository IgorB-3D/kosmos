const navItems = document.querySelectorAll('nav > ul > li')
const pages = document.querySelectorAll('.pg')
const ha = document.querySelector('header a')

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
