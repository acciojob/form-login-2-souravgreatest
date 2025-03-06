//your JS code here. If required.
let form=document.getElementById('form');
let val=form.eventListener('click',(e)={
	e.preventDefault();
	// alert(e);
	document.getElementById('first-name').value='Varuos';
	alert({
		`First Name: John Last Name: Doe Phone Number: 1234567890 Email ID: ${e.target.email}`
	})
})