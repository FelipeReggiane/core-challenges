export const itemsLibrary = [
  {
    key: ["fee", "type"],
    productType: {
      RESERVATION: "RESERVATION",
      NO_MILES_BOOKING: "NO_MILES_BOOKING",
      BOARDING: "BOARDING",
      CONVENIENCE: "CONVENIENCE_TAX",
      CANCELLATION: "CANCEL_FLIGHT",
    },
  },
  {
    key: ["cancelFee", "type"],
    productType: {
      BOARDING: "CANCEL_FLIGHT",
    },
  },
  {
    key: ["miles", "operation"],
    productType: {
      PURCHASE: "PURCHASE",
      REVALIDATION: "MILES_REVALIDATION",
      TRANSFER: "MILES_TRANSFER",
      EXTENSION: "MILES_EXTENSION",
      EXTEND: "MILES_EXTENSION",
    },
  },
  {
    key: ["product", "type"],
    productType: {
      TRAVEL_INSURANCE: "TRAVEL_INSURANCE_BUY",
      UBER_CREDIT: "UBER_CREDIT_BUY",
      UBER_PASS: "UBER_PASS_BUY",
      LOCALIZA: "LOCALIZA_BUY",
      CAR: "LOCALIZA_BUY",
    },
  },
  {
    key: ["cancelProduct", "type"],
    productType: {
      TRAVEL_INSURANCE: "TRAVEL_INSURANCE_CANCEL",
      UBER_CREDIT: "UBER_CREDIT_CANCEL",
      UBER_PASS: "UBER_PASS_CANCEL",
      LOCALIZA: "LOCALIZA_CANCEL",
      CAR: "LOCALIZA_CANCEL",
    },
  },
  {
    key: ["milesBack", "type"],
    productType: {
      BOOKING: "MILES_BACK_BOOKING",
      REGULARIZATION: "MILES_BACK_REGULARIZATION",
      default: "MILES_BACK",
    },
  },
  {
    key: ["membership", "club", "type"],
    productType: {
      BOARDING: "CANCEL_FLIGHT",
      UPGRADE: "UPGRADE_CLUB_SMILES",
      DOWNGRADE: "DOWNGRADE_CLUB_SMILES",
      MEMBERSHIP: "CLUB_SMILES",
      default: "CLUB_SMILES",
    },
  },
  {
    key: ["booking"],
    productType: {
      flight: "FLIGHT_BUY",
      seat: "SEAT_BUY",
      baggage: "BAGGAGE_BUY",
    },
  },
  {
    key: ["cancelBooking"],
    productType: {
      flight: "CANCEL_FLIGHT",
      baggage: "BAGGAGE_CANCEL",
    },
  },
];
