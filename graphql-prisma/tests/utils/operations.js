import { gql } from 'apollo-boost'

const createUser = gql`
    mutation ($data: CreateUserInput!){
        createUser(
            data: $data
        ){
            token,
            user {
                id
                name
                email
            }
        }
    }
`

const loginUser = gql`
    mutation($data: LoginUserInput!) {
        loginUser(
            data: $data
        ){
            token
        }
    }
`

const getUsers = gql`
    query {
        users {
            id
            name 
            email
        }
    }
`

const getProfile = gql`
    query {
        me {
            id
            name
            email
        }
    }
`

const createPost = gql`
    mutation($data: CreatePostInput!) {
        createPost (
            data: $data
        ){
            id
            title
            body
            published
        }
    }
`

const updatePost = gql`
    mutation ($id: ID!, $data: UpdatePostInput!){
        updatePost(
            id: $id,
            data: $data
        ) {
            id
            title
            body
            published
        }
    } 
`

const deletePost = gql`
    mutation($id: ID!) {
        deletePost (
            id: $id
        ){
            id
        }
    }
` 

const getPosts = gql`
        query {
            posts {
                id
                title
                body
                published
            }
        }
    `

const getMyPosts = gql`
    query {
        myPosts {
            id
            title
            body
            published
        }
    }
`

const subscribeToPosts = gql`
    subscription {
        post {
            mutation
            node {
                id
                title
                body
                published
            }
        }
    }
`

const deleteComment = gql`
    mutation($id: ID!) {
        deleteComment(
            id: $id
        ){
            id
        }
    }
` 

const subscribeToComments = gql`
    subscription($postId: ID!) {
        comment(
            postId: $postId
        ) {
            mutation
            node {
                id
                text
            }
        }
    }
`


export {
    createUser,
    loginUser,
    getUsers,
    getProfile, 
    createPost,
    updatePost,
    deletePost,
    getPosts,
    getMyPosts,
    subscribeToPosts,
    deleteComment,
    subscribeToComments
}