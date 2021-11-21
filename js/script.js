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
})

// This fun will toggle the visibility of the element, should be called when an element has been clicked
var toggleElementVisibility = (elementId) => {
    $("#" + elementId).slideToggle();
}