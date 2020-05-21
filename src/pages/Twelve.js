import React, { useState } from 'react';

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Label,
  Icon,
  Picker,
  Textarea,
} from 'native-base';

const Twelve = () => {
  const [paymentMethod, setPaymentMethod] = useState(undefined);
  return (
    <Container>
      <Content padderd>
        <Form>
          <Item inlineLabel>
            <Label>Mobile</Label>
            <Input placeholder="+91-946-258-2222" />
          </Item>
          <Item inlineLabel>
            <Label>Password</Label>
            <Input secureTextEntry placeholder="Password" />
          </Item>
          <Item regular>
            <Input placeholder="Your name" />
          </Item>
          <Item rounded>
            <Input placeholder="Gender" />
          </Item>
          <Item>
            <Icon name="mail" />
            <Input placeholder="Your Email" />
          </Item>
          <Item success>
            <Input placeholder="Account Number" />
            <Icon name="checkmark-circle" />
          </Item>
          <Item error>
            <Input placeholder="IFSC Code" />
            <Icon name="close-circle" />
          </Item>
          <Item disabled>
            <Input disabled placeholder="Inactive Account" />
          </Item>
          <Item inlineLabel>
            <Label>Payment Method</Label>
            <Picker
              mode="dropdown"
              placeholder="Select Payment Method"
              placeholderStyle={styles.placeholderStyle}
              selectedValue={paymentMethod}
              onValueChange={(value) => setPaymentMethod(value)}>
              <Picker.Item label="Wallet" value="wallet" />
              <Picker.Item label="BHIM UPI" value="bhim-upi" />
              <Picker.Item label="Internet Banking" value="internet-banking" />
              <Picker.Item label="Paytm" value="paytm" />
              <Picker.Item label="PhonePe" value="phonepe" />
              <Picker.Item label="Credit Card" value="credit-card" />
              <Picker.Item label="Debit Card" value="debit-card" />
            </Picker>
          </Item>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Enter description about yourself."
            style={styles.marginFive}
          />
          <Button full style={styles.marginTopTen}>
            <Text>Sign In</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const styles = {
  marginFive: {
    margin: 5,
  },
  marginTopTen: {
    marginTop: 10,
  },
  placeholderStyle: {
    color: '#bfc6ea',
  },
};

export default Twelve;
