import 'cross-fetch/polyfill'
import { gql } from 'apollo-boost'

import prisma from '../src/prisma'
import seedDatabase, { userOne, postOne, postTwo } from './utils/seedDatabase'
import getClient from './utils/getClient'

const client = getClient()

beforeEach(seedDatabase)

test('Should expose published posts', async () => {
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

    const response = await client.query({ query: getPosts })
    
    expect(response.data.posts.length).toBe(1)
    expect(response.data.posts[0].published).toBe(true)
})

test('Should fetch my posts', async () => {
    const client = getClient(userOne.jwt)

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
    const { data } = await client.query({ query: getMyPosts })

    expect(data.myPosts.length).toBe(2)
})

test('Should be able to update own post', async () => {
    const client = getClient(userOne.jwt)

    const updatePost = gql`
        mutation {
            updatePost(
                id: "${postOne.post.id}",   #always use double quotes within graphql
                data: {
                    published: false
                }
            ) {
                id
                title
                body
                published
            }
        } 
    `
    const { data } = await client.mutate({ mutation: updatePost })
    const postExists = await prisma.exists.Post({ id: postOne.post.id, published: false })

    expect(data.updatePost.published).toBe(false)
    expect(postExists).toBe(true)
})

test('Should create a new post', async () => {
    const client = getClient(userOne.jwt)

    const createPost = gql`
        mutation {
            createPost (
                data: {
                    title: "Test post",
                    body: "",
                    published: true
                }
            ){
                id
                title
                body
                published
            }
        }
    `
    const { data } = await client.mutate({ mutation: createPost })
    
    expect(data.createPost.title).toBe('Test post')
    expect(data.createPost.body).toBe('')
    expect(data.createPost.published).toBe(true)
})

test('Should delete post two', async () => {
    const client = getClient(userOne.jwt)
    
    const deletePost = gql`
        mutation {
            deletePost (
                id: "${postTwo.post.id}"
            ){
                id
            }
        }
    ` 
    await client.mutate({ mutation: deletePost })
    const postExists = await prisma.exists.Post({ id: postTwo.post.id })

    expect(postExists).toBe(false)
})