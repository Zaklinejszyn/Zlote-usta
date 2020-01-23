let form = document.querySelector('form');
let email = document.querySelector('#email')
let password = document.querySelector('#password')

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    try {
    let res = await axios.post('http://localhost:3000/api/login', {
        email: email.value,
        password: password.value
    })
    
    localStorage.setItem('user', JSON.stringify(res.data))
    } catch(err) {
        console.log(err)
    }
    //console.log(res);
});