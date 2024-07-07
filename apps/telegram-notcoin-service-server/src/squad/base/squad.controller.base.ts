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
import { SquadService } from "../squad.service";
import { SquadCreateInput } from "./SquadCreateInput";
import { Squad } from "./Squad";
import { SquadFindManyArgs } from "./SquadFindManyArgs";
import { SquadWhereUniqueInput } from "./SquadWhereUniqueInput";
import { SquadUpdateInput } from "./SquadUpdateInput";

export class SquadControllerBase {
  constructor(protected readonly service: SquadService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Squad })
  async createSquad(@common.Body() data: SquadCreateInput): Promise<Squad> {
    return await this.service.createSquad({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Squad] })
  @ApiNestedQuery(SquadFindManyArgs)
  async squads(@common.Req() request: Request): Promise<Squad[]> {
    const args = plainToClass(SquadFindManyArgs, request.query);
    return this.service.squads({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Squad })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async squad(
    @common.Param() params: SquadWhereUniqueInput
  ): Promise<Squad | null> {
    const result = await this.service.squad({
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
  @swagger.ApiOkResponse({ type: Squad })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSquad(
    @common.Param() params: SquadWhereUniqueInput,
    @common.Body() data: SquadUpdateInput
  ): Promise<Squad | null> {
    try {
      return await this.service.updateSquad({
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
  @swagger.ApiOkResponse({ type: Squad })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSquad(
    @common.Param() params: SquadWhereUniqueInput
  ): Promise<Squad | null> {
    try {
      return await this.service.deleteSquad({
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
