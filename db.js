function createUserDB () {
    const users = [
        {id: '1', name: 'Alex'}, 
        {id: '2', name: 'John'}, 
        {id: '3', name: 'Mark'}
    ]

    return {
        getUsers: () => users,
        /**
         * @param  {object} user
         */
        addUser: (user) => {
            users.push(user)
        },
        ls: () => {
            return users.join(', ')
        },
        removeUser: (userId) => {
           const userIndex = users.findIndex((user) => {
               return user.id === userId
           }) 

           users.splice(userIndex, 1)
        }
    }
}

module.exports = {
    name: 'sdsdfds',
  createUserDB: createUserDB
}