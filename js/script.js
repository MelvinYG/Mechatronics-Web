// document.addEventListener('DOMContentLoaded', function() {
//     const selector = '.nav-link';
//     const elems = Array.from( document.querySelectorAll( selector ) );
//     const navigation = document.querySelector( '.nav' );
    
//     function makeActive( evt ) {
//       const target = evt.target;
      
//       if ( !target || !target.matches( selector ) ) {
//         return;
//       }
      
//       elems.forEach( elem => elem.classList.remove( 'active' ) );
        
//         evt.target.classList.add( 'active' );
//     };
    
//     navigation.addEventListener( 'mousedown', makeActive );
//     console.log("script end");
//     } );

  document.addEventListener("DOMContentLoaded", function () {
    // Get the current path from the window location
    var currentPath = window.location.pathname.slice(1);
    console.log(currentPath);

    // Remove the "active" class from all links
    document.querySelectorAll(".nav-link").forEach(function (link) {
      link.classList.remove("active");
      console.log(link.getAttribute("href"));
      
      // Check if the current path matches the link's href
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  });
