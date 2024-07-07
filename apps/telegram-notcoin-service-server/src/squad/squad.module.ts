import { Module } from "@nestjs/common";
import { SquadModuleBase } from "./base/squad.module.base";
import { SquadService } from "./squad.service";
import { SquadController } from "./squad.controller";
import { SquadResolver } from "./squad.resolver";

@Module({
  imports: [SquadModuleBase],
  controllers: [SquadController],
  providers: [SquadService, SquadResolver],
  exports: [SquadService],
})
export class SquadModule {}
