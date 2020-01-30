window.currentUser = {
    isAuthenticated: false,
    user: {}
};

if(localStorage.getItem('user')) {
    window.currentUser.isAuthenticated = true;
    window.currentUser.user = JSON.parse(localStorage.getItem('user'));
}