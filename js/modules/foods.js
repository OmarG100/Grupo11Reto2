const foods = () => {
  const renderFoods = (data) => {
    const foodsFoods = document.getElementById('foodsFoods');

    data.forEach((element) => {
      console.log(element);
      const { id, name, description, urlImage, urlRecipe, lugaresTuristicos,precioOferta, precioRegular,Duracion } = element;
      console.log(element);
      foodsFoods.innerHTML += `
          <div class="col-md-4" key=${id}>
            <div class="card bg-dark border border-2 border-light border-opacity-25 h-100 mx-auto"
              style="width: min(100%, 18rem);">
              <div class="card-header text-center">
                ${name}
              </div>
              <div class="card-body">
                <img src="${urlImage}" class="card-img-top" alt="Anime 1" width="256" height="144"
                  style="width: 100%; height: 192px; object-fit: cover; border-radius: 0.5rem">
                <h5 class="card-title mt-2">${name}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">${lugaresTuristicos[0].name}</p>
                <p class="card-text">${lugaresTuristicos[1].name}</p>
                <p class="card-text">${lugaresTuristicos[2].name}</p>
                <p class="card-text">${lugaresTuristicos[3].name}</p>
              </div>
              <footer class="pokemon__footer">
              <div class="pokemon__footer-stats">
                <h3 class="pokemon__footer-stats-base">${precioOferta}</h3>
                <p class="pokemon__footer-stats-name">Oferta</p>
                
              </div>
              <div class="pokemon__footer-stats">
              <h3 class="pokemon__footer-stats-base">${precioRegular}</h3>
              <p class="pokemon__footer-stats-name">Regular</p>
             
            </div>
            <div class="pokemon__footer-stats">
            <h3 class="pokemon__footer-stats-base">${Duracion}</h3>            
            <p class="pokemon__footer-stats-name">Duración</p>
          </div>
            </footer>
              <div class="card-footer text-center">
                <a href="${urlRecipe}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Reservar</a>
              </div>
            </div>
          </div>
        `;
    });
  };

  const fetchRead = async () => {
    // const response = await fetch('https://elliotgaramendi.github.io/frontend-tecsup-e-g11/semana-8/3-chanchirata/api/data.json');
    const response = await fetch('./api/data.json');
    const data = await response.json();
    renderFoods(data);
  };
  fetchRead();
};

export default foods;