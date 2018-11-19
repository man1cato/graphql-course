import getUserId from "../utils/getUserId";

const Query = {
    me(parent, args, { prisma, request }, info) {
        const userId = getUserId(request)

        return prisma.query.user({
            where: { 
                id: userId 
            }
        }, info)
    },
    async post(parent, { id }, { prisma, request }, info) {
        const userId = getUserId(request, false)

        const [post] = await prisma.query.posts({
            where: {
                id,
                OR: [{
                    published: true 
                }, {
                    author: {
                        id: userId
                    }
                }]
            }
        }, info)

        if (!post) {
            throw new Error('Post not found')
        }

        return post
    },
    users(parent, args, { prisma }, info) {
        const opArgs = {}

        if (args.query) {
            opArgs.where = {
                name_contains: args.query
            }
        }

        return prisma.query.users(opArgs, info)
    },
    myPosts(parent, { query }, { prisma, request }, info) {
        const userId = getUserId(request)

        const opArgs = {
            where: {
                author: {
                    id: userId
                } 
            }
        }

        if (query) {
            opArgs.where.OR = [{
                title_contains: args.query
            }, {
                body_contains: args.query
            }]
        }

        return prisma.query.posts(opArgs, info)
    },
    posts(parent, { query }, { prisma }, info) {
        const opArgs = {
            where: {
                published: true
            }
        }

        if (query) {
            opArgs.where.OR = [{
                title_contains: args.query
            }, {
                body_contains: args.query
            }]
        }

        return prisma.query.posts(opArgs, info)
    },
    comments(parent, args, { prisma }, info) {
        return prisma.query.comments(null, info)
    }
}

export default Query