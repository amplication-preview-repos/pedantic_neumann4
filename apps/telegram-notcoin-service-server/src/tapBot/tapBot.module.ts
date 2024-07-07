import { Module } from "@nestjs/common";
import { TapBotModuleBase } from "./base/tapBot.module.base";
import { TapBotService } from "./tapBot.service";
import { TapBotController } from "./tapBot.controller";
import { TapBotResolver } from "./tapBot.resolver";

@Module({
  imports: [TapBotModuleBase],
  controllers: [TapBotController],
  providers: [TapBotService, TapBotResolver],
  exports: [TapBotService],
})
export class TapBotModule {}
