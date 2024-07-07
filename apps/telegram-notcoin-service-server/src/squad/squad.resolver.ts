import * as graphql from "@nestjs/graphql";
import { SquadResolverBase } from "./base/squad.resolver.base";
import { Squad } from "./base/Squad";
import { SquadService } from "./squad.service";

@graphql.Resolver(() => Squad)
export class SquadResolver extends SquadResolverBase {
  constructor(protected readonly service: SquadService) {
    super(service);
  }
}
