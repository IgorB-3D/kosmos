const navItems = document.querySelectorAll('nav > ul > li')
const pages = document.querySelectorAll('.pg')

for(let i = 0; i < navItems.length; i++)
{
	navItems[i].addEventListener('click', () => {
		pages[i].scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest"
		})
	})
}