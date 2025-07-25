export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "AddUser":
      return [
        ...state,
        {
          ...action.payload,
          //id: new Date().getTime(),
        },
      ];

    case "RemoveUser":
      return state.filter((user) => user.id != action.payload);

    case "UpdateUser":
      return state.map((u) => {
        if (u.id === action.payload.id) {
          return {
            ...action.payload,
            password: u.password,
          };
        }
        return u;
      });

    case "LoadingUsers":
      return action.payload;

    default:
      return state;
  }
};
