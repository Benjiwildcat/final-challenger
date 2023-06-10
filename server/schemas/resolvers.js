const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const foundUser = await User.findOne({
        _id: context.user._id
      });

      if (!foundUser) {
        throw new Error('Could not find User')
      }
      return foundUser

    }
  },

  Mutation: {
    addUser: async (parent, username, email, password) => {
      const user = await user.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    savedBook: async (parent, args, context) => {
      // console.log(user);
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: { ...args } } },
          { new: true }
        );
        return updatedUser;
      }
    },

    deleteBook: async (parent, args, context) => {
      console.log(user);
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { ...args } } },
          { new: true }
        );

        return updatedUser;
      }
    }
  }
};

module.exports = resolvers;
