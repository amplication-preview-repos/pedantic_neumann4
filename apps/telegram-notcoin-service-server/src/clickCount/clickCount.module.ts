import { Module } from "@nestjs/common";
import { ClickCountModuleBase } from "./base/clickCount.module.base";
import { ClickCountService } from "./clickCount.service";
import { ClickCountController } from "./clickCount.controller";
import { ClickCountResolver } from "./clickCount.resolver";

@Module({
  imports: [ClickCountModuleBase],
  controllers: [ClickCountController],
  providers: [ClickCountService, ClickCountResolver],
  exports: [ClickCountService],
})
export class ClickCountModule {}
