let topiclist = document.querySelector('#topiclist');

axios.get('http://lvh.me:3000/api/topicAdmin').then((res) => {
    let topics = res.data;
    console.log(topics)

    for(let i = 0; i < topics.length; i++) {
        if(topics[i].isAccepted){

        }
        topiclist.innerHTML += `
        <div class="topic">
            <div class="topicTitle">
                <h2>
                    ${topics[i].title}
                </h2>
            </div>
                <div class="topicDescription">
                <p>
                    ${topics[i].description}
                </p>
            </div>
            <div class="topicManage">
                <button class="manageButton" id="accept" name="${topics[i]._id}">Wyświetl</button>
                <button class="manageButton">Ukryj</button>
                <button class="manageButton">Usuń</button>
            </div>
        </div>`
    }
    Abc();
})
function Abc(){
    aa = document.querySelectorAll(".topicManage");
    
    for(let i = 0; i<aa.length; i++){
        aa[i].addEventListener("click", e=>{
            acceptTopic(e.target.name);
        })
    }
}
function acceptTopic(id){
    console.log(id);
    axios.post('http://lvh.me:3000/api/topicAdmin', {_id: id}).then();
}