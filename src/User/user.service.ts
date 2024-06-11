import { User } from "./user.entity"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"

export type UserDataprops = {
    nome?: string
    telefone?: string
    email: string
    password: string
}

export class UserService {
    private userRepository: Repository<User>
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }
    
    async createUser (userData: UserDataprops) {
        try {
            const newUser = this.userRepository.create(userData)
            await this.userRepository.save(newUser)
            return newUser
        } catch (error) {
            console.error("camada service:  ", error.message)
        }
    }
    async getUserByEmail (email: string) {
        try {
            const user = await this.userRepository.findOne({where: { email }})
            return user
        } catch (error) {
            console.error("camada service:  ", error.message)
        }
    }
}