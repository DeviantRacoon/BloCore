import { Request, Response, NextFunction } from 'express';

export const error404 = async (req: any, res: Response, next: NextFunction) => {

    if (!req.user) {
        return res.status(404).json({
            ok: false,
            data: 'Not found'
        })
    }
    next();
}

