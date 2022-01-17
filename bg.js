const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const particles = []

sizeMatch()

for(let i = 0; i < 1000; i++)
	frame()

function makeParticle()
{
	let r = Math.random()
	let ux = Math.sign(1 - Math.random() * 2)
	let uy = Math.sign(1 - Math.random() * 2)
	return {
		dx: (1 - r) * ux,
		dy: r * uy,
		px: 0,
		py: 0,
		lx: 0,
		ly: 0,
		acc: 0
	}
}

function sizeMatch()
{
	ctx.canvas.width  = canvas.parentElement.clientWidth
	ctx.canvas.height = canvas.parentElement.clientHeight
}

function frame()
{
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

	let cx = ctx.canvas.width * 0.5
	let cy = ctx.canvas.height * 0.5
	
	if(Math.random() > 0.9)
		particles.push(makeParticle())

	let mut = [...particles]
	mut.forEach(p => {
		let exp = Math.max(1, 1 + p.acc)

		p.lx += p.dx * exp * 0.9
		p.ly += p.dy * exp * 0.9
		p.px += p.dx * exp
		p.py += p.dy * exp
		p.acc += 0.03

		ctx.strokeStyle = `rgba(255, 255, 255, ${ Math.max(0, (p.acc - 4) * 0.1) })`

		if(p.acc > 10)
		{
			let index = particles.indexOf(p)
			particles.splice(index, 1)
		}

		ctx.beginPath()
		ctx.lineWidth = p.acc * 0.5
		ctx.moveTo(cx + p.lx, cy + p.ly)
		ctx.lineTo(cx + p.px, cy + p.py)
		ctx.stroke()
	})
}

setInterval(frame, 0.16);

document.addEventListener('resize', sizeMatch)