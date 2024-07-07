import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BoostService } from "./boost.service";
import { BoostControllerBase } from "./base/boost.controller.base";

@swagger.ApiTags("boosts")
@common.Controller("boosts")
export class BoostController extends BoostControllerBase {
  constructor(protected readonly service: BoostService) {
    super(service);
  }
}
