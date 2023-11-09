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
        // tabacctcontent[i].classList.remove("current");

    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(acct).style.display = "block";
    evt.currentTarget.className += " active";
    // document.getElementById(acct).classList.add("current");
  }

//   function lefthover() {
//     const current = document.getElementsByClassName("current");
//     for (i = 0; i < current.length; i++) {
//       let children = current.querySelectorAll('.actrect');
// children.style.birderTopRightRadius = "0";
//   }
// }

// function lefthover() {
//   const current = document.querySelector(".current");

//   if (current) {
//     current = current.children;

//     for (let i = 0; i < childElements.length; i++) {
//       // Apply styles to child elements as needed
//       childElements[i].style.borderTopLeftRadius = "0";
//     }
//   }
// }

  


// document.addEventListener("DOMContentLoaded", function () {
//   // Trigger a click on the "Profile" button by default
//   document.getElementById("defaultOpen").click();
// });

// function openTab(evt, acct) {
//   // Declare all variables
//   var i, tabacctcontent, tablinks;

//   // Get all elements with class="tabacctcontent" and hide them
//   tabacctcontent = document.getElementsByClassName("tabacctcontent");
//   for (i = 0; i < tabacctcontent.length; i++) {
//     tabacctcontent[i].style.display = "none";
//     // Remove "current" class from all tab content elements
//     tabacctcontent[i].classList.remove("current");
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   var currentTab = document.getElementById(acct);
//   currentTab.style.display = "block";
//   evt.currentTarget.className += " active";

//   // Set "current" class to the child div within the current tab content
//   var childDiv = currentTab.querySelector(".acctrect, .acctrect-left, .acctrect-right");
//   if (childDiv) {
//     childDiv.classList.add("current");
//   }
// }

// function lefthover() {
//   const current = document.getElementsByClassName("current");
//   for (let i = 0; i < current.length; i++) {
//     current[i].style.borderTopLeftRadius = "0";
//   }
// }

// // Add a similar function for righthover() if needed
// function righthover() {
//   const current = document.getElementsByClassName("current");
//   for (let i = 0; i < current.length; i++) {
//     // Add styles or behavior for righthover()
//   }
// }
