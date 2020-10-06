import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    View,
    requireNativeComponent
} from 'react-native'
import Post from '../components/Post'
import Header from '../components/Header'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'diegowinter',
            email: 'diego@diegowinter.dev',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'retniwogeid',
                comment: 'Linda foto, parabéns pra vc nessa dt querida mtas felicidades'
            }, {
                nickname: 'winterdiego',
                comment: 'Fotógrafo profissional que chama né'
            }]
        }, {
            id: Math.random(),
            nickname: 'retniwogeid',
            email: 'hello@diegowinter.dev',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item}/>}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed