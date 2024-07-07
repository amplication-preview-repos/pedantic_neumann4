import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TapBotService } from "./tapBot.service";
import { TapBotControllerBase } from "./base/tapBot.controller.base";

@swagger.ApiTags("tapBots")
@common.Controller("tapBots")
export class TapBotController extends TapBotControllerBase {
  constructor(protected readonly service: TapBotService) {
    super(service);
  }
}
