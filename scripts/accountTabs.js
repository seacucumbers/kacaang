document.addEventListener("DOMContentLoaded", function () {
    // Trigger a click on the "Product" button by default
    document.getElementById("defaultOpen").click();
  });
  
  function openTab(evt, acct) {
    // Declare all variables
    var i, tabacctcontent, tablinks;
  
    // Get all elements with class="tabacctcontent" and hide them
    tabacctcontent = document.getElementsByClassName("tabacctcontent");
    for (i = 0; i < tabacctcontent.length; i++) {
        tabacctcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(acct).style.display = "block";
    evt.currentTarget.className += " active";
  }
  