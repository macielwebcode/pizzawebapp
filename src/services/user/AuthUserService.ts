import prismaCliente from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken'

interface AuthRequest{
    email: string;
    pass: string;
}

class AuthUserService{
    async execute({email, pass}: AuthRequest){
        
        const user = await prismaCliente.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("User/paasword incorreto")              
        }

        //verify password
        const passMatch = await compare(pass, user.pass)

        if(!passMatch){
            throw new Error("Senha incorreta");           
        }

        //gerar um token JWT com os dados do usuario (se passou pelas validaçoes)
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return{
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }