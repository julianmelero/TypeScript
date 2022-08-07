import { AccessTyoe, Category } from "../models/category.model";

// If it starts with capital letter is a decorator, otherwise is a function
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from 'class-validator';
import { format } from "date-fns";

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4,140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(AccessTyoe)
  access?: AccessTyoe | undefined;

}


(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'a';
    dto.image = '';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})()
