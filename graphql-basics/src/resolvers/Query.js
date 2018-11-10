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
    users(parent, args, {db}, info) {
        if (!args.query) {
            return db.users
        }
        return db.users.filter((user) => user.name.toLowerCase().includes(args.query.toLowerCase()))
    },
    posts(parent, args, {db}, info) {
        if(!args.query) {
            return db.posts
        }
        return db.posts.filter((post) => 
            post.title.toLowerCase().includes(args.query.toLowerCase()) 
            || 
            post.body.toLowerCase().includes(args.query.toLowerCase())
        )
    },
    comments(parent, args, {db}, info) {
        return db.comments
    }
}

export default Query