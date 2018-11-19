import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma ({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://192.168.99.100:4466',
    secret: '2gm92t3hje9fj1jwfcpe',
    fragmentReplacements    
})

export default prisma

// methods: prisma.query, prisma.mutation, prisma.subscription, prisma.exists


// const createPostForUser = async (authorId, data) => {
//     const userExists = await prisma.exists.User({ id: authorId })

//     if (!userExists) {
//         throw new Error('User not found')
//     }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ id author { id name email posts { id title published } } }')

//     return post.author
// }

// createPostForUser('cjod8j1n3000w0724vyiva6fu', {
//     title: "Who's the best Joker?",
//     body: "Include voice actors",
//     published: true
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((e) => {
//     console.log(e.message)
// })


// const updatePostForUser = async (postId, data) => {
//     const postExists = await prisma.exists.Post({ id: postId })

//     if (!postExists) {
//         throw new Error('Post not found')
//     }

//     const post = await prisma.mutation.updatePost({
//         where: {
//             id: postId
//         },
//         data
//     }, '{ author { id name email posts { id title published } } }')

//     return post.author

// }


// updatePostForUser('cjofqw0m1003o07247yoao1t0', {
//     title: "I'll think of something later",
//     published: false
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((e) => console.log(e.message))
