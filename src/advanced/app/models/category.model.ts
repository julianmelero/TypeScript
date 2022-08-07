export enum AccessTyoe {
  PRIVATE = 'private',
  PUBLIC = 'public'
}

export interface Category {
  id:    number;
  name:  string;
  image: string;
  acces?: AccessTyoe
}
