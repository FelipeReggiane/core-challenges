// PEGAR DATA E MANDAR PARA O SERVICE
import { ORDERS } from "../data/mockOrders";
import { itemsLibrary } from "../helpers/productTypeLibrary";
import { StatusLibrary } from "../helpers/statusLibrary";

type itemsType = {
  productType: string;
  status: string;
  date: Date;
  orderId: number;
};

type valueType = {
  miles: number;
  money: number;
};

type returnDataType = {
  items: itemsType[];
  value: valueType;
};

const productListMachine = () => {
  const data = ORDERS;
  const dataTreated = data.orderList.reduce(
    (acc: returnDataType[], order: any) => {
      const current: returnDataType = {
        items: [],
        value: {
          miles: parseInt(order.totals.total.miles),
          money: parseFloat(order.totals.total.money),
        },
      };

      const itens = order.itemList.map((itemList: any) => {
        // status
        const status: any = verifyStatus(
          order.status,
          order.subStatus,
          itemList
        );

        // productType
        const verifyPropert: any = verifyProductType(itemList);
        if (verifyPropert != null && verifyPropert != undefined) {
          return {
            productType: verifyPropert,
            status: status,
            date: order.date,
            orderId: order.orderId,
          };
        }
      });

      current.items = itens;
      acc.push(current);
      return acc;
    },
    []
  );

  return dataTreated;
};

const verifyProductType = (item: any) => {
  const initialValue = item;
  const returnItem = {
    key: [""],
    productType: "",
  };
  //map nos objetos da biblioteca para verificar qual se enquadra
  itemsLibrary.map((libraryItem: any) => {
    libraryItem.key.find((key: any) => {
      if (item[key]) {
        if (key === "booking" || key === "cancelBooking") {
          item = Object.keys(item[key])[0];
          returnItem.key = libraryItem.key;
          return true;
        } else {
          returnItem.key = libraryItem.key;
          return true;
        }
      } else {
        item = initialValue;
      }
    });
  });

  // encontra o valor que adiante dara valor ao productType
  if (returnItem.key[0] != "booking" && returnItem.key[0] != "cancelBooking") {
    returnItem.key.map((key: any) => {
      if (item[key]) {
        item = item[key];
      } else {
        item = initialValue;
      }
    });
  }

  // se o item != initialValue ele informa o productType , senão não encontrou o valor
  if (item != initialValue) {
    const findLibrary: any = itemsLibrary.find(
      (element) => element.key[0] === returnItem.key[0]
    );
    returnItem.productType = findLibrary.productType[item]
      ? findLibrary.productType[item]
      : findLibrary.productType["default"];
  } else {
    return null;
  }

  return returnItem.productType;
};

const verifyStatus = (orderStatus: any, orderSubStatus: any, itemList: any) => {
  if (itemList.miles && itemList.paymentData.gateway === "Pix") {
    if (StatusLibrary.miles.status[orderStatus]) {
      if (orderStatus === "PROCESSED" && orderSubStatus != "PROCESSED") {
        return StatusLibrary.miles.status["_STATUS_DEFAULT_KEY_"].key;
      } else {
        return StatusLibrary.miles.status[orderStatus].key;
      }
    }
  } else {
    if (StatusLibrary["_DEFAULT_TYPE_KEY_"].status[orderStatus]) {
      return StatusLibrary["_DEFAULT_TYPE_KEY_"].status[orderStatus].key;
    } else {
      return StatusLibrary["_DEFAULT_TYPE_KEY_"].status["_STATUS_DEFAULT_KEY_"]
        .key;
    }
  }
};

export default { productListMachine };
