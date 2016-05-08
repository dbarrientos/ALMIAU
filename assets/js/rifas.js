(function($){ 
  $(document).ready(function(){
      $(".datepicker").datepicker();
  });
  $.PREMIOS = [];
  var premio = function(imagen,valor){
    this.premio = valor;
    this.imagen = imagen;
  }
  function loadImageFileAsURL()
  {
      var descripcion = $("#itemadd").val();
      if(descripcion != "" && descripcion != null){
        var filesSelected = document.getElementById("inputFileToLoad").files;
        if (filesSelected.length > 0)
        {
            var fileToLoad = filesSelected[0];
     
            var fileReader = new FileReader();
     
            fileReader.onload = function(fileLoadedEvent) 
            {
                var premioobj = new premio(fileLoadedEvent.target.result, descripcion);
                $.PREMIOS.push(premioobj);
                var imagen = $('<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>').appendTo($('#premios-item')).on('click', function(){
                  $.PREMIOS.splice($.PREMIOS.indexOf(premioobj),1);
                  $(this).remove();
                });
                $('<img src="'+fileLoadedEvent.target.result+'" />').appendTo(imagen);
                $('<div></div>').html(descripcion).appendTo(imagen);
                $("#itemadd").val('');
            };
     
            fileReader.readAsDataURL(fileToLoad);
        }
      }
  }

  $("#inputFileToLoad").on('change',function(){
    loadImageFileAsURL();
  });
  /*VAMOH A CALMARNO*/
  $("#create").on('click', function(){
      var categoria = $("#categoriavalue").val();
      var name = $("#name").val();
      var lastname = $("#lastname").val();
      var descripcion = $("#descripcion").val();
      var value = $("#value").val();
      var min = $("#min").val();
      var max = $("#max").val();
      var date = $("#date").val();
      var premio = JSON.stringify($.PREMIOS);
      var ncuenta = $("#ncuenta").val();
      var tcuenta = $("#tcuenta").val();
      var banco = $("#banco").val();
      var titularcuenta = $("#titularcuenta").val();
      var rut = $("#rut").val();

      io.socket.request({
        method: "POST",
        url: "/lol",
        data:{
            categoria:categoria,
            name: name,
            lastname: lastname,
            descripcion: descripcion,
            value: value,
            min: min,
            max: max,
            date: date,
            premio: premio,
            ncuenta:ncuenta,
            tcuenta:tcuenta,
            banco: banco,
            titularcuenta: titularcuenta,
            rut:rut
          },
      }, function (resData, jwres){
        if(resData.status == 1){
          location.href = resData.link;
        }
        else
        {
          alert("Existio un error al generar la rifa.");
        }
    });
  })
  $(".catlink").on('click', function(){
    if($("#login").attr("status") == 1){
      location.href = "/raffle/new/"+$(this).attr("goto");
    }
    else
    {
      $("#LOGIN").modal();
    }
  });



})(jQuery);
