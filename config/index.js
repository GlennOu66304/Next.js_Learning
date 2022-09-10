// fetch the data first, you need to define the data path in the config first

const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000':'https://news-server-tau.vercel.app/'