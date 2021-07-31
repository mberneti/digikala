import { RootState } from "../src/redux/reducer";

declare module "react-redux" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends RootState {}
}
