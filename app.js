const loadData =()=>{
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then(response=>response.json())
    .then(data=>displayData(data.drinks))
}

const loadModalData = (drinkId) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
    fetch(url)
    .then(response => response.json())
    .then(data => modalFunc(data.drinks[0]));
}


const displayData = (data)=>{
    console.log(data);
    
    for(const drink in data){
        const drinkName = data[drink];
        const displayDrink= document.getElementById("display-data");
        const drinkDiv = document.createElement("div");
        drinkDiv.classList.add("col-sm-12", "col-md-4", "col-lg-4");
        
        drinkDiv.innerHTML = `
        
        <div class="card h-100">
            <img src="${drinkName.strDrinkThumb}" class="card-img-top" alt="drink image">
        <div class="card-body">
            <h5 class="card-title fw-bolder bg-success text-white rounded text-center">${drinkName.strDrink}</h5>
            <p class="card-text bg-secondary text-center text-white rounded">Category:</p>
            <ul>
                <li>${drinkName.strAlcoholic}</li>
                <li>${drinkName.strCategory}</li>
            </ul>
        </div>
        <div class="d-grid gap-2 card-footer">
                <button class="btn btn-primary mb-0" type="button" data-toggle="modal" data-target="#myModal" onclick="loadModalData(${drinkName.idDrink})" >Instructions</button>
        </div>
      </div>
        `;
        displayDrink.appendChild(drinkDiv);
    }
    
}
loadData();


const modalFunc = (data) =>{
    const modal = document.getElementById("display-modal");
    modal.innerHTML = "";
    const modalDiv = document.createElement('div');
    modalDiv.classList.add("modal-content");

    modalDiv.innerHTML = `

    <div class="modal-header bg-primary text-white">
    <h5 class="modal-title fw-bolder">${data.strDrink}</h5>
    <button type="button" class="btn-close bg-light" data-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <p class="card-text bg-secondary text-center text-white rounded">Ingredients:</p>
        <ul>
            <li>${data.strIngredient1}</li>
            <li>${data.strIngredient2}</li>
            <li>${data.strIngredient3}</li>
            <li>${data.strIngredient4}</li>
        </ul>
        <p class="card-text bg-secondary text-center text-white rounded">Instructions:</p>
        <p>${data.strInstructions}</p>
    </div>
    <div class="modal-footer">
        <p class="text-center m-auto">For any editorial, feel free to email: abc@def.com</p>
    </div>
        `;

    modal.appendChild(modalDiv);
}
