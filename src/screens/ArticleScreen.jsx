import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ArrowBackIcon from '../components/ArrowBackIcon';

const ArticleScreen = ({ route, navigation }) => {
  const { article } = route.params;

  // Verificar que el artículo y sus propiedades existen
  if (!article || !article.title || !article.content) {
    return (
      <View style={styles.container}>
        <ArrowBackIcon onPress={() => navigation.goBack()} />
        <Text style={styles.title}>No article data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ArrowBackIcon onPress={() => navigation.goBack()} />
      {article.urlToImage ? (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      ) : null}
      <ScrollView>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.content}>{article.content}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default ArticleScreen;
