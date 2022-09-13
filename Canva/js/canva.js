function dibujarCanvas() {
    //Obtengo mi area de canvas por su ID
    var canvas = document.getElementById("miCanvas");
    //Genero el area de trabajo en 2D
    var contexto = canvas.getContext("2d");

    //Obtengo el input de tipo colorPicker
    var colorInput = document.getElementById("colorPicker");

        //Imagen
        var imagen = new Image();
        //Cargo la imagen desde su origen
        imagen.onload = function () {
            //Establezco que las coordenadas de inicio, ancho y alto
            contexto.drawImage(imagen, 0, 0, 500, 700);
        };
        imagen.src = "img/Hoodie.webp";
    

    
    

    //Cambio del color por medio de un escuchador
    colorInput.addEventListener("input", () => {
        //Defino variable para obtener color seleccionado
        var color = colorInput.value;
        
        //Aplico el color selccionado al area de trabajo
        miCanvas.style.backgroundColor = color;
    });

    
}
