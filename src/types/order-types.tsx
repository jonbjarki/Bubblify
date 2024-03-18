import { BubbleType } from "./bubble-types";

export enum DeliveryMethod {
  Pickup = "Pickup",
  Delivery = "Delivery",
}

export default interface Order {
  deliveryMethod: DeliveryMethod;
  name: string;
  address: string;
  city: string;
  telephone: string;
  postalCode: string;
}
