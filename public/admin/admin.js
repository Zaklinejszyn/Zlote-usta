console.log(currentUser)
if(currentUser.user.admin) {
    document.body.innerHTML = currentUser.user.name + ' ' + currentUser.user.email
} else {
    document.body.innerHTML = 'Nie masz uprawnień'
}