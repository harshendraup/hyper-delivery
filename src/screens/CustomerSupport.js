import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import sendButton from '../asset/icons/sendButton.png';
import {useNavigation} from '@react-navigation/native';
import backArrow from '../asset/icons/backArrow.png';
import call from '../asset/icons/call.png';
import Ellipse3 from '../asset/faces/Ellipse3.png';
import Ellipse11 from '../asset/faces/Ellipse11.png';

const randomResponses = [
  'How can I assist you today?',
  "I'm here to help you!",
  'What seems to be the issue?',
  'Feel free to ask me anything.',
  "I'm listening!",
];

const getRandomResponse = () => {
  return randomResponses[Math.floor(Math.random() * randomResponses.length)];
};

const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
};

const CustomerSupport = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const navigation = useNavigation();

  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages(prevMessages => [
        ...prevMessages,
        {text: inputValue, sender: 'user', timestamp: getCurrentTime()},
        {text: getRandomResponse(), sender: 'bot', timestamp: getCurrentTime()},
      ]);
      setInputValue(''); // Clear the input field
    }
  };

  const renderItem = ({item}) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userContainer : styles.botContainer,
      ]}>
      {item.sender === 'bot' && (
        <Image source={Ellipse11} style={styles.profileImage} />
      )}
      <View
        style={[
          styles.messageBubble,
          item.sender === 'user' ? styles.userBubble : styles.botBubble,
        ]}>
        <Text
          style={[styles.messageText, item.sender === 'bot' && styles.botText]}>
          {item.text}
        </Text>
        <Text
          style={[
            styles.timestamp,
            item.sender === 'bot' ? styles.botTimestamp : styles.userTimestamp,
          ]}>
          {item.timestamp}
        </Text>
      </View>
      {item.sender === 'user' && (
        <Image source={Ellipse3} style={styles.profileImage} />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image source={backArrow} style={styles.backButtonImage} />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
            color: 'rgba(51, 51, 51, 1)',
            fontFamily: 'Inter',
          }}>
          Customer Support
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('ContactUsForm')}
          style={styles.backButton}>
          <Image source={call} style={styles.backButtonImage} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messageList}
        contentContainerStyle={{paddingBottom: 10}}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Type your message..."
          placeholderTextColor="black"
        />
        <TouchableOpacity onPress={sendMessage}>
          <Image source={sendButton} style={styles.sendButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Ensuring the background is white
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,

    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'white', // Header background set to white
  },
  backButton: {
    padding: 10,
    backgroundColor: '#409C59',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  backButtonImage: {
    width: 12, // Smaller width
    height: 14, // Smaller height
  },
  messageList: {
    flex: 1,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  userContainer: {
    justifyContent: 'flex-end',
  },
  botContainer: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    maxWidth: '60%',
    padding: 10,
    borderRadius: 15,
    position: 'relative',
  },
  userBubble: {
    backgroundColor: '#EFEFEF',
    alignSelf: 'flex-end',
  },
  botBubble: {
    backgroundColor: '#409C59',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },
  botText: {
    color: 'white',
  },
  botTimestamp: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  userTimestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    color: 'black',
  },
  sendButton: {
    width: 40,
    height: 40,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
});

export default CustomerSupport;
