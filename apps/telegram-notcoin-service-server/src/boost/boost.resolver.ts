import * as graphql from "@nestjs/graphql";
import { BoostResolverBase } from "./base/boost.resolver.base";
import { Boost } from "./base/Boost";
import { BoostService } from "./boost.service";

@graphql.Resolver(() => Boost)
export class BoostResolver extends BoostResolverBase {
  constructor(protected readonly service: BoostService) {
    super(service);
  }
}
