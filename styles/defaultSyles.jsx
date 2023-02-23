export const themeStyle = {
  borderRadius: {
    borderRadius: 5,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  padding: {
    paddingVertical: {
      paddingVertical: 5,
    },
    paddingHorizontal: {
      paddingHorizontal: 10,
    },
  },
  marginVertical: 2,
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    color: "black",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    ...this.shadow,
  },
};
