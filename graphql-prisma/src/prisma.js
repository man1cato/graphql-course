import { Prisma } from 'prisma-binding'

const prisma = new Prisma ({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://192.168.99.100:4466'    
})

// methods: prisma.query, prisma.mutation, prisma.subscription, prisma.exists

// prisma.query.users(null, '{ id name posts { id title } }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// }).catch((e) => {
//     console.log(e)
// })

prisma.query.comments(null, '{ id text author { id name }}').then((data) => {
    console.log(JSON.stringify(data, undefined, 2))
}).catch((e) => {
    console.log(e)
})
