// Constant values
const submitBtn = document.querySelector(".submit_btn");
const nameEdt = document.getElementById("name_edt");
const emailEdt = document.getElementById("email_edt");
const commentEdt = document.getElementById("comment_edt");

$(document).ready(() => {

    $(".details_header").css("font-weight","Bold");
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

    fadedHoverEffect("1");
    fadedHoverEffect("2");
    fadedHoverEffect("3");
    fadedHoverEffect("4");
    fadedHoverEffect("5");
    fadedHoverEffect("6");
    fadedHoverEffect("7");
    fadedHoverEffect("8");

    $('form').submit(function(e) {
        var username = $("#name_edt").val();
        var useremail = $("#email_edt").val();
        var feedback_text = $("#comment_edt").val();

        // Check whether the any field is empty
        if (username.trim() == ""){
            alert("The name field is empty");
        }
        else if(useremail.trim() == ""){
            alert("The email field is empty");
        }
        else if(feedback_text.trim() == ""){
            alert("The message field is empty");
        }
        else{
            alert(`${username} we have received your message. Thank you fro reaching out to us.`)
        }
        e.preventDefault();
    });
})

// This fun will toggle the visibility of the element, should be called when an element has been clicked
var toggleElementVisibility = (elementId) => {
    $("#" + elementId).slideToggle();
}

// This fun will add the fade effect to the hover, so that the user knows which item he's selected 
var fadedHoverEffect = (imageNum) => {
    var overlayText = document.getElementById("overlay" + imageNum);
    $("#portfolio_project_img_" + imageNum).hover(() => {
        $("#portfolio_project_img_" + imageNum).animate({opacity: "0.4"});
        overlayText.style.visibility = "visible";
    },() => {
        $("#portfolio_project_img_" + imageNum).animate({opacity: "1"});
        overlayText.style.visibility = "hidden";
    })
    
}

// This fun will add the hover effect to an image and display the text ontop of it
var addHoverEffect = (imageNum) => {
    var overlayText = document.getElementById("overlay" + imageNum)
    $("#portfolio_project_img_" + imageNum).hover(() => {
        overlayText.style.visibility = "visible";
    }, function(){
        overlayText.style.visibility = "hidden";
    })
}

var buttonOnclick = (button) => {
    button.addEventListener("click", () => {
        getUserFeedback();
        Event.preventDefault()
    })
}

// This is the fun that'll get us the text the user typed in 
var getUserFeedback = () => {
    var username = $("#name_edt").val();
    var useremail = $("#email_edt").val();
    var feedback_text = $("#comment_edt").val();

    // Check whether the any field is empty
    if (username.trim() == ""){
        alert("The name field is empty");
    }
    else if(useremail.trim() == ""){
        alert("The email field is empty");
    }
    else if(feedback_text.trim() == ""){
        alert("The message field is empty");
    }
    else{
        alert(`${username} we have received your message. Thank you fro reaching out to us.`)
    }
}