
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const API_KEY = 'f71af7261c434b5d8be60816ed910d8b';
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;



const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error(error));
  }, []);

  const navigateToArticle = (item) => {
    console.log('Navigating to ArticleScreen with article:', item); // Puedes colocar un console.log aquí para verificar qué artículo se está pasando

    navigation.navigate('Article', { article: item });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.articleContainer}
      onPress={() => navigateToArticle(item)}
    >
      {index === 0 ? (
        <Image source={{ uri: item.urlToImage }} style={styles.fullWidthImage} />
      ) : (
        <Image source={{ uri: item.urlToImage }} style={styles.squareImage} />
      )}
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  console.log('Rendering HomeScreen with articles:', articles); // Puedes colocar un console.log aquí para verificar qué artículos se están renderizando

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  articleContainer: {
    marginBottom: 20,
  },
  fullWidthImage: {
    width: '100%',
    height: 200,
  },
  squareImage: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default HomeScreen;
