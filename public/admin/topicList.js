//const db = require("../../models");
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
                <button class="manageButton">Wyświetl</button>
                <button class="manageButton">Ukryj</button>
                <button class="manageButton">Usuń</button>
            </div>
        </div>`
    }

})

// const Accept = async(req, res) =>{
//     const query = { "_id": topics[i]._id};
//     const update = {
//         "$set": {
//           "isAccepted": "true"
//         }
//       };
//     try{
//         db.Topic.updateOne(query, update);
//     }catch(err){
//         console.log(err);
//     }
// }