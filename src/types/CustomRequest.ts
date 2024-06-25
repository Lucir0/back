// types/CustomRequest.ts
import { Request } from 'express';
import { IUser } from '../models/IUser';

export interface CustomRequest extends Request {
  user?: IUser;
  
}

export default CustomRequest;