import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Colors from '~modules/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 48,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  right: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
});

interface ScreenProps {
  title?: string;
  children?: React.ReactNode;
}

const Screen = ({ title, children }: ScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left} />
        <View style={styles.center}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View style={styles.right} />
      </View>
      <View style={styles.body}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;
