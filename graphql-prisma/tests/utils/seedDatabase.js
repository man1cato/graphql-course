import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../../src/prisma'

const userOne = {
    input: {
        name: 'Jen',
            email: 'jen@example.com',
            password: bcrypt.hashSync('blue98765')
    },
    user: undefined,
    jwt: undefined
}

const userTwo = {
    input: {
        name: 'Mike',
        email: 'mike@example.com',
        password: bcrypt.hashSync('orange4567')
    },
    user: undefined,
    jwt: undefined
}

const postOne = {
    input: {
        title: 'Published post by Jen',
        body: '',
        published: true,
    },
    post: undefined
}

const postTwo = {
    input: {
        title: 'Draft post by Jen',
        body: '',
        published: false
    },
    post: undefined
}

const commentOne = {
    input: {
        text: 'First comment'
    },
    comment: undefined
}

const commentTwo = {
    input: {
        text: 'Second comment'
    },
    comment: undefined
}

const seedDatabase = async () => {
    //Delete test data
    await prisma.mutation.deleteManyComments()
    await prisma.mutation.deleteManyPosts()
    await prisma.mutation.deleteManyUsers()

    //Create user one
    userOne.user = await prisma.mutation.createUser({
        data: userOne.input
    })
    userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET)

    //Create user two
    userTwo.user = await prisma.mutation.createUser({
        data: userTwo.input
    })
    userTwo.jwt = jwt.sign({ userId: userTwo.user.id }, process.env.JWT_SECRET)

    //Create post one
    postOne.post = await prisma.mutation.createPost({
        data: {
            ...postOne.input,
            author: {
                connect: {
                    id: userOne.user.id
                }
            }
        }
    })

    //Create post two
    postTwo.post = await prisma.mutation.createPost({
        data: {
            ...postTwo.input,
            author: {
                connect: {
                    id: userOne.user.id
                }
            }
        }
    })    

    //Create comments on published post
    commentOne.comment = await prisma.mutation.createComment({
        data: {
            ...commentOne.input,
            author: {
                connect: {
                    id: userTwo.user.id
                }
            },
            post: {
                connect: {
                    id: postOne.post.id
                }
            }
        }
    })

    commentTwo.comment = await prisma.mutation.createComment({
        data: {
            ...commentTwo.input,
            author: {
                connect: {
                    id: userOne.user.id
                }
            },
            post: {
                connect: {
                    id: postOne.post.id
                }
            }
        }
    })
}

export {
    seedDatabase as default, 
    userOne,
    userTwo,
    postOne,
    postTwo,
    commentOne,
    commentTwo
}