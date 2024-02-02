const toggleButton = document.querySelector('.toggle-button');
const asideMenu = document.querySelector('.aside-menu');

toggleButton.addEventListener('click', function () {
	asideMenu.style.display = (asideMenu.style.display === 'block' || asideMenu.style.display === 'flex') ? 'none' : 'block';
});

			 function handleResize() {
					 const windowHeight = window.innerHeight;
					 const menuHeight = asideMenu.offsetHeight;

					 asideMenu.style.top = `${(windowHeight - menuHeight) / 2}px`;
			 }

			 window.addEventListener('resize', handleResize);
			 handleResize();