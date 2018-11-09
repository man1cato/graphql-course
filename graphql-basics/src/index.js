import { GraphQLServer } from 'graphql-yoga'

//Scalar types - String, Boolean, Int, Float, ID


//Demo data
const users = [{
    id: '1',
    name: 'Andres',
    email: 'andresrod21@gmail.com',
    age: 31
}, {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
}, {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
}]

const posts = [{
    id: '11',
    title: 'blah',
    body: '',
    published: false,
    author: '2'
}, {
    id: '12',
    title: 'Fav movie',
    body: 'Infinity war',
    published: true,
    author: '1'
}, {
    id: '13',
    title: 'Fav music genre',
    body: 'Hip hop',
    published: true,
    author: '1'
}]


//Type definitions (schema)
const typeDefs = `
    type Query {
        me: User!
        post: Post!
        users(query: String): [User!]!
        posts(query: String): [Post!]!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
    }
`

//Resolvers
const resolvers = {
    Query: {
        me() {
            return {
                id: '123098',
                name: 'Mike',
                email: 'mike@test.com'
            }
        },
        post() {
            return {
                id: '987654',
                title: 'Good job',
                body: 'Sweet coding skills, bro',
                published: true 
            }
        },
        users(parent, args, ctx, info) {
            if (!args.query) {
                return users
            }
            return users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()))
        },
        posts(parent, args, ctx, info) {
            if(!args.query) {
                return posts
            }
            return posts.filter((post) => 
                post.title.toLowerCase().includes(args.query.toLowerCase()) 
                || 
                post.body.toLowerCase().includes(args.query.toLowerCase())
            )
        }
    },
    Post: {
        author(parent, args, ctx, info) {
            return users.find((user) => user.id === parent.author) 
        }
    }
}

const server = new GraphQLServer({typeDefs, resolvers})

server.start(() => console.log('The server is up!'))