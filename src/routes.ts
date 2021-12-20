import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('teste de rota GET')
});

routes.post('/login', new AuthenticateUserController().handle)

routes.post('/', (req, res) =>{
    const { text } = req.body;

    res.status(200).json(text);
})

export { routes };