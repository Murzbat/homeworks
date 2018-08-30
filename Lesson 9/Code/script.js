let User = document.getElementById('age')

function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
         console.log(this);

}

showUser.call(User);

//showUser();