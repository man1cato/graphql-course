//Dummy data
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
    author: '3'
}, {
    id: '12',
    title: 'Fav movie',
    body: 'Infinity war',
    published: true,
    author: '2'
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


const db = {
    users,
    posts,
    comments
}

export default db