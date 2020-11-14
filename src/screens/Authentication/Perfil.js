import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import Button from '../../components/core/Buttons/Button';
import Input from '../../components/core/Form/TextInput';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#212121',
  },
  header: {
    width: 450,
    height: 250,
    backgroundColor: '#901E8F',
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    color: '#ffff',
  },
  boddy: {
    width: 450,
    // height: 500,
    // display:'flex',
    // flex:1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    color: '#8A1E84',
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 5,
    paddingBottom: 5,
    color: '#212121',
  },
  boddyInput: {
    height: 80,
    flex: 1,
    width: 150,
  },
});

const Perfil = () => {
  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState('');
  const emailInput = useRef();
  const onChange = (value, type) => {
    console.warn('emailInput', emailInput.current.state);
    if (type === 'email') {
      if (emailInput.current.state.validate) {
        setDisable(false);
      }
      setEmail(value);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1604772659841-a1612db7000f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=420&q=80',
            }}
            style={{width: 120, height: 120, borderRadius: 120 / 2}}
          />
        </View>
        <View style={styles.headerText}>
          <Text style={{color: '#ffff', fontWeight: 'bold'}}>
            Ismael Huamani Franco
          </Text>
          <Button variant="primary" label="Edit" />
        </View>
      </View>
      <View style={styles.boddy}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>USER PROFILE</Text>
        <ScrollView>
          <View style={styles.boddyInput}>
            <Input
              ref={emailInput}
              label={'Name'}
              labelStyle={styles.labelStyle}
              value={email}
              type={'text'}
              placeholder={'Enter User Name'}
              keyboardType="text"
              textInputStyle={styles.textInput}
              onChangeInput={(value) => onChange(value, 'email')}
            />
          </View>
          <View style={styles.boddyInput}>
            <Input
              ref={emailInput}
              label={'surnames'}
              labelStyle={styles.labelStyle}
              value={email}
              type={'text'}
              placeholder={'Enter surnames'}
              keyboardType="text"
              textInputStyle={styles.textInput}
              onChangeInput={(value) => onChange(value, 'email')}
            />
          </View>
          <View style={styles.boddyInput}>
            <Input
              ref={emailInput}
              label={'Email'}
              labelStyle={styles.labelStyle}
              value={email}
              type={'email'}
              placeholder={'Enter Email'}
              keyboardType="email-address"
              textInputStyle={styles.textInput}
              onChangeInput={(value) => onChange(value, 'email')}
            />
          </View>
          <View style={styles.boddyInput}>
            <Input
              ref={emailInput}
              label={'Cell Number'}
              labelStyle={styles.labelStyle}
              value={email}
              type={'text'}
              placeholder={'Enter Cell Number'}
              keyboardType="numeric"
              textInputStyle={styles.textInput}
              onChangeInput={(value) => onChange(value, 'email')}
            />
          </View>
          <View style={styles.boddyInput}>
            <Input
              ref={emailInput}
              label={'date Birth'}
              labelStyle={styles.labelStyle}
              value={email}
              type={'text'}
              placeholder={'Enter Date Birth'}
              keyboardType="date"
              textInputStyle={styles.textInput}
              onChangeInput={(value) => onChange(value, 'email')}
            />
          </View>
          <View style={styles.boddyInput}>
            <Input
              ref={emailInput}
              label={'Sex'}
              labelStyle={styles.labelStyle}
              value={email}
              type={'text'}
              placeholder={'Enter Gender'}
              keyboardType="email-address"
              textInputStyle={styles.textInput}
              onChangeInput={(value) => onChange(value, 'email')}
            />
          </View>
          <Button variant="save" label="Save" />
        </ScrollView>
      </View>
    </View>
  );
};

export default Perfil;
