function mobile_button () {
    var navbar_items = document.getElementById( "navbar-items" )
    if ( navbar_items.style.display === "block" ) {
        navbar_items.style.display = "none";
    } else {
        navbar_items.style.display = "block";
    }
}

function checkWidth () {
    if ( document.documentElement.clientWidth > 650 ) {
        document.getElementById( "navbar-items" ).style.display = "block"
    }
}

window.addEventListener( "resize", checkWidth );