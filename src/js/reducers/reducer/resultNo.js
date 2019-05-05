const resultNo = (state = 0, action) => {
  switch (action.type) {
    case 'PARTNER':
      return action.resultNo;
    default:
      return 0;
  }
};

export default resultNo;