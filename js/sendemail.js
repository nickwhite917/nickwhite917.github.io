function validateForm() {
	"use strict";
	var title = $("#name").val();
	var err = true;
	if (title == "" || title == null) {
		$("#name").addClass("validation");

		var err = false;
	} else {
		$("#name").removeClass("validation");
	}
	var email = $("#email").val();
	if (!(/(.+)@(.+){2,}\.(.+){2,}/.test(email))) {
		$("#email").addClass("validation");

		var err = false;
	} else {
		$("#email").removeClass("validation");
	}
	var title = $("#message").val();
	if (title == "" || title == null) {
		$("#message").addClass("validation");
		var err = false;
	} else {
		$("#message").removeClass("validation");
	}
	return err;
}
$(document).ready(function () {
	"use strict";
	$("#button").click(function (e) {
		if (validateForm()) {
			e.preventDefault();
			console.log("Sending email!")
			$.ajax({
				type: "POST",
				url: "http://formspree.io/nickwhite917@yahoo.com",
				data: $("#ContactForm").serialize(),
				success: function (result) {
					$("#successmsg").html(result);
				},
				error: function (result) {
					$("#successmsg").html(result);
				}
			});
			console.log("Sent!");
			$("#name").val('');
			$("#email").val('');
			$("#message").val('');
			// $("#successmsg").remove();
		}
		else {
			return false;
		}
	});
});
        