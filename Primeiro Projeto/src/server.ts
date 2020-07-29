import express from 'express';
const app = express();
import routes from './routes'

app.get('/', (request, response)=>{
  return response.json({message: 'Hello'});
})

app.listen(3333, ()=>{console.log('Servidor OK')})
