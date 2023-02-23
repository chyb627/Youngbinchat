import { useNavigation } from '@react-navigation/native';
import React, { ReactNode, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/Colors';

interface ScreenProps {
  title?: string;
  children?: ReactNode;
}

const Screen = ({ children, title }: ScreenProps) => {
  const { goBack, canGoBack } = useNavigation();
  const onPressBackButton = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          {/* canGoBack으로 뒤로갈 스크린의 유무를 확인 */}
          {canGoBack() && (
            <TouchableOpacity onPress={onPressBackButton}>
              <Icon style={styles.backButtonIcon} name="arrow-back" />
            </TouchableOpacity>
          )}
        </View>

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
    justifyContent: 'center',
  },
  center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  body: {
    flex: 1,
  },
  backButtonIcon: {
    fontSize: 20,
    color: Colors.BLACK,
    marginLeft: 20,
  },
});
