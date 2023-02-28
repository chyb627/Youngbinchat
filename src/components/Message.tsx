import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';
import Colors from '../utils/Colors';

interface MessageProps {
  name: string;
  text: string;
  createdAt: string;
  isOtherMessage: boolean;
}

const Message = ({ name, text, createdAt, isOtherMessage }: MessageProps) => {
  const messageStyles = isOtherMessage ? otherMessageStyles : styles;

  const renderMessageContainer = useCallback(() => {
    const components = [
      <Text key="timeText" style={messageStyles.timeText}>
        {dayjs(createdAt).format('HH:mm')}
      </Text>,
      <View key="message" style={messageStyles.bubble}>
        <Text style={messageStyles.messageText}>{text}</Text>
      </View>,
    ];

    return isOtherMessage ? components.reverse() : components;
  }, [createdAt, isOtherMessage, messageStyles, text]);

  return (
    <View style={messageStyles.container}>
      <Text style={styles.nameText}>{name}</Text>

      <View style={styles.messageContainer}>{renderMessageContainer()}</View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  nameText: {
    fontSize: 12,
    color: Colors.GRAY,
    marginBottom: 4,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 12,
    color: Colors.GRAY,
    marginRight: 4,
  },
  bubble: {
    backgroundColor: Colors.BLACK,
    borderRadius: 12,
    padding: 12,
    flexShrink: 1,
  },
  messageText: {
    color: Colors.WHITE,
  },
});

const otherMessageStyles = {
  container: [styles.container, { alignItems: 'flex-start' as const }],
  bubble: [styles.bubble, { backgroundColor: Colors.LIGHT_GRAY }],
  messageText: [styles.messageText, { color: Colors.BLACK }],
  timeText: [styles.timeText, { marginRight: 0, marginLeft: 4 }],
};
