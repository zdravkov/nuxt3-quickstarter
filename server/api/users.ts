const users: any[] = [
  { username: 'Peter', champion: 'Brasil', goalscorer: 'Lukako' },
  { username: 'Michael', champion: 'Portugal', goalscorer: 'Ronaldo' },
  { username: 'Pedro', champion: 'Spain', goalscorer: 'Pedri' },
  { username: 'John', champion: 'Croatia', goalscorer: 'Modric' },
  { username: 'Peter', champion: 'Brasil', goalscorer: 'Lukako' },
  { username: 'Michael', champion: 'Portugal', goalscorer: 'Ronaldo' },
  { username: 'Pedro', champion: 'Spain', goalscorer: 'Pedri' },
  { username: 'John', champion: 'Croatia', goalscorer: 'Modric' },
  { username: 'Peter', champion: 'Brasil', goalscorer: 'Lukako' },
  { username: 'Michael', champion: 'Portugal', goalscorer: 'Ronaldo' },
  { username: 'Pedro', champion: 'Spain', goalscorer: 'Pedri' },
  { username: 'John', champion: 'Croatia', goalscorer: 'Modric' }
]

interface Users {
  users: any[]
}

export default defineEventHandler((): Users => ({
  users
}))

