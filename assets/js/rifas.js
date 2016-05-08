(function($){ 
  $(document).ready(function(){
      $(".datepicker").datepicker();
  });

  function loadImageFileAsURL()
  {
      var filesSelected = document.getElementById("inputFileToLoad").files;
      alert(filesSelected );
      if (filesSelected.length > 0)
      {
          var fileToLoad = filesSelected[0];
   
          var fileReader = new FileReader();
   
          fileReader.onload = function(fileLoadedEvent) 
          {
              alert(fileLoadedEvent.target.result);
          };
   
          fileReader.readAsDataURL(fileToLoad);
      }
  }

  $("#loadImageFileAsURL").on('change',function(){
    loadImageFileAsURL();
  });
})(jQuery);
