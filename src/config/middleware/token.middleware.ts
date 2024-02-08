import {Response, NextFunction } from 'express';
import Token from '../token';
 
export const validateToken = async (req: any, res: Response, next: NextFunction) => {
 
    const userToken = req.get('Authorization') || '';
    try {        
        const decoded: any = await Token.checkToken(userToken);  
        const user = decoded.user;
        req.user = user;
        next();
    } catch (e) {        
        return res.status(401).json({
            ok: false,
            data: 'Unauthorized',
            message: e
        })

    }

}