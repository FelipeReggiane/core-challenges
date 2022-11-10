export const StatusLibrary: Record<string, any> = {
  miles: {
    gateway: "PIX",
    status: {
      PROCESSED: {
        subStatus: "PROCESSED",
        key: "APPROVED",
      },
      CANCELLED: {
        key: "CANCELED",
      },
      NEW: {
        key: "PENDING",
      },
      PENDING_PAYMENT: {
        key: "PENDING",
      },
      PENDING_APPROVAL: {
        key: "PENDING",
      },
      CANCELLED_BY_ERROR: {
        key: "CANCELED",
      },
      CANCELLED_BY_FRAUD: {
        key: "CANCELED",
      },
      CANCELLED_FROM_USER: {
        key: "CANCELED",
      },
      IN_PROGRESS: {
        key: "PENDING",
      },
      _STATUS_DEFAULT_KEY_: {
        key: "PENDING",
      },
    },
  },
  _DEFAULT_TYPE_KEY_: {
    status: {
      CANCELLED: {
        key: "CANCELED",
      },
      PENDING_PAYMENT: {
        key: "PENDING",
      },
      PROCESSED: {
        key: "CONCLUDED",
      },
      PENDING_APPROVAL: {
        key: "APPROVED",
      },
      _STATUS_DEFAULT_KEY_: {
        key: "RECEIVED",
      },
    },
  },
};
