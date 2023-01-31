export const Checks = (type, name) => {
    if (type === "text") {
      return { required: "*Please fill this field" };
    } else if (type === "email") {
      return {
        required: "*Please fill this field",
      };
    } else if (type === "number") {
      switch (name) {
        case "mobile":
          return {
            required: "*Please fill this field",
            minLength: { value: 10, message: "*Invalid" },
            maxLength: { value: 10, message: "*Invalid" },
          };
        case "pinCode":
          return {
            required: "*Please fill this field",
            minLength: { value: 6, message: "*Invalid" },
            maxLength: { value: 6, message: "*Invalid" },
          };
        default:
          return { required: "*Please fill this field" };
      }
    }
  };
  