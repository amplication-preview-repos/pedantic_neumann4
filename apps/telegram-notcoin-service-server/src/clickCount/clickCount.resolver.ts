import * as graphql from "@nestjs/graphql";
import { ClickCountResolverBase } from "./base/clickCount.resolver.base";
import { ClickCount } from "./base/ClickCount";
import { ClickCountService } from "./clickCount.service";

@graphql.Resolver(() => ClickCount)
export class ClickCountResolver extends ClickCountResolverBase {
  constructor(protected readonly service: ClickCountService) {
    super(service);
  }
}
