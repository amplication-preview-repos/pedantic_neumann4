import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TapBotServiceBase } from "./base/tapBot.service.base";

@Injectable()
export class TapBotService extends TapBotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
