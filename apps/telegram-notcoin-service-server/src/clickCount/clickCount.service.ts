import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClickCountServiceBase } from "./base/clickCount.service.base";

@Injectable()
export class ClickCountService extends ClickCountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
