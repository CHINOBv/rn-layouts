import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.banner} source={require('./img/bg.jpg')} />
        </View>
        <View style={styles.container}>
          <Text style={styles.titulo}>Que Hacer En Paris</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.city}
                source={require('./img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Los Mejores Alojamientos</Text>
          <View>
            <View>
              <Image
                style={styles.best}
                source={require('./img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.best}
                source={require('./img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.best}
                source={require('./img/mejores3.jpg')}
              />
            </View>
          </View>
        </View>
        <Text style={styles.titulo}>Lo Mejor de LA</Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Image
              style={styles.best}
              source={require('./img/hospedaje1.jpg')}
            />
          </View>
          <View style={styles.listItem}>
            <Image
              style={styles.best}
              source={require('./img/hospedaje2.jpg')}
            />
          </View>
          <View style={styles.listItem}>
            <Image
              style={styles.best}
              source={require('./img/hospedaje3.jpg')}
            />
          </View>
          <View style={styles.listItem}>
            <Image
              style={styles.best}
              source={require('./img/hospedaje4.jpg')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    marginHorizontal: 10,
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  best: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listItem: {
    flexBasis: '49%',
  },
});

export default App;
