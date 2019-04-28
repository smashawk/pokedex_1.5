const number = (state = 0, action) => {
  switch (action.type) {
    case 'NUM':
      return action.number;
    default:
      return state;
  }
};

export default number;