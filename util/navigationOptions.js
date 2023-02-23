// Create a function that returns navigation options in a separate file
const { colors } = require("../styles/colors");

export function getNavigationOptions({
  navigation,
  title,
  headerStyle = { backgroundColor: colors.primaryDark80 },
  headerRight,
  headerLeft,
  headerTintColor = "#fff",
  headerTitleStyle = { fontWeight: "bold" },
}) {
  return navigation.setOptions({
    title,
    headerStyle,
    headerRight,
    headerLeft,
    headerTintColor,
    headerTitleStyle,
  });
}
