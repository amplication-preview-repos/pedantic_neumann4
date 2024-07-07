/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BoostWhereInput } from "./BoostWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BoostOrderByInput } from "./BoostOrderByInput";

@ArgsType()
class BoostFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BoostWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BoostWhereInput, { nullable: true })
  @Type(() => BoostWhereInput)
  where?: BoostWhereInput;

  @ApiProperty({
    required: false,
    type: [BoostOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BoostOrderByInput], { nullable: true })
  @Type(() => BoostOrderByInput)
  orderBy?: Array<BoostOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BoostFindManyArgs as BoostFindManyArgs };
