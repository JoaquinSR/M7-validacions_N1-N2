const loginForm = document.getElementById("loginFormId");
const registerForm = document.getElementById("registerFormId");
const searchForm = document.getElementById("searchFormId");
const userL = 5;
const searchL = 3;

function loginValidate() {
	var acumErrores = 0;
	loginForm.classList.remove('is-invalid');

	var inputEmail = document.getElementById("email2");
	var inputPassword = document.getElementById("password2");

	if (inputEmail.value == "") {
		!obligatorio(inputEmail, "errorEmail");
		acumErrores++
	} else if (!validar_email(inputEmail.value)) {
		!formatoEmail(inputEmail, "errorEmail");
		acumErrores++;
	}

	if (inputPassword.value == "") {
		!obligatorio(inputPassword, "errorPassword");
		acumErrores++;
	} else if (!validar_password(inputPassword.value)) {
		!formatoPassword(inputPassword, "errorPassword");
		acumErrores++;
	}

	if (acumErrores > 0) {
		return false;
	} else {
		return true;
	}
}

function registerValidate() {
	var acumErrores = 0;
	registerForm.classList.remove('is-invalid');

	var inputUser = document.getElementById("username");
	var inputEmail = document.getElementById("email3");
	var inputPassword1 = document.getElementById("password3");
	var inputPassword2 = document.getElementById("password4");
	var inputProvince = document.getElementById("province");

	if (inputUser.value == "") {
		!obligatorio(inputUser, "errorUser");
		acumErrores++;
	} else if (inputUser.value.length < userL) {
		!largo(inputUser, "errorUser", userL);
		acumErrores++;
	}

	if (inputEmail.value == "") {
		!obligatorio(inputEmail, "errorEmail2");
		acumErrores++;
	} else if (!validar_email(inputEmail.value)) {
		!formatoEmail(inputEmail, "errorEmail2");
		acumErrores++;
	}

	if (inputPassword1.value == "") {
		!obligatorio(inputPassword1, "errorPassword1");
		acumErrores++;
	} else if (!validar_password(inputPassword1.value)) {
		!formatoPassword(inputPassword1, "errorPassword1");
		acumErrores++;
	}

	if (inputPassword2.value == "") {
		!obligatorio(inputPassword2, "errorPassword2");
		acumErrores++;
	} else if (inputPassword2.value !== inputPassword1.value) {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "La confirmación de la contraseña no coincide";
		acumErrores++;
	}

	if (inputProvince.value == "") {
		!obligatorio(inputProvince, "errorProvince");
		acumErrores++;
	}

	if (acumErrores > 0) {
		return false;
	} else {
		return true;
	}
}

function searchValidate() {
	var acumErrores = 0;
	searchForm.classList.remove('is-invalid');

	var inputSearch = document.getElementById("searchId");

	if (inputSearch.value == "") {
		!obligatorio(inputSearch, "errorSearch");
		acumErrores++;
	} else if (inputSearch.value.length < searchL) {
		!largo(inputSearch, "errorSearch", searchL);
		acumErrores++;
	}

	if (acumErrores > 0) {
		return false;
	} else {
		return true;
	}
}

!eventL(loginForm);
!eventL(registerForm);
!eventL(searchForm);

function validar_email(email) {
	var regex = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_password(password) {
	var regex = /(?=.*[A-Z])(?=.*[0-9]).{8,}/;
	return regex.test(password) ? true : false;
}

function eventL(formT) {
	formT.addEventListener('blur', (event) => {
		console.log(event);
		if (event.target.value != '') event.target.classList.remove('is-invalid');
	}, true);
}

function obligatorio(inputId, errorId) {
	inputId.classList.add("is-invalid");
	document.getElementById(errorId).textContent = "El campo es obligatorio";
}

function formatoEmail(inputId, errorId) {
	inputId.classList.add("is-invalid");
	document.getElementById(errorId).textContent = "El email no cumple el formato";
}

function formatoPassword(inputId, errorId) {
	inputId.classList.add("is-invalid");
	document.getElementById(errorId).textContent = "La contraseña debe contener como mínimo una mayúscula, un número y 8 caracteres ";
}

function largo(inputId, errorId, long) {
	inputId.classList.add("is-invalid");
	document.getElementById(errorId).textContent = "El campo debe contener como mínimo " + long + " caracteres";
}

