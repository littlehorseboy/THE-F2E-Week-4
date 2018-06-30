const store = new Vuex.Store({
  state: {
    products: [
      {
        id: '01',
        productName: 'LINEN BLAZER',
        subtitle: 'Men’s outfit',
        discription: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
      },
      {
        id: '02',
        productName: 'FREELIFT',
        subtitle: 'Men’s basics',
        discription: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
      },
      {
        id: '03',
        productName: 'SUPER SKINNY',
        subtitle: 'Men’s pattern shirts',
        discription: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
      },
      {
        id: '04',
        productName: 'DENIM',
        subtitle: 'Men’s cadual',
        discription: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
      },
      {
        id: '05',
        productName: 'SWEATSHIRTS',
        subtitle: 'Men’s jacket',
        discription: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
      },
      {
        id: '06',
        productName: 'VINTAGE DENIM',
        subtitle: 'Men’s classic',
        discription: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
      },
      {
        id: '07',
        productName: 'EDITION',
        subtitle: 'Men’s shirts',
        discription: 'In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene.',
      },
    ],
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    },
  },
  actions: {
    
  },
  mutations: {
    
  },
});
