import { fetchReadFoods, renderFoods } from "../utils/utils.js";

const header = () => {
  const searchForm = document.getElementById('searchForm');

  const searchFoods = async (e) => {
    e.preventDefault();
    const name = searchForm.name.value;
    const data = await fetchReadFoods(1, name);
    renderFoods(data);
  };

  searchForm.addEventListener('submit', searchFoods);
};

export default header;