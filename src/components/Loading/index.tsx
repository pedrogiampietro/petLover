import { StyleSheet } from "react-native";
import { View, ActivityIndicator } from "react-native";
import theme from "../../styles/theme";

type LoadingProps = {
  color?: string;
  size?: "small" | "large";
};

export function Loading({ color, size }: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color ?? theme.COLORS.PRIMARY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
