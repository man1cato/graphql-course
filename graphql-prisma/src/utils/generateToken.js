import jwt from 'jsonwebtoken'

export default (userId) => jwt.sign({ userId }, 'thisisasecret', { expiresIn: '7 days' })