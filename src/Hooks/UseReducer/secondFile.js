export default function inputReducer(state, action) {
  switch (action.type) {
    case "Name":
      return { ...state, name: action.payload };
    case "Email":
      return { ...state, email: action.payload };
    case "Reset":
      return { ...state, email: "", name: "" };
  }
}
