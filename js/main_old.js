document.addEventListener('DOMContentLoaded',function(){

   resizeProyectos();

   window.addEventListener('resize',resizeProyectos);

   function resizeProyectos(){

        let proyectos = document.querySelectorAll('#web #proyectos .col');

        proyectos.forEach(element => {
                let ancho = element.querySelector('.front').offsetWidth;
                let alto = element.querySelector('.front').offsetHeight;

                element.querySelector('.back').style.width = ancho + 'px';
                element.querySelector('.back').style.height = alto + 'px';
        });

   }

});