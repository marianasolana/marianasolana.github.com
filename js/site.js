$(document).ready(function(){
  var languages = [ "es", "en" ];
  function change_lang(selected) {
    $.each(languages, function(index, lang) {
      if (selected == lang) 
        $("." + lang).show();
      else 
        $("." + lang).hide();
    });
  }
  $.each(languages, function(index, selected) {
    $(".language a[href=#" + selected + "]").click(function (e) {
      change_lang(selected);
    });
  });

  var hash = window.location.hash.substring(1);
  if($.inArray(languages, hash)) {
    change_lang(hash);
  }
});