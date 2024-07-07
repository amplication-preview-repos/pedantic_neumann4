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
import { BatteryCountService } from "../batteryCount.service";
import { BatteryCountCreateInput } from "./BatteryCountCreateInput";
import { BatteryCount } from "./BatteryCount";
import { BatteryCountFindManyArgs } from "./BatteryCountFindManyArgs";
import { BatteryCountWhereUniqueInput } from "./BatteryCountWhereUniqueInput";
import { BatteryCountUpdateInput } from "./BatteryCountUpdateInput";

export class BatteryCountControllerBase {
  constructor(protected readonly service: BatteryCountService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BatteryCount })
  async createBatteryCount(
    @common.Body() data: BatteryCountCreateInput
  ): Promise<BatteryCount> {
    return await this.service.createBatteryCount({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BatteryCount] })
  @ApiNestedQuery(BatteryCountFindManyArgs)
  async batteryCounts(@common.Req() request: Request): Promise<BatteryCount[]> {
    const args = plainToClass(BatteryCountFindManyArgs, request.query);
    return this.service.batteryCounts({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BatteryCount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async batteryCount(
    @common.Param() params: BatteryCountWhereUniqueInput
  ): Promise<BatteryCount | null> {
    const result = await this.service.batteryCount({
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
  @swagger.ApiOkResponse({ type: BatteryCount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBatteryCount(
    @common.Param() params: BatteryCountWhereUniqueInput,
    @common.Body() data: BatteryCountUpdateInput
  ): Promise<BatteryCount | null> {
    try {
      return await this.service.updateBatteryCount({
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
  @swagger.ApiOkResponse({ type: BatteryCount })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBatteryCount(
    @common.Param() params: BatteryCountWhereUniqueInput
  ): Promise<BatteryCount | null> {
    try {
      return await this.service.deleteBatteryCount({
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
