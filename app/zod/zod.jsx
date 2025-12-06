import z, { email } from "zod";


export const register=z.object(
    {
        name:z.string().min(2,"minimum 2 letter required").max(25),
        email:z.email(),
        address:z.string().min(5).max(100)
    }
)