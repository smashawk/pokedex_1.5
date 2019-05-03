const poketype = (state = 0, action) => {
  switch (action.type) {
    case 'TYPE':
      return [action.poketype1, action.poketype2];
    default:
      return 0;
  }
};

export default poketype;