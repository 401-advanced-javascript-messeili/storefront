const initialState = {
  categories: [
    {
      name: 'Electronics',
      displayName: 'Electronics',
    },
    {
      name: 'Food',
      displayName: 'Food',
    },
    {
      name: 'Clothing',
      displayName: 'Clothing',
    },
  ],
  activeCategory: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  // Not changing properly
  switch (type) {
    case 'CHANGE':
      let activeCategory = payload.name;
      console.log('ACTIVE CATEGORY: ', activeCategory);
      return { ...state, activeCategory };
    default:
      return state;
  }
};
