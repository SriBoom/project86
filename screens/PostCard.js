import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostScreen from './PostScreen';

export default class PostCard extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.navigation.navigate('PostScreen', { post: this.props.post });
        }}>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image
              source={require('../assets/image_1.jpg')}
              style={styles.postImage}
            />
            <View style={styles.authorContainer}>
              <Text style={styles.postAuthorText}>
                {this.props.post.author}
              </Text>
              <Text style={styles.captionText}>{this.props.post.caption}</Text>
            </View>
          </View>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.likeButton}>
            <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
            <Text style={styles.likeText}>12k</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  postImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  authorContainer: {
    paddingLeft: RFValue(20),
    justifyContent: 'center',
  },
  postAuthorText: {
    fontSize: RFValue(25),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
  },
  captionText: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
