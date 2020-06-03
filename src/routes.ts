import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export function getMessage(request: Request, response: Response) {
  const user = createUser({
    name: 'Danilo Salvador',
    email: 'danilo.salvador@smartlogic.com.br',
    techs: [ 
      'Node.JS',
      'React JS',
      'React Native',
      { title: 'C#', experience: 100 }
    ]
  });
  
  return response.json({ user });
}