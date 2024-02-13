import { UserAuthActionType } from "store/action/helper";

const initialState = {
  email: "",
  token: "",
  password: "",
  isRemember: false,
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserAuthActionType.STORE_USER_DETAILS:
      return {
        ...state,
        email: action.payload.isRemember ? action.payload.email : "",
        token: action.payload.token,
        password: action.payload.isRemember ? action.payload.password : "",
        isRemember: action.payload.isRemember,
      };
    default:
      return state;
  }
};

export default counterReducer;
