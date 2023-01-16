import { fetchReadCharacters, readfoods } from "../modules/foods.js";

const header = () => {
  const searchForm = document.getElementById('searchForm');

  const searchFoods = async (e) => {
    e.preventDefault();
    const name = searchForm.name.value;
    
    const data = await fetchReadCharacters(name);
    //const dataArray=JSON.parse(data); 
      
    
    
    readfoods(data);
  };

  searchForm.addEventListener('submit', searchFoods);
};

export default header;