/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BatteryCountWhereInput } from "./BatteryCountWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BatteryCountListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BatteryCountWhereInput,
  })
  @ValidateNested()
  @Type(() => BatteryCountWhereInput)
  @IsOptional()
  @Field(() => BatteryCountWhereInput, {
    nullable: true,
  })
  every?: BatteryCountWhereInput;

  @ApiProperty({
    required: false,
    type: () => BatteryCountWhereInput,
  })
  @ValidateNested()
  @Type(() => BatteryCountWhereInput)
  @IsOptional()
  @Field(() => BatteryCountWhereInput, {
    nullable: true,
  })
  some?: BatteryCountWhereInput;

  @ApiProperty({
    required: false,
    type: () => BatteryCountWhereInput,
  })
  @ValidateNested()
  @Type(() => BatteryCountWhereInput)
  @IsOptional()
  @Field(() => BatteryCountWhereInput, {
    nullable: true,
  })
  none?: BatteryCountWhereInput;
}
export { BatteryCountListRelationFilter as BatteryCountListRelationFilter };