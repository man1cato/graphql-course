const Query = {
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
    users(parent, args, { prisma }, info) {
        const opArgs = {}

        if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                }, {
                    email_contains: args.query
                }]
            }
        }

        return prisma.query.users(opArgs, info)
    },
    posts(parent, args, { prisma }, info) {
        const opArgs = {}

        if (args.query) {
            opArgs.where = {
                OR: [{
                    title_contains: args.query
                }, {
                    body_contains: args.query
                }]
            }
        }

        return prisma.query.posts(opArgs, info)
    },
    comments(parent, args, { prisma }, info) {
        return prisma.query.comments(null, info)
    }
}

export default Query