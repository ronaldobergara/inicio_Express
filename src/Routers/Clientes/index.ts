import { Router } from 'express'
import Clientes from '../../Controller/Clientes'

const ClienteRouter = Router()

ClienteRouter.get('/cliente', Clientes.ListarCliente)


export default ClienteRouter