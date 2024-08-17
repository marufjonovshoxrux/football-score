const tameev_ball = document.querySelector('.tameev_ball')
const body = document.body

const leftGoal = document.getElementById('left_goal')
const rightGoal = document.getElementById('right_goal')

const audio = document.getElementById('my_audio')

function playMusic() {
	audio.play()
}

function messi(item) {
  const img_messi = document.createElement('img')

  img_messi.classList.add('messi')
	img_messi.src = item

	body.append(img_messi)
}





body.ondragover = e => {
	e.preventDefault()
}

tameev_ball.ondragend = e => {
	const { x, y } = e
	console.log(e)
  
	tameev_ball.style.left = x + 'px'
	tameev_ball.style.top = y + 'px'
	tameev_ball.style.transalte = '-50% -50%'

  
	
	if (e.x >= 20 && e.x <= 110 && e.y >= 480 && e.y <= 630) {
		alert('Goal Barca')
    alert('G.O.A.T')
    messi(
			'https://storage.googleapis.com/com-daily-stickers.appspot.com/optimized/packs/T11AQvfeJxp0gaaPOKTn/stickers/r9SE5kZLhhdtiHBEjPaH/file/d04cb53b-fef5-4264-9f61-d80314352f74.webp'
		)
    playMusic()
    setTimeout(() => {
			location.reload()
		}, 4000)
	} else if (e.x >= 1900 && e.x <= 2100 && e.y >= 480 && e.y <= 630) {
		alert('Goal Real')
    alert('suiiii')
    messi(
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gsSGSzmkOcyqpvDqq2EfVshOJBLbEorZMA&s'
		)
    playMusic()
    setTimeout(() => {
			location.reload()
		}, 4000)



	} else if (e.x >= 0 && e.x <= 100 && e.y >= 0 && e.y <= 450) {
		alert('OUT LEFT TOP')
	} else if (e.x >= 1900 && e.x <= 2500 && e.y >= 0 && e.y <= 450) {
		alert('OUT RIGHT TOP')
	} else if (e.x >= 0 && e.x <= 100 && e.y >= 600 && e.y <= 10000) {
    alert('OUT LEFT BOTTOM')
  } else if (e.x >= 1900 && e.x <= 2500 && e.y >= 600 && e.y <= 10000) {
		alert('OUT RIGHT BOTTOM')
	}



  
}





