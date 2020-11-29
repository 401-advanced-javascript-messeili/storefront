const initialState = {
  products: [
    {
      name: 'TV',
      category: 'Electronics',
      price: '$699.00',
      inStock: 5,
      image: 'https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141_960_720.png',
    },
    {
      name: 'Radio',
      category: 'Electronics',
      description: 'bacon!!',
      price: '$99.00',
      inStock: 15,
      image: 'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png',
    },
    {
      name: 'Shirt',
      category: 'Clothing',
      price: '$9.00',
      inStock: 25,
      image: 'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png',
    },
    {
      name: 'Socks',
      category: 'Clothing',
      price: '$99.00',
      inStock: 500,
      image: 'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png',
    },
    {
      name: 'Eggs',
      category: 'Food',
      price: '$1.99',
      inStock: 12,
      image: 'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png',
    },
    {
      name: 'Bread',
      category: 'Food',
      price: '$2.39',
      inStock: 90,
      image: 'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png',
    },
  ],
  productsToDisplay: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  console.log('in product ACTION???', action);

  switch (type) {
    case 'CHANGE':
      let targetCategory = payload.name;
      let productsToDisplay = state.products.filter((product) => {
        return product.category === targetCategory;
      });
      return { ...state, productsToDisplay };
    default:
      return state;
  }
};

export const changeActiveCategory = (name) => {
  return {
    type: 'CHANGE',
    payload: name,
  };
};
