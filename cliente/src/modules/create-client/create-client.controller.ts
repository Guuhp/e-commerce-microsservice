import { Request, Response } from "express";
import { CreateClientUseCase } from "./create-client.usecase";

export class CreateCustomerController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const useCase = new CreateClientUseCase();
    try {
        const result = await useCase.execute(req.body);
        return res.json(result);
    } catch (error) {
        return res.status(400).json(error)
    }
  }
}
