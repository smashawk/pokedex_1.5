const reset = (state = 0, action) => {
  switch (action.type) {
    case 'RESET':
      return '';
    default:
      return 0;
  }
};

export default reset;