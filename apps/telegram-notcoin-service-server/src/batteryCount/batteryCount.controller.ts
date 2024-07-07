import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BatteryCountService } from "./batteryCount.service";
import { BatteryCountControllerBase } from "./base/batteryCount.controller.base";

@swagger.ApiTags("batteryCounts")
@common.Controller("batteryCounts")
export class BatteryCountController extends BatteryCountControllerBase {
  constructor(protected readonly service: BatteryCountService) {
    super(service);
  }
}
