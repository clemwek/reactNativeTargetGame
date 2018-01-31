import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

class RandomNumber extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    isDesabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  }

  handlePress = () => {
    if (this.props.isDesabled) { return; }
    this.props.onPress(this.props.id)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text
          style={[
            styles.random,
            this.props.isDesabled && styles.desabled
          ]}>
          {this.props.number}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  random: {
    backgroundColor: '#999',
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },

  desabled: {
    opacity: 0.3,
  }
});

export default RandomNumber;
