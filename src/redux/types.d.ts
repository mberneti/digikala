import { StateType, ActionType } from "typesafe-actions";

declare module "typesafe-actions" {
  export type Store = StateType<typeof import("./store").default>;
  export type RootState = StateType<typeof import("./reducer").default>;
  export type RootAction = ActionType<typeof import("./root-action").default>;

  interface Types {
    RootAction: RootAction;
  }
}
