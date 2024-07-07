/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ClickCount as PrismaClickCount } from "@prisma/client";

export class ClickCountServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClickCountCountArgs, "select">
  ): Promise<number> {
    return this.prisma.clickCount.count(args);
  }

  async clickCounts(
    args: Prisma.ClickCountFindManyArgs
  ): Promise<PrismaClickCount[]> {
    return this.prisma.clickCount.findMany(args);
  }
  async clickCount(
    args: Prisma.ClickCountFindUniqueArgs
  ): Promise<PrismaClickCount | null> {
    return this.prisma.clickCount.findUnique(args);
  }
  async createClickCount(
    args: Prisma.ClickCountCreateArgs
  ): Promise<PrismaClickCount> {
    return this.prisma.clickCount.create(args);
  }
  async updateClickCount(
    args: Prisma.ClickCountUpdateArgs
  ): Promise<PrismaClickCount> {
    return this.prisma.clickCount.update(args);
  }
  async deleteClickCount(
    args: Prisma.ClickCountDeleteArgs
  ): Promise<PrismaClickCount> {
    return this.prisma.clickCount.delete(args);
  }
}
