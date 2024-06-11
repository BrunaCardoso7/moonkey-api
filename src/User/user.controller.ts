import { Request, Response} from 'express'
import { UserDataprops, UserService } from "./user.service"
import bcrypt from 'bcrypt'
import { JwtService } from '../middleware/jwt.service'
import { User } from './user.entity'

export class UserController {
    private userService: UserService

    constructor(userService: UserService){
        this.userService = userService
    }

    async createUser (req: Request, res: Response) {
        try {
            const userdata: UserDataprops = req.body
            const { email, nome, password, telefone } = userdata 
            
            const hash = bcrypt.hashSync(password, 10) 
            
            const user = new User()
            user.nome = nome
            user.email = email
            user.telefone = telefone
            user.password = hash
            
            const token = JwtService.generateToken({ email: user.email })
            await this.userService.createUser(user)

            return res.status(200).json({ message: 'Registro de usuário feito com sucesso', token })
            
        } catch (error) {
            console.error('Camada controller error: ', error.message)
            return res.status(500).json({ error: 'Erro ao criar usuário' })
        }
    }
    async authUser (req: Request, res: Response) {
        try {
            const userData: UserDataprops = req.body
            const {email, password} = userData

            const user = await this.userService.getUserByEmail(email)
            if(!user) {
                console.log('usuario não encontrado')
                return res.status(401).json({ error: 'Usuário não encontrado' });
            }
            const passwordCompare = bcrypt.compareSync(password, user.password)

            if(!passwordCompare) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const token = JwtService.generateToken({ email: user.email });
            console.log("user retorno", user)
            return res.status(200).json({message: 'usuário logado com sucesso', user, token})
        } catch (error) {
            const {email, password} = req.body
            console.log(email, password)
            console.error('Camada controller error: ', error.message)
            return res.status(500).json({ error: 'Erro ao logar usuário' })
        }
    }
    async logoutUser (req: Request, res: Response) {
        try {
            res.clearCookie('token');
        } catch (error) {
            console.error('Camada controller error: ', error.message)
            return res.status(500).json({ error: 'Erro ao criar usuário' })
        }
    } 
}
