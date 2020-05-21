import React, { useState } from 'react';
import { Container, View, Fab, Icon, Button } from 'native-base';

const Ten = () => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <View style={styles.fullScreen}>
        <Fab
          active={active}
          direction={'up'}
          style={styles.bgFab}
          position="bottomRight"
          onPress={() => setActive(!active)}>
          <Icon name="share" />
          <Button style={styles.bgWhatsapp}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={styles.bgFacebook}>
            <Icon name="logo-facebook" />
          </Button>
        </Fab>
      </View>
    </Container>
  );
};

const styles = {
  fullScreen: {
    flex: 1,
  },
  bgFab: {
    backgroundColor: '#5067ff',
  },
  bgFacebook: {
    backgroundColor: '#3b5998',
  },
  bgWhatsapp: {
    backgroundColor: '#34a34f',
  },
};

export default Ten;
