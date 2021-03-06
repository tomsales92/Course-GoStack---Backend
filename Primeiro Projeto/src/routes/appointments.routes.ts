import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepositoy';
import CreateAppointmentService from '../service/CreateAppointmentService';

const appointmentsRouter = Router();

//Nossa persistencia de dados (Provisória)
  const appointmentsRepository = new AppointmentsRepository();

  appointmentsRouter.get('/', (request, response) =>{
    const appointments = appointmentsRepository.All();
    return response.json(appointments);
  })

  appointmentsRouter.post('/', (request, response) => {
    try{
      const {provider, date} = request.body;
      const parsedDate = parseISO(date);

      const createAppointment = new CreateAppointmentService(appointmentsRepository);
      const appointment = createAppointment.execute({provider, date: parsedDate});
    return response.json(appointment);
    }catch(err) {
      return response.status(400).json({error: err.message});
    }
  });

export default appointmentsRouter;
