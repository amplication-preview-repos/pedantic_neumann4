import { Module } from "@nestjs/common";
import { BatteryCountModuleBase } from "./base/batteryCount.module.base";
import { BatteryCountService } from "./batteryCount.service";
import { BatteryCountController } from "./batteryCount.controller";
import { BatteryCountResolver } from "./batteryCount.resolver";

@Module({
  imports: [BatteryCountModuleBase],
  controllers: [BatteryCountController],
  providers: [BatteryCountService, BatteryCountResolver],
  exports: [BatteryCountService],
})
export class BatteryCountModule {}
