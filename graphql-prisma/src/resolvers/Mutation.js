import bcrypt from 'bcryptjs'

import getUserId from '../utils/getUserId'
import generateToken from '../utils/generateToken'
import hashPassword from '../utils/hashPassword'


const Mutation = {
    async loginUser(parent, { data }, { prisma }, info) {
        const user = await prisma.query.user({
            where: {
                email: data.email
            }
        })
        
        if (!user) {
            throw new Error('Email not found')
        }

        const hashedPassword = user.password

        const isMatch = await bcrypt.compare(data.password, hashedPassword)
        
        if (!isMatch) {
            throw new Error('Password is incorrect')
        }

        return {
            user,
            token: generateToken(user.id) 
        }
    },
    async createUser(parent, { data }, { prisma }, info) {
        const password = await hashPassword(data.password)

        const user = await prisma.mutation.createUser({ 
            data: {
                ...data,
                password
            } 
        })

        return {
            user,
            token: generateToken(user.id)
        }
    },
    deleteUser(parent, args, { prisma, request }, info) { 
        const userId = getUserId(request)

        return prisma.mutation.deleteUser({
            where: { id: userId }
        }, info)
    },
    async updateUser(parent, { data }, { prisma, request }, info) {
        const userId = getUserId(request)

        if (typeof data.password === 'string') {
            data.password = await hashPassword(data.password)
        }

        return prisma.mutation.updateUser({
            where: { id: userId },
            data
        }, info)
    },
    createPost(parent, { data }, { prisma, request }, info) {
        const userId = getUserId(request)

        return prisma.mutation.createPost({
            data: {
                title: data.title,
                body: data.body,
                published: data.published,
                author: {
                    connect: {
                        id: userId
                    }
                }
            }
        }, info)
    },
    async deletePost(parent, { id }, { prisma, request }, info) {
        const userId = getUserId(request)

        const postExists = await prisma.exists.Post({
            id,
            author: {
                id: userId
            }
        }) 

        if (!postExists) {
            throw new Error('Unable to delete post')
        }

        return prisma.mutation.deletePost({
            where: { id }
        }, info)
    },
    async updatePost(parent, { id, data }, { prisma, request }, info) {
        const userId = getUserId(request)

        const postExists = await prisma.exists.Post({
            id,
            author: {
                id: userId
            }
        }) 

        const postPublished = await prisma.exists.Post({
            id, 
            published: true
        })

        if (!postExists) {
            throw new Error('Unable to update post')
        }

        if (postPublished && !data.published) {
            await prisma.mutation.deleteManyComments({
                where: {
                    post: {
                        id
                    }
                }
            })
        }

        return prisma.mutation.updatePost({
            where: { id },
            data
        }, info)        
    },
    async createComment(parent, { data }, { prisma, request }, info) {
        const userId = getUserId(request)

        const postExists = await prisma.exists.Post({
            id: data.post,
            published: true
        })

        if (!postExists) {
            throw new Error('Post not found')
        }

        return prisma.mutation.createComment({ 
            data: {
                text: data.text,
                post: {
                    connect: {
                        id: data.post
                    }
                },
                author: {
                    connect: {
                        id: userId
                    }
                }
            } 
        }, info)
    },
    async deleteComment(parent, { id }, { prisma, request }, info) {
        const userId = getUserId(request)

        const commentExists = await prisma.exists.Comment({ 
            id,
            author: {
                id: userId
            }
        }) 

        if (!commentExists) {
            throw new Error('Unable to delete comment')
        }

        return prisma.mutation.deleteComment({
            where: { id }
        }, info)
    },
    async updateComment(parent, { id, data }, { prisma, request }, info) {
        const userId = getUserId(request)

        const commentExists = await prisma.exists.Comment({ 
            id,
            author: {
                id: userId
            }
        }) 

        if (!commentExists) {
            throw new Error('Unable to update comment')
        }

        return prisma.mutation.updateComment({
            where: { id },
            data
        }, info)
    }
}

export default Mutation