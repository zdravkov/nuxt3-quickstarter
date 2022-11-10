const users: any[] = [
  { name:'Peter', goalscorer: 'Ronaldo', chanpion: 'Germany' },
]

interface Users {
  users: any[]
}

export default defineEventHandler((): Users => ({
  users
}))

