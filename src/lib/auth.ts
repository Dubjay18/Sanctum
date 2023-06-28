import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../middleware/mongoose";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import connectDB from "../../middleware/mongoose";

export const authOptions: NextAuthOptions = {
  //   adapter: MongoDBAdapter(clientPromise.then(client => client)),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB().catch((err) => {
          throw new Error(err);
        });
        const user = {
          id: "1",
          name: "Admin",
          email: "admin@admin.com",
        };
        return user;
      },
    }),
  ],
};
