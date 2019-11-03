//runs on doc ready
$(function(){
  $("button#dropbtn").click(function(){
    $("div.dropdown-content").css("display","block");
  });
});



  //drop down controls
  function tabs(evt, tab) {
    var i, tabcontent, tablinks;
    $("div.dropdown-content").css("display","none");
    tabcontent = document.getElementsByClassName("tabcontent");
    console.log(tabcontent.length);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  }
