import 'cross-fetch/polyfill'
import { gql } from 'apollo-boost'

import prisma from '../src/prisma'
import seedDatabase, { userOne } from './utils/seedDatabase'
import getClient from './utils/getClient'

const client = getClient()

beforeEach(seedDatabase)


test('Should create a new user', async () => {
    const createUser = gql`
        mutation {
            createUser(
                data: {
                    name: "Andres",
                    email: "andres@example.com",
                    password: "red12345"
                }
            ){
                token,
                user {
                    id
                }
            }
        }
    `

    const response = await client.mutate({
        mutation: createUser
    })

    const userExists = await prisma.exists.User({
        id: response.data.createUser.user.id
    }) 

    expect(userExists).toBe(true)
}) 

test('Should expose public author profiles', async () => {
    const getUsers = gql`
        query {
            users {
                id
                name 
                email
            }
        }
    `

    const response = await client.query({ query: getUsers })

    expect(response.data.users.length).toBe(1)
    expect(response.data.users[0].email).toBe(null)
    expect(response.data.users[0].name).toBe('Jen')
})

test('Should not login with bad credentials', async () => {
    const login = gql`
        mutation {
            loginUser(
                data: {
                    email: "jeff@example.com",
                    password: "51dhn5gfch1f"
                }
            ){
                token
            }
        }
    `

    await expect(
        client.mutate({ mutation: login })      //this is a Promise
    ).rejects.toThrow()                         //so it requires the use of "rejects"
})

test('Should not signup user with invalid password', async () => {
    const createUser = gql`
        mutation {
            createUser (
                data: {
                    name: "Jeff",
                    email: "jeff@example.com",
                    password: "green23"
                }
            ){
                token
            }
        }
    `

    await expect(
        client.mutate({ mutation: createUser })
    ).rejects.toThrow()
})

test('Should fetch user profile', async () => {
    const client = getClient(userOne.jwt)

    const getProfile = gql`
        query {
            me {
                id
                name
                email
            }
        }
    `
    const { data } = await client.query({ query: getProfile })

    expect(data.me.id).toBe(userOne.user.id)
    expect(data.me.name).toBe(userOne.user.name)
    expect(data.me.email).toBe(userOne.user.email)
})