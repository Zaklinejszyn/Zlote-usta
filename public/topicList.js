let topiclist = document.querySelector('#topiclist');

axios.get('http://lvh.me:3000/api/topic').then((res) => {
    let topics = res.data;
    console.log(topics)

    for(let i = 0; i < topics.length; i++) {
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
        </div>`
    }

})