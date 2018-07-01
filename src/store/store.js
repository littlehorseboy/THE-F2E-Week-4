const store = new Vuex.Store({
  state: {
    products: [
      {
        id: '01',
        productName: 'LINEN BLAZER',
        subtitle: 'Men’s outfit',
        discription: faker.lorem.paragraphs(),
        topImgSrc: 'https://source.unsplash.com/seTr2ZmQDcM/600x700',
        bottomImgSrc: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
        bottomImgSrc2: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
      },
      {
        id: '02',
        productName: 'FREELIFT',
        subtitle: 'Men’s basics',
        discription: faker.lorem.paragraphs(),
        topImgSrc: 'https://source.unsplash.com/us2M25dyCUo/500x800',
        bottomImgSrc: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
        bottomImgSrc2: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
      },
      {
        id: '03',
        productName: 'SUPER SKINNY',
        subtitle: 'Men’s pattern shirts',
        discription: faker.lorem.paragraphs(),
        topImgSrc: 'https://source.unsplash.com/wKOKidNT14w/650x400',
        bottomImgSrc: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
        bottomImgSrc2: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
      },
      {
        id: '04',
        productName: 'DENIM',
        subtitle: 'Men’s cadual',
        discription: faker.lorem.paragraphs(),
        topImgSrc: 'https://source.unsplash.com/muWowSks60w/400x800',
        bottomImgSrc: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
        bottomImgSrc2: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
      },
      {
        id: '05',
        productName: 'SWEATSHIRTS',
        subtitle: 'Men’s jacket',
        discription: faker.lorem.paragraphs(),
        topImgSrc: 'https://source.unsplash.com/pNiOqjbMKIc/500x300',
        bottomImgSrc: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
        bottomImgSrc2: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
      },
      {
        id: '06',
        productName: 'VINTAGE DENIM',
        subtitle: 'Men’s classic',
        discription: faker.lorem.paragraphs(),
        topImgSrc: 'https://source.unsplash.com/ZPykEqAQv0M/600x700',
        bottomImgSrc: 'https://source.unsplash.com/BbHDqrI4l08/600x700',
        bottomImgSrc2: 'https://source.unsplash.com/QrXuLjgBnrg/600x700',
      },
      {
        id: '07',
        productName: 'EDITION',
        subtitle: 'Men’s shirts',
        discription: faker.lorem.paragraphs(),
        topImgSrc: 'https://source.unsplash.com/mXu1SpzHq6w/600x800',
        bottomImgSrc: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
        bottomImgSrc2: `https://source.unsplash.com/random?sig=${_.random(0, 50)}`,
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
