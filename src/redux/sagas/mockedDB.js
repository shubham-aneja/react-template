const allMockedProducts = [
  {
    name: 'Apple Iphone1',
    cost: 5000,
    id: 1,
    categories: [
      { name: 'phone ache wala', id: 1},
      { name: 'electronics', id: 2 }
    ]
  },
  {
    name: 'Apple Iphone2',
    cost: 10000,
    id: 2,
    categories: [
      { name: 'phone or ache wala', id: 11},
      { name: 'electronics', id: 22 }
    ]
  },
  {
    name: 'Apple Iphone3',
    cost: 150000,
    id: 1,
    categories: [
      { name: 'phone mehnge wala', id: 111},
      { name: 'electronics', id: 222 }
    ]
  }
];
export const mockedCategories = [
  {
    name: 'Cat1 from saga...',
    id: 1,
    subCategories: [
      {
        name: 'sub-cat1',
        id: 11,
        subCategories: [
          {
            name: 'sub-sub-cat1',
            id: 111
          }
        ]
      }
    ]
  },
  {
    name: 'cat2',
    id: 2,
    subCategories: [
      {
        name: 'sub-cat2',
        id: 22,
        subCategories: [
          {
            name: 'sub-sub-cat2',
            id: 222
          }
        ]
      }
    ]
  }
];


export const mockedProducts = (categoryId)=> {
  return allMockedProducts.filter(product=> {

    const matchedCategories = product.categories.filter(category=>{
      return category.id == categoryId
    });
    return matchedCategories.length > 0
  })
};
