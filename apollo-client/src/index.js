import ApolloBoost, { gql } from 'apollo-boost'


const client = new ApolloBoost({
    uri: 'http://localhost:4000'
})

const getUsers = gql`
    query {
        users {
            id
            name
        }
    }
`

const getPosts = gql`
    query {
        posts {
            title
            published
            author {
                name
            }
        }
    }
`

client.query({ query: getUsers }).then((res) => {
    let html = ''

    res.data.users.forEach((user) => {
        html += `
            <div>
                <h3>${user.name}</h3>
            </div>
        `
    })

    document.getElementById('users').innerHTML = html
})

client.query({ query: getPosts }).then((res) => {
    let html = ''

    res.data.posts.forEach((post) => {
        html += `
            <div>
                <h3>${post.title}</h3>
                <h4>Author: ${post.author.name}</h4>
            </div>
        `
    })

    document.getElementById('posts').innerHTML = html
})