import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SquadService } from "./squad.service";
import { SquadControllerBase } from "./base/squad.controller.base";

@swagger.ApiTags("squads")
@common.Controller("squads")
export class SquadController extends SquadControllerBase {
  constructor(protected readonly service: SquadService) {
    super(service);
  }
}
