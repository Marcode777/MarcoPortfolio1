   $('.carousel').carousel({
        interval: 2500
    });

   $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})