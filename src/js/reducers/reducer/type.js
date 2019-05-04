const subTypeArray = (state = 0, action) => {
  switch (action.type) {
    case 'TYPE':
      return action.subTypeArray;
    default:
      return 0;
  }
};

export default subTypeArray;