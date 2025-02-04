import * as Hapi from "hapi";
import {IServerConfigurations} from "../../configurations";
import {IDatabase} from "../../database";
import Routes from "../vendors/routes";

export function init(server: Hapi.Server, configs: IServerConfigurations, database: IDatabase) {
  Routes(server, configs, database);
}
