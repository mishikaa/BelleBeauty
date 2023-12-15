// A Next.js API route that utilizes the next-auth library to implement authentication 
// using Google OAuth FOR LOGIN/SIGNUP FUNCTIONALITY

import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import {connectToDB} from '@utils/database';


// Configuration object for NextAuth function
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId:  process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        // Called whenever a session is created
        async session({session}) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })
            // Updating the session with the current userId
            session.user.id = sessionUser._id.toString();
    
            return session;
        },

        async signIn({profile}) {
            try {
                // serverless
                await connectToDB();

                // check if a user already exists
                const userExists = await User.findOne({
                    email: profile.email
                })
                // console.log(userExists)
                
                // If not, creating a user
                if(!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(/\s/g, "").toLowerCase(),
                        image: profile.picture
                    })
                }
                return true;
                // console.log(newUser)
            } catch (error) {
                console.log(error)
            }
        }
        }
})

export {handler as GET, handler as POST};