$(document).ready(function () {
	const total_budget = parseFloat($(".total_budget").find("span").text());
	// use parseFloat to convert text to a number!
	$("body").on("change", "input[type='checkbox']", function (e) {
		let remaining = total_budget;

		$("input[type='checkbox']:checked").each(function () {
			// the : allows for a pseudo-selector
			const $this_checkbox = $(this);
			const value = parseFloat($this_checkbox.val());

			remaining = remaining - value;

		});
		console.log(remaining);
		$(".total_budget").find("span").text(remaining);

		if (remaining < 0) {
			// make it red
			$(".total_budget").addClass("over");
		} else {
			$(".total_budget").removeClass("over");
		}
	});
});