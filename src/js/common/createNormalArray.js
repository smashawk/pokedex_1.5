import data from '../../data/pokemon_data.json';

const normalArray =[];
  
const createNormalArray = () => {
  for(let i = 0; i<934; i++){
    if(!(data[i].isMegaEvolution) && !(data[i].form)) {
      normalArray.push(data[i]);
    }
  }
}

createNormalArray();

export default normalArray;