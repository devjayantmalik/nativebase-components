import React, { useState } from 'react';
import { Container, View, Fab, Icon, Button } from 'native-base';

const Ten = () => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Fab
          active={active}
          direction={'up'}
          style={{ backgroundColor: '#5067ff' }}
          position="bottomRight"
          onPress={() => setActive(!active)}>
          <Icon name="share" />
          <Button style={{ backgroundColor: '#34a34f' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3b5998' }}>
            <Icon name="logo-facebook" />
          </Button>
        </Fab>
      </View>
    </Container>
  );
};

export default Ten;
