$(document).ready(() => {

    $(".design").click(() => {
        toggleElementVisibility("design_img");
        toggleElementVisibility("design_details");
    });

    $(".development").click(() => {
        toggleElementVisibility("development_img");
        toggleElementVisibility("development_details");
    });

    $(".product_management").click(() => {
        toggleElementVisibility("product_management_img");
        toggleElementVisibility("product_management_details");
    });

    addHoverEffect("1");
    addHoverEffect("2");
    addHoverEffect("3");
    addHoverEffect("4");
    addHoverEffect("5");
    addHoverEffect("6");
    addHoverEffect("7");
    addHoverEffect("8");
})

// This fun will toggle the visibility of the element, should be called when an element has been clicked
var toggleElementVisibility = (elementId) => {
    $("#" + elementId).slideToggle();
}

// This fun will adde the hover effect to an image and display the text ontop of it
var addHoverEffect = (imageNum) => {
    var overlayText = document.getElementById("overlay" + imageNum)
    $("#portfolio_project_img_" + imageNum).hover(() => {
        overlayText.style.visibility = "visible";
    }, function(){
        overlayText.style.visibility = "hidden";
    })
}