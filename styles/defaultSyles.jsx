const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0.2,
    height: 0.4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1,
  elevation: 3,
};

export const themeStyle = {
  borderRadius: {
    borderRadius: 5,
  },
  shadow: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
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
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: 'black',
    ...shadow,
  },
};
