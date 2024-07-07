import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoostServiceBase } from "./base/boost.service.base";

@Injectable()
export class BoostService extends BoostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
