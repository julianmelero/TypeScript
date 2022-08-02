enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
 }

 type User = {
  username: string,
  rol: ROLES
 }

 const julianUser: User = {
  username: "julian",
  rol: ROLES.ADMIN
 };
