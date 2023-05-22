import React, { createContext } from "react";
import { faker } from "@faker-js/faker";

const cartContext = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlPicsumPhotos,
    inStock: faker.helpers.arrayElements([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
  }));

  console.log(products);

  return <cartContext.Provider>{children}</cartContext.Provider>;
};

export default Context;
