const loadData =()=>{
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then(response=>response.json())
    .then(data=>displayData(data.drinks))
}


const displayData = (data)=>{
    console.log(data);
    
    for(const drink in data){
        const drinkName = data[drink];
        console.log(drinkName);
        const displayDrink= document.getElementById("display-data");
        const drinkDiv = document.createElement("div");
        drinkDiv.classList.add("col-sm-12", "col-md-4", "col-lg-4");
        
        drinkDiv.innerHTML = `
        
        <div class="card h-100">
            <img src="${drinkName.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title fw-bolder bg-success text-white rounded text-center">${drinkName.strDrink}</h5>
            <p class="card-text bg-secondary text-center text-white rounded">Ingrediants:</p>
            <ul>
                <li>${drinkName.strIngredient1}</li>
                <li>${drinkName.strIngredient2}</li>
            </ul>
        </div>
        <div class="d-grid gap-2 card-footer">
                <button class="btn btn-primary mb-0" type="button" data-toggle="modal" data-target="#myModal">Instructions</button>
        </div>
      </div>
        `;

        const modal = document.getElementById("display-modal");
        modal.innerHTML = "";
        const modalDiv = document.createElement('div');
        modalDiv.classList.add("modal-content");

        modalDiv.innerHTML = `

        <div class="modal-header">
        <h5 class="modal-title"></h5>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
        <p class ="mb-1"><span class = "fw-bold">Capital:</span> </p>
        <p class ="mb-1"><span class = "fw-bold">Population:</span> </p>
        </div>
        <div class="modal-footer">
            <p class="text-center m-auto">For any editorial, feel free to email: abc@def.com</p>
        </div>
            `;


        modal.appendChild(modalDiv);
        displayDrink.appendChild(drinkDiv);
    }
    
}

loadData();