var nameText = document.getElementById("name");
var emailText = document.getElementById("email");
var submitBtn = document.getElementById("submitBtn");

const firebaseRef = firebase.database().ref();




function submitDetail(){

	var nText = nameText.value;
	var eText = emailText.value;
		
	firebaseRef.push().set({
		name : nText,
		email : eText
	});

	window.alert("Subscribed Successfully")

}