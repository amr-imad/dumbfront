const clearHtml = ()=>{
    document.getElementById('ul').innerHTML = '';
}
const updateTable=(data)=>{
    clearHtml()
    const x = document.getElementById('ul')
    data.forEach(element => {
        const y = document.createElement('li')
        const d = document.createTextNode(element)
        y.appendChild(d)
        x.appendChild(y)
    });
}
async function getAll(){
    try {
        const x = await fetch('https://tempserver-jw6g.onrender.com/getAll')
        updateTable(await x.json())
    } catch (error) {
        console.log(`opps ${error.message}`)
    }
}
const updateResults=(data)=>{
    clearHtml()
    const x = document.getElementById('ul')
    data.forEach(element => {
        const y = document.createElement('li')
        const d = document.createTextNode(`${element.id} ${element.topic} ${element.description}`)
        y.appendChild(d)
        x.appendChild(y)
    });
}
async function getSearchResults(name){
    clearHtml()
    if(name.length<1){
        clearHtml()
        return
    }
    try {
        const x = await fetch('https://tempserver-jw6g.onrender.com/getSearchResults',{
            method:'post',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                name
            })
        })
        updateResults(await x.json())
    } catch (error) {
        console.log(`opps ${error.message}`)
    }
}

function updateHtml(text){
    clearHtml()
    const x = document.getElementById('ul')
    const y = document.createElement('li')
    const d = document.createTextNode(text)
    y.appendChild(d)
    x.appendChild(y)
}

const searchById=async (id)=>{
    clearHtml()
    try {
        const x = await fetch('https://tempserver-jw6g.onrender.com/getDetails',{
            method:'post',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                id
            })
        })
        updateHtml(await x.text())
    } catch (error) {
        console.log(`opps ${error.message}`)
    }
}

