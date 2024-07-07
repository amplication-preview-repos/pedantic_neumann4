import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClickCountService } from "./clickCount.service";
import { ClickCountControllerBase } from "./base/clickCount.controller.base";

@swagger.ApiTags("clickCounts")
@common.Controller("clickCounts")
export class ClickCountController extends ClickCountControllerBase {
  constructor(protected readonly service: ClickCountService) {
    super(service);
  }
}
