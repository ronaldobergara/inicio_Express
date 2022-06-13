import { Router } from 'express'
import Clientes from './Clientes'

const routers = Router()

routers.use(Clientes)

export default routers