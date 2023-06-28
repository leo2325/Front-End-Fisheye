// eslint-disable-next-line
function contactFormFactory(data) {
    const { name } = data;

    function getUserNameDOM(){
        const photographerNameBox = document.getElementById('modal').header;
        const photographerName = document.createElement('h2');
        photographerName.setAttribute('id', 'photographerName')
        photographerName.innerText = name;
        
        photographerNameBox.appendChild(photographerName);
        return (photographerNameBox);
    }
    return { name, getUserNameDOM }
}

