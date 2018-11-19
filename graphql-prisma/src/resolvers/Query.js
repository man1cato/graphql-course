import getUserId from "../utils/getUserId";

const Query = {    
    users(parent, args, { prisma }, info) {
        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after, 
            orderBy: args.orderBy
        }

        if (args.query) {
            opArgs.where = {
                name_contains: args.query
            }
        }

        return prisma.query.users(opArgs, info)
    },
    posts(parent, args, { prisma }, info) {
        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after,
            orderBy: args.orderBy,
            where: {
                published: true
            }
        }

        if (args.query) {
            opArgs.where.OR = [{
                title_contains: args.query
            }, {
                body_contains: args.query
            }]
        }

        return prisma.query.posts(opArgs, info)
    },
    comments(parent, args, { prisma }, info) {
        return prisma.query.comments({
            first: args.first,
            skip: args.skip,
            after: args.after,
            orderBy: args.orderBy
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
    me(parent, args, { prisma, request }, info) {
        const userId = getUserId(request)

        return prisma.query.user({
            where: { 
                id: userId 
            }
        }, info)
    },
    myPosts(parent, args, { prisma, request }, info) {
        const userId = getUserId(request)

        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after,
            orderBy: args.orderBy,
            where: {
                author: {
                    id: userId
                } 
            }
        }

        if (args.query) {
            opArgs.where.OR = [{
                title_contains: args.query
            }, {
                body_contains: args.query
            }]
        }

        return prisma.query.posts(opArgs, info)
    },
    
}

export default Query