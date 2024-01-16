document.addEventListener('DOMContentLoaded',function(){

   resizeProyectos();

   window.addEventListener('resize',resizeProyectos);

   function resizeProyectos(){

        let slides = document.querySelectorAll('.slide');

        slides.forEach(element => {

                let alto = window.innerHeight;

                element.style.height = alto + 'px';
        });

        let cuadrados = document.querySelectorAll('.slide > .row');

        cuadrados.forEach(element => {

                let alto = window.innerHeight;

                element.style.height = alto + 'px';
        });

   }

});