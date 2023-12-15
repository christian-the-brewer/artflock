import {publicProcedure, router} from "./trpc";
import {AuthCredentialsValidator} from "../lib/validators/account_credentials_validator";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {getPayloadClient} from "../get_payload";
import {TRPCError} from "@trpc/server";

export const authRouter = router({
    createPayloadUser: publicProcedure.input(AuthCredentialsValidator).
    mutation(async ({input}) =>{
        const { email, password } = input
        const payload = await getPayloadClient()

        //check for user
        const {docs: users} = await payload.find({
            collection: "users",
            where: {
                email: {
                    equals: email
                }
            }
        })

        if (users.length !== 0) throw new TRPCError(({code: "CONFLICT"}))
        await payload.create({
            collection: "users",
            data: {
                email,
                password,
                role:"user",
            },
        })
    return { success:true, sentToEmail: email }
    })
})