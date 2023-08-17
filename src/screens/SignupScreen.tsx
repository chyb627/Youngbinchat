import React, { useCallback, useMemo } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import validator from 'validator';
import useTextInput from '~/hooks/useTextInput';
import Colors from '~/modules/Colors';
import Screen from '~components/Screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.GRAY,
    fontSize: 16,
  },
  errorText: {
    fontSize: 15,
    color: Colors.RED,
    marginTop: 4,
  },
  signupButton: {
    backgroundColor: Colors.BLACK,
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
  },
  signupButtonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledSignupButton: {
    backgroundColor: Colors.GRAY,
  },
  signinTextButton: {
    marginTop: 5,
    alignItems: 'center',
    padding: 10,
  },
  signinButtonText: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  signingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SignupScreen = () => {
  const [email, onChangeEmailText] = useTextInput('');
  const [password, onChangePasswordText] = useTextInput('');
  const [confirmedPassword, onChangeConfirmedPasswordText] = useTextInput('');
  const [name, onChangeNameText] = useTextInput('');

  const emailErrorText = useMemo(() => {
    if (email.length === 0) {
      return '이메일을 입력해주세요.';
    }

    if (validator.isEmail(email)) {
      return '올바른 이메일이 아닙니다.';
    }

    return null;
  }, [email]);

  const passwordErrorText = useMemo(() => {
    if (password.length === 0) {
      return '비밀번호를 입력해주세요.';
    }

    if (password.length < 6) {
      return '비밀번호는 6자리 이상이어야합니다.';
    }

    if (password !== confirmedPassword) {
      return '비밀번호를 확인해주세요.';
    }

    return null;
  }, [confirmedPassword, password]);

  const confirmedPasswordErrorText = useMemo(() => {
    if (confirmedPassword.length === 0) {
      return '비밀번호를 입력해주세요.';
    }

    if (confirmedPassword.length < 6) {
      return '비밀번호는 6자리 이상이어야합니다.';
    }

    if (password !== confirmedPassword) {
      return '비밀번호를 확인해주세요.';
    }

    return null;
  }, [confirmedPassword, password]);

  const nameErrorText = useMemo(() => {
    if (name.length === 0) {
      return '이름을 입력해주세요.';
    }

    return null;
  }, [name.length]);

  const signupButtonEnabled = useMemo(() => {
    return (
      emailErrorText == null &&
      passwordErrorText == null &&
      confirmedPasswordErrorText == null &&
      nameErrorText == null
    );
  }, [emailErrorText, passwordErrorText, confirmedPasswordErrorText, nameErrorText]);

  const signupButtonStyle = useMemo(() => {
    if (signupButtonEnabled) {
      return styles.signupButton;
    }
    return [styles.signupButton, styles.disabledSignupButton];
  }, [signupButtonEnabled]);

  const onPressSignupButton = useCallback(() => {}, []);

  const onPressSigninButton = useCallback(() => {}, []);

  return (
    <Screen title="회원가입">
      <ScrollView style={styles.container}>
        {/* Email */}
        <View style={styles.section}>
          <Text style={styles.title}>이메일</Text>
          <TextInput value={email} style={styles.input} onChangeText={onChangeEmailText} />
          {emailErrorText && <Text style={styles.errorText}>{emailErrorText}</Text>}
        </View>

        {/* Password */}
        <View style={styles.section}>
          <Text style={styles.title}>비밀번호</Text>
          <TextInput
            value={password}
            style={styles.input}
            onChangeText={onChangePasswordText}
            secureTextEntry
          />
          {passwordErrorText && <Text style={styles.errorText}>{passwordErrorText}</Text>}
        </View>

        {/* ConfirmedPassword */}
        <View style={styles.section}>
          <Text style={styles.title}>비밀번호 확인</Text>
          <TextInput
            value={confirmedPassword}
            style={styles.input}
            onChangeText={onChangeConfirmedPasswordText}
            secureTextEntry
          />
          {confirmedPasswordErrorText && (
            <Text style={styles.errorText}>{confirmedPasswordErrorText}</Text>
          )}
        </View>

        {/* Name */}
        <View style={styles.section}>
          <Text style={styles.title}>이름</Text>
          <TextInput value={name} style={styles.input} onChangeText={onChangeNameText} />
          {nameErrorText && <Text style={styles.errorText}>{nameErrorText}</Text>}
        </View>

        {/* Button */}
        <View>
          <TouchableOpacity
            style={signupButtonStyle}
            onPress={onPressSignupButton}
            disabled={!signupButtonEnabled}>
            <Text style={styles.signupButtonText}>회원 가입</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signinTextButton} onPress={onPressSigninButton}>
            <Text style={styles.signinButtonText}>이미 계정이 있으신가요?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default SignupScreen;
