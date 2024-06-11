import jwt from 'jsonwebtoken'

export class JwtService {
    private static readonly secrekey = "m0o^/k3Y|)ev"
    static generateToken (payload: any): string {
        return jwt.sign(payload, this.secrekey, {expiresIn:'10h'})
    }
    static verifyToken (token: string) {
        return jwt.verify(token, this.secrekey)
    }
}