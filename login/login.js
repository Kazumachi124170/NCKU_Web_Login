$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()

    $.get('./login', {
      username: $('#ajax-form input[name=userName]').val(),
      password: $('#ajax-form input[name=passWord]').val(),
    }, (data) => {
      var obj=JSON.parse(data);
      //console.log(obj);
      if(obj.exist==true){
        alert(obj.text);
      }else{
        alert(obj.text);
      }
    })

  })
});

