import { Request, Response } from "express";
import { config } from "../../config";
import { AboutController } from "./controller";

export const PortfolioRoutes = ({app, logger}: any) =>{

    const aboutController = new AboutController()

    app.get(`${config.API_PREFIX}/aboutme`, (req: Request, res: Response) => {
       aboutController.readAboutMe(req, res);
      });



}