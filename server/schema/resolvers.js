const { UserList } = require("../FakeData");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
    user(id) {
      return UserList.filter((user) => user.id === id);
    },
  },
};

module.exports = { resolvers };
