import prismaCliente from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    name: string;
    email: string;
    pass: string;
}

class CreateUserService{

    async execute({name, email, pass}: UserRequest){
        if(!email){
            throw new Error("Email Incorreto")
        }

        const userAlreadyExists = await prismaCliente.user.findFirst({
            where:{
                email: email
            }
        })
        if(userAlreadyExists){
            throw new Error("user já existe")
        }

        const passHash = await hash(pass, 10)

        const user = await prismaCliente.user.create({
            data:{
                name: name,
                email: email,
                pass: passHash
            },
            select:{
                id: true,
                email: true,
                name: true
            }
        })

        return user;
    }
}

export { CreateUserService }