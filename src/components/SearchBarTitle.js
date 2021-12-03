import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const SearchBarTitle = () => {
  const [textInput, setTextInput] = useState('');

  const handleChange = newText => {
    setTextInput(newText);
  };

  return (
    <View>
      <Text>{textInput}</Text>
      <TextInput
        placeholder="hello"
        onChangeText={handleChange}
        value={textInput}
      />
    </View>
  );
};

export default SearchBarTitle;

const styles = StyleSheet.create({});
