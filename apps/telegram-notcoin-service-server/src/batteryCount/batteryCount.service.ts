import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BatteryCountServiceBase } from "./base/batteryCount.service.base";

@Injectable()
export class BatteryCountService extends BatteryCountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
