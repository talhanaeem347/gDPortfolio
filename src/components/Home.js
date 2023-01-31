const imgUrl = '/public/assets/images/bettle.png'
let section = document.createElement('section')
section.classList.add( 'bg-cyan-800', 'min-h-screen', 'mb-2')
section.id = 'home'
section.innerHTML = `
  <div class="flex flex-col items-center justify-center  min-h-screen w-screen">
  <h1 class="text-5xl font-bold text-gray-800 md:mt-10 lg:mt-24  text-center ">Welcome to My Portfolio</h1>
  <section id="image-carousel" class="splide  w-4/5 lg:h-96 md:h-96 h-full "  aria-label="Beautiful Images">
  <div class="splide__track  ">
		<ul class="splide__list   ">
			<li class="splide__slide">

				<img src="https://fireart.studio/wp-content/uploads/2019/01/screenshot-1076.jpg" class="lg:h-3/5 md:h-3/5 h-full w-full m-2" alt="">
			</li>
			<li class="splide__slide">
				<img src="https://miro.medium.com/max/1400/1*VbspKTNIZeu22XDOeiFaYg.png" class="lg:h-3/5 md:h-3/5 h-full w-full m-2 alt="">
			</li>
			<li class="splide__slide">
				<img src="https://i.pinimg.com/originals/fd/bb/44/fdbb44ca05629db8f5c532633a8b836a.png" class="lg:h-3/5 md:h-3/5 h-full w-full m-2 alt="">
			</li>
		</ul>
  </div>
</section>
    
    <p class="text-xl text-gray-800 md:mt-10 lg:m-40 text-center px-10">I'm a Vue.js developer specializing in web design and logo design.</p>
  </div>
`
export default section

