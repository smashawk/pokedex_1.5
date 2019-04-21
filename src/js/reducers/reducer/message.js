const message = (state = 'こんにちは', action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.message;
    default:
      return state;
  }
};

export default message;