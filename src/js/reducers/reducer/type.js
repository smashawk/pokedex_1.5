const typeArray = (state = 0, action) => {
  switch (action.type) {
    case 'TYPE':
      return action.typeArray;
    default:
      return 0;
  }
};

export default typeArray;