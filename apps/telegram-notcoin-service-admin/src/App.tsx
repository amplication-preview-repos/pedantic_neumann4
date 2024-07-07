import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SquadList } from "./squad/SquadList";
import { SquadCreate } from "./squad/SquadCreate";
import { SquadEdit } from "./squad/SquadEdit";
import { SquadShow } from "./squad/SquadShow";
import { FriendList } from "./friend/FriendList";
import { FriendCreate } from "./friend/FriendCreate";
import { FriendEdit } from "./friend/FriendEdit";
import { FriendShow } from "./friend/FriendShow";
import { BatteryCountList } from "./batteryCount/BatteryCountList";
import { BatteryCountCreate } from "./batteryCount/BatteryCountCreate";
import { BatteryCountEdit } from "./batteryCount/BatteryCountEdit";
import { BatteryCountShow } from "./batteryCount/BatteryCountShow";
import { ClickCountList } from "./clickCount/ClickCountList";
import { ClickCountCreate } from "./clickCount/ClickCountCreate";
import { ClickCountEdit } from "./clickCount/ClickCountEdit";
import { ClickCountShow } from "./clickCount/ClickCountShow";
import { TapBotList } from "./tapBot/TapBotList";
import { TapBotCreate } from "./tapBot/TapBotCreate";
import { TapBotEdit } from "./tapBot/TapBotEdit";
import { TapBotShow } from "./tapBot/TapBotShow";
import { BoostList } from "./boost/BoostList";
import { BoostCreate } from "./boost/BoostCreate";
import { BoostEdit } from "./boost/BoostEdit";
import { BoostShow } from "./boost/BoostShow";
import { SubTaskList } from "./subTask/SubTaskList";
import { SubTaskCreate } from "./subTask/SubTaskCreate";
import { SubTaskEdit } from "./subTask/SubTaskEdit";
import { SubTaskShow } from "./subTask/SubTaskShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TelegramNotcoinService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Squad"
          list={SquadList}
          edit={SquadEdit}
          create={SquadCreate}
          show={SquadShow}
        />
        <Resource
          name="Friend"
          list={FriendList}
          edit={FriendEdit}
          create={FriendCreate}
          show={FriendShow}
        />
        <Resource
          name="BatteryCount"
          list={BatteryCountList}
          edit={BatteryCountEdit}
          create={BatteryCountCreate}
          show={BatteryCountShow}
        />
        <Resource
          name="ClickCount"
          list={ClickCountList}
          edit={ClickCountEdit}
          create={ClickCountCreate}
          show={ClickCountShow}
        />
        <Resource
          name="TapBot"
          list={TapBotList}
          edit={TapBotEdit}
          create={TapBotCreate}
          show={TapBotShow}
        />
        <Resource
          name="Boost"
          list={BoostList}
          edit={BoostEdit}
          create={BoostCreate}
          show={BoostShow}
        />
        <Resource
          name="SubTask"
          list={SubTaskList}
          edit={SubTaskEdit}
          create={SubTaskCreate}
          show={SubTaskShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
