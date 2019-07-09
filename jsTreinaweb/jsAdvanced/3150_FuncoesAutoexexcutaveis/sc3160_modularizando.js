const Template = (function () {
    const languageSelect = document.querySelector('#language-tags');
    const listElement = document.getElementById('list');

    let listItems = [];

    let languageTag = 'en-US';

    languageSelect.addEventListener("change", changeLanguage);

    function changeLanguage() {
        languageTag = languageSelect.value;
        render();
    }

    function setList(list) {
        listItems = list;
        render();
    }

    function render() {
        let html = '';
        const numberFormatter = new Intl.NumberFormat(languageTag);
        const dateFormatter = new Intl.DateTimeFormat(languageTag, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        listItems.forEach(item => {
            const forks = numberFormatter.format(item.forks);
            const createdAt = dateFormatter.format(new Date(item.created_at));
            html +=
                `
                <li>
                
                <div><b>Name: </b> ${item.name}</div>
                    
                    <div><b>Created At:</b>${createdAt}</div>
                    
                    <div><b>Forks: </b>${forks}</div>
                    
                
            </li>
        `});
        listElement.innerHTML = html;
    }
    return {
        setList
    }
})();

const Data = (function ($) {
    const searchInput = document.getElementById('mySearch');

    searchInput.addEventListener('keyup', search);

    function search(event) {
        if (event && event.keyCode === 13) {
            $.setList([
                {
                    name: 'Javascript 1',
                    created_at: '2019-07-25T20:10:50Z',
                    forks: 12380
                },
                {
                    name: 'Javascript 2',
                    created_at: '2019-07-25T20:10:50Z',
                    forks: 15800
                },
                {
                    name: 'Javascript 3',
                    created_at: '2019-07-25T20:10:50Z',
                    forks: 2570
                }
            ])

        }
    }
})(Template);