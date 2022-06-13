import { Request, Response, Router } from 'express'

export class Clientes {
    public static async ListarCliente( req: Request, res: Response ) {
        try {
            return res.json({
                msg: "Rota Funcionando"
            })   
        } catch (error) {
            return res.status(500).json({error})
        }
    }
}

export default Clientes