import { GraphQLServer } from 'graphql-yoga'

//Scalar types - String, Boolean, Int, Float, ID


//Demo user data
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

//Type definitions (schema)
const typeDefs = `
    type Query {
        me: User!
        post: Post!
        users(query: String): [User!]!
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
        }
    }
}

const server = new GraphQLServer({typeDefs, resolvers})

server.start(() => console.log('The server is up!'))