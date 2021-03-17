const loginForm = document.getElementById("loginFormId");
const registerForm = document.getElementById("registerFormId");
const searchForm = document.getElementById("searchFormId");

function loginValidate() {
	var acumErrores = 0;
	loginForm.classList.remove('is-invalid');

	var inputEmail = document.getElementById("email2");
	var inputPassword = document.getElementById("password2");

	if (inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El campo es obligatorio";
		acumErrores++;
	} else if (!validar_email(inputEmail.value)) {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores++;
	}

	if (inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "El campo es obligatorio";
		acumErrores++;
	} else if (!validar_password(inputPassword.value)) {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "La contraseña debe contener como mínimo una mayúscula, un número y 8 caracteres ";
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
		inputUser.classList.add("is-invalid");
		document.getElementById("errorUser").textContent = "El campo es obligatorio";
		acumErrores++;
	} else if (inputUser.value.length < 5) {
		inputUser.classList.add("is-invalid");
		document.getElementById("errorUser").textContent = "El usuario debe contener como mínimo 5 caracteres";
		acumErrores++;
	}

	if (inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail2").textContent = "El campo es obligatorio";
		acumErrores++;
	} else if (!validar_email(inputEmail.value)) {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail2").textContent = "El email no cumple el formato";
		acumErrores++;
	}

	if (inputPassword1.value == "") {
		inputPassword1.classList.add("is-invalid");
		document.getElementById("errorPassword1").textContent = "El campo es obligatorio";
		acumErrores++;
	} else if (!validar_password(inputPassword1.value)) {
		inputPassword1.classList.add("is-invalid");
		document.getElementById("errorPassword1").textContent = "La contraseña debe tener como mínimo una mayúscula, un número y 8 caracteres ";
		acumErrores++;
	}

	if (inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "El campo es obligatorio";
		acumErrores++;
	} else if (inputPassword2.value !== inputPassword1.value) {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "La confirmación de la contraseña no coincide";
		acumErrores++;
	}

	if (inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "El campo es obligatorio";
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
		inputSearch.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "El campo es obligatorio";
		acumErrores++;
	} else if (inputSearch.value.length < 3) {
		inputSearch.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "La busqueda debe contener como mínimo 3 caracteres";
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

