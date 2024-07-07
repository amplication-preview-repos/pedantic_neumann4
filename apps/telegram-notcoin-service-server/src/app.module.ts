import { Module } from "@nestjs/common";
import { SquadModule } from "./squad/squad.module";
import { FriendModule } from "./friend/friend.module";
import { BatteryCountModule } from "./batteryCount/batteryCount.module";
import { ClickCountModule } from "./clickCount/clickCount.module";
import { TapBotModule } from "./tapBot/tapBot.module";
import { BoostModule } from "./boost/boost.module";
import { SubTaskModule } from "./subTask/subTask.module";
import { TaskModule } from "./task/task.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    SquadModule,
    FriendModule,
    BatteryCountModule,
    ClickCountModule,
    TapBotModule,
    BoostModule,
    SubTaskModule,
    TaskModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
