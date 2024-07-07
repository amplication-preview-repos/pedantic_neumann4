import * as graphql from "@nestjs/graphql";
import { BatteryCountResolverBase } from "./base/batteryCount.resolver.base";
import { BatteryCount } from "./base/BatteryCount";
import { BatteryCountService } from "./batteryCount.service";

@graphql.Resolver(() => BatteryCount)
export class BatteryCountResolver extends BatteryCountResolverBase {
  constructor(protected readonly service: BatteryCountService) {
    super(service);
  }
}
