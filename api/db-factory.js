function createUserDB () {
  const users = [
    { id: '1', name: 'Alex' }, 
    { id: '2', name: 'John' }, 
    { id: '3', name: 'Mark' }
  ]

  return {
    all: () => users,
    add: (user) => {
      users.push(user)
    },
    remove: (userId) => {
      const userIndex = users.findIndex((user) => {
        return user.id === userId
      }) 

      users.splice(userIndex, 1)
    }
  }
}

module.exports = {
  createUserDB,
}