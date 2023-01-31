const section = document.createElement('section')
section.id = 'gallery'
section.classList.add('min-h-screen', 'bg-cyan-100', 'my-2', 'flex', 'justify-center', 'items-center', 'flex-col')
section.innerHTML = `
<h1 class="text-3xl font-bold text-gray-800 m-12">Our Gallery</h1>
<div class="container mx-auto px-4 py-4 ">
  <div id="aboutImgs" class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols1 gap-4 ">
  </div>
</div>
`
export default section