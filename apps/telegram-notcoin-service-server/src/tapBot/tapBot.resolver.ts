import * as graphql from "@nestjs/graphql";
import { TapBotResolverBase } from "./base/tapBot.resolver.base";
import { TapBot } from "./base/TapBot";
import { TapBotService } from "./tapBot.service";

@graphql.Resolver(() => TapBot)
export class TapBotResolver extends TapBotResolverBase {
  constructor(protected readonly service: TapBotService) {
    super(service);
  }
}
