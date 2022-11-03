import { describe } from '@jest/globals';
import request from 'supertest';

import { ORDERS_FINAL_RESPONSE } from '../src/data/mockOrders';
import app from '../src/server';

describe("Product List", () => {
  test("Expect test to be exatly equals to mock", async () => {
    // jest
    //   .spyOn(Machine, "productListMachine")
    //   .mockReturnValue(JSON.stringify(ORDERS_FINAL_RESPONSE));

    const response = await request(app).get("/api/productList");

    expect(response.body).toBe(JSON.stringify(ORDERS_FINAL_RESPONSE));
  });
  test("teste ", async () => {
    // const array = [{teste: 01}];
    // const array2 = [];
    // expect(array).toBe(array2);
  });
});
