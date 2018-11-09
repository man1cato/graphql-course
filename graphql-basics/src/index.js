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

const comments = [{
    id: '21',
    text: 'First!',
    post: '12',
    author:  '3'
}, {
    id: '22',
    text: 'Did you know that Thanos is from Jupiter?',
    post: '12',
    author:  '2'
}, {
    id: '23',
    text: "Actually, he's from Jupiter's moon, Titan",
    post: '12',
    author:  '1'
}, {
    id: '24',
    text: 'Tupac forever',
    post: '13',
    author:  '3'
}]


//Type definitions (schema)
const typeDefs = `
    type Query {
        me: User!
        post: Post!
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        comments: [Comment!]!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        text: String!
        author: User!
        post: Post!
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
        },
        comments(parent, args, ctx, info) {
            return comments
        }
    },
    Post: {
        author(parent, args, ctx, info) {
            return users.find((user) => user.id === parent.author) 
        },
        comments(parent, args, ctx, info) {
            return comments.filter((comment) => comment.post === parent.id)
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter((post) => post.author === parent.id)
        },
        comments(parent, args, ctx, info) {
            return comments.filter((comment) => comment.author === parent.id)
        }
    },
    Comment: {
        author(parent, args, ctx, info) {
            return users.find((user) => user.id === parent.author)
        },
        post(parent, args, ctx, info) {
            return posts.find((post) => post.id === parent.post)
        }
    }
}

const server = new GraphQLServer({typeDefs, resolvers})

server.start(() => console.log('The server is up!'))