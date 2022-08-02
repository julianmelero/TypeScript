import { User,ROLES } from './01-enum';

const currentUser: User = {
  username: 'julian',
  rol: ROLES.ADMIN
};


export const checkAdminRole = () => {
  if(currentUser.rol === ROLES.ADMIN) {
    return true;
  }else {
    return false;
  }
}


const rta = checkAdminRole();
console.log(rta);


export const checkRole = (role1:string, role2: string) => {
  if(currentUser.rol === role1) {
    return true;
  }
  if(currentUser.rol === role2) {
    return true;
  }
}

const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER)
console.log('checkrole',rta2);

export const checkRoleV2 = (roles: string[]) => {
  if(roles.includes(currentUser.rol)) {
    return true;
  }
  else {
    return false;
  }

}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER])
console.log('checkroleV2',rta3);


export const checkRoleV3 = (...roles: string[]) => {
  if(roles.includes(currentUser.rol)) {
    return true;
  }
  else {
    return false;
  }

}

const rta4 = checkRoleV3(ROLES.CUSTOMER, ROLES.SELLER)
console.log('checkroleV3',rta4);

