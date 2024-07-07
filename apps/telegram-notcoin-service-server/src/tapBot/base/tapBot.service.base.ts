/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TapBot as PrismaTapBot } from "@prisma/client";

export class TapBotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TapBotCountArgs, "select">): Promise<number> {
    return this.prisma.tapBot.count(args);
  }

  async tapBots(args: Prisma.TapBotFindManyArgs): Promise<PrismaTapBot[]> {
    return this.prisma.tapBot.findMany(args);
  }
  async tapBot(
    args: Prisma.TapBotFindUniqueArgs
  ): Promise<PrismaTapBot | null> {
    return this.prisma.tapBot.findUnique(args);
  }
  async createTapBot(args: Prisma.TapBotCreateArgs): Promise<PrismaTapBot> {
    return this.prisma.tapBot.create(args);
  }
  async updateTapBot(args: Prisma.TapBotUpdateArgs): Promise<PrismaTapBot> {
    return this.prisma.tapBot.update(args);
  }
  async deleteTapBot(args: Prisma.TapBotDeleteArgs): Promise<PrismaTapBot> {
    return this.prisma.tapBot.delete(args);
  }
}