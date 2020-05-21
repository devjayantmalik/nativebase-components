import React, { useState } from 'react';
import { Container, Content, DatePicker, Text } from 'native-base';

const Eight = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <Container>
      <Content>
        <DatePicker
          defaultDate={selectedDate}
          minimumDate={new Date(2000, 1, 1)}
          maximumDate={new Date(2030, 12, 12)}
          locale="en"
          androidMode={'spinner'}
          modalTransparent={false}
          animationType={'fade'}
          onDateChange={(date) => setSelectedDate(date)}
        />
        <Text>Date: {selectedDate.toDateString()}</Text>
      </Content>
    </Container>
  );
};

export default Eight;
