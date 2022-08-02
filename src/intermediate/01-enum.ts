export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
 }

 export type User = {
  username: string,
  rol: ROLES
 }

 const julianUser: User = {
  username: "julian",
  rol: ROLES.ADMIN
 };
