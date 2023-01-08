import { fetchReadCharacters, readfoods } from "../modules/foods.js";

const characters = async () => {
  const previousCharacters = document.getElementById('previousCharacters');
  const nextCharacters = document.getElementById('nextCharacters');
  let page = "";

  previousCharacters.addEventListener('click', async () => {
    const data = await fetchReadCharacters(--page);
    //console.log(data);
    readfoods(data);
  });

  nextCharacters.addEventListener('click', async () => {
    const data = await fetchReadCharacters(++page);
    readfoods(data);
  });

  const data = await fetchReadCharacters(page);
  readfoods(data);
};

export default characters;