/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClickCountService } from "../clickCount.service";
import { ClickCountCreateInput } from "./ClickCountCreateInput";
import { ClickCount } from "./ClickCount";
import { ClickCountFindManyArgs } from "./ClickCountFindManyArgs";
import { ClickCountWhereUniqueInput } from "./ClickCountWhereUniqueInput";
import { ClickCountUpdateInput } from "./ClickCountUpdateInput";

export class ClickCountControllerBase {
  constructor(protected readonly service: ClickCountService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ClickCount })
  async createClickCount(
    @common.Body() data: ClickCountCreateInput
  ): Promise<ClickCount> {
    return await this.service.createClickCount({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ClickCount] })
  @ApiNestedQuery(ClickCountFindManyArgs)
  async clickCounts(@common.Req() request: Request): Promise<ClickCount[]> {
    const args = plainToClass(ClickCountFindManyArgs, request.query);
    return this.service.clickCounts({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ClickCount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async clickCount(
    @common.Param() params: ClickCountWhereUniqueInput
  ): Promise<ClickCount | null> {
    const result = await this.service.clickCount({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ClickCount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateClickCount(
    @common.Param() params: ClickCountWhereUniqueInput,
    @common.Body() data: ClickCountUpdateInput
  ): Promise<ClickCount | null> {
    try {
      return await this.service.updateClickCount({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ClickCount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteClickCount(
    @common.Param() params: ClickCountWhereUniqueInput
  ): Promise<ClickCount | null> {
    try {
      return await this.service.deleteClickCount({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
