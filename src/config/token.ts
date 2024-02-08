import jwt from 'jsonwebtoken';
import dotenv from '../config/dotenv';
dotenv.config();

export default class Token{
    
    private static seed:string =  process.env.TOKEN_SEED!;
    private static expired:string = process.env.TOKEN_DURATION!;

    constructor(){}

    static getJwtToken(payload:any):string{
        return jwt.sign({
            user:payload,
        },this.seed,{expiresIn:this.expired});
    }
    
    static checkToken(tokenUser:string){
        return new Promise((resolve,reject)=>{
            jwt.verify(tokenUser, this.seed, (err:any, decoded:any) => {
                if(err){
                    reject();
                }else{
                    resolve(decoded);
                }
            });
        });

        
    }
}