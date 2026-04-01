import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export default function HabitCompletionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Habit Completion</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
  label: { color: colors.onSurface },
});
