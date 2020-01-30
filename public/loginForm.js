let form = document.querySelector('form');
let email = document.querySelector('#email')
let password = document.querySelector('#password')

form.addEventListener('submit', async function(e) {
    console.log(e);
    e.preventDefault();
    try {
    let res = await axios.post('http://172.31.110.116:3000/api/login', {
        email: email.value,
        password: password.value
    })
    
    localStorage.setItem('user', JSON.stringify(res.data))
    } catch(err) {
        console.log(err)
    }
    //console.log(res);
});