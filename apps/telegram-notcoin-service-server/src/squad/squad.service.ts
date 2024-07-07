import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SquadServiceBase } from "./base/squad.service.base";

@Injectable()
export class SquadService extends SquadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
