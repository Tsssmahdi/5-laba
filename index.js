function formatDate(date) {
    var d = new Date(date),
        month = d.getMonth(),
        date = d.getDate(),
        year = d.getFullYear();

    month++;

    return month + "." + date + "." + year;
}

async function parse (){
    let response = await fetch('https://randomuser.me/api/?results=10');
    let parsed = await response.json();
    for (let i = 0; i < 10; i++) {
        let card = `
        <div class=card>
            <img src="${parsed.results[i].picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${parsed.results[i].name.first + parsed.results[i].name.last}</h5>
                
                <p class="card-text">${parsed.results[i].gender}</p>
                <p class="card-text">${parsed.results[i].location.country + parsed.results[i].location.city}</p>
                <p class="card-text">${parsed.results[i].email}</p>
                <p class="card-text">${formatDate(parsed.results[i].dob.date)}</p>
                <p class="card-text">${parsed.results[i].phone}</p>
            </div>
        </div>`;
        cardclass.insertAdjacentHTML("afterbegin", card);


    }

}
parse();