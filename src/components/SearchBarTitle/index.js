import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {SearchContainer} from './styled';

const SearchBarTitle = () => {
  const [textInput, setTextInput] = useState('');

  const handleChange = newText => {
    setTextInput(newText);
  };

  return (
    <SearchContainer>
      <Text>{textInput}</Text>
      <TextInput
        type="text"
        placeholder="What do you want to eat?"
        onChangeText={handleChange}
        style={styles.input}
        value={textInput}
      />
    </SearchContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
});

export default SearchBarTitle;
