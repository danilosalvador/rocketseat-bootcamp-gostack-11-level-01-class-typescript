import { Request, Response } from 'express';

export function getMessage(request: Request, response: Response) {
  return response.json({ message: 'Hello TypeScript!'});
}