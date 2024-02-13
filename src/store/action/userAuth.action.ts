import { UserAuthActionType } from "./helper";

export const saveUserDetails =
  (data: {
    email: string;
    password: string;
    token: string;
    isRemember: boolean;
  }): any =>
  (dispatchAction: any) => {
    dispatchAction({
      type: UserAuthActionType.STORE_USER_DETAILS,
      payload: data,
    });
  };
