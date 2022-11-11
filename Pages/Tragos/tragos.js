const url = 'https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=gin';
const loadingElement = document.querySelector('#cocktail-loading');

const obtenerTragos = () => {
    return new Promise((res, rej) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0d8e3e1399msh9eef59db5652c78p11e259jsnafe23a1a7d48',
                'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com'
              }
        })
        .then(response => response.json())
        .then(data => res(data))
        .catch(err => rej(err))
    })
}


const mostrarTragos = async () => {
    const data = await obtenerTragos();    
    const cocktailContainer = document.querySelector('#cocktail-container');
    const container = document.createDocumentFragment();
    if(data && data.length > 0) {
        data.forEach((cocktail) => {
            const card = document.createElement('div');
            card.classList.add('cocktail-card');
    
            const name = document.createElement('span');
            name.innerText = cocktail.name;
            name.classList.add('cocktail-name')
            card.appendChild(name);

            const ingredientsTitle = document.createElement('span');
            ingredientsTitle.innerText = 'Ingredients:'
            card.appendChild(ingredientsTitle)

            const ingredientsContainer = document.createElement('ul')
            ingredientsContainer.classList.add('ingredients-list')
            cocktail.ingredients.forEach((ingredient) => {
                const ingredientSpan = document.createElement('li'); 
                ingredientSpan.innerText = `- ${ingredient}`;
                ingredientsContainer.appendChild(ingredientSpan)
            })
            card.appendChild(ingredientsContainer)


            const instructionsTitle = document.createElement('span');
            instructionsTitle.innerText = 'Instructions:'
            card.appendChild(instructionsTitle)

            const instructions = document.createElement('span'); 
            instructions.classList.add('cocktail-instructions')
            instructions.innerText = cocktail.instructions;
            card.appendChild(instructions)
        
            container.appendChild(card)
        })
    }

    loadingElement.classList.add('d-none');
    cocktailContainer.classList.remove('d-none')
    cocktailContainer.appendChild(container);
}

mostrarTragos();