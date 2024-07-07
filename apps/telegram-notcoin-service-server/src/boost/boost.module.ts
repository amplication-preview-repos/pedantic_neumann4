import { Module } from "@nestjs/common";
import { BoostModuleBase } from "./base/boost.module.base";
import { BoostService } from "./boost.service";
import { BoostController } from "./boost.controller";
import { BoostResolver } from "./boost.resolver";

@Module({
  imports: [BoostModuleBase],
  controllers: [BoostController],
  providers: [BoostService, BoostResolver],
  exports: [BoostService],
})
export class BoostModule {}
