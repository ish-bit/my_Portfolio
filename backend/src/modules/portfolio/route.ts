import { Request, Response } from "express";
import { config } from "../../config";
import { AboutController } from "./controller";

export const aboutMe = ({app, logger}: any) =>{

    const aboutController = new AboutController(logger)

    app.get(`${config.API_PREFIX}/sites`, (req: Request, res: Response) => {
       aboutController.readAboutMe(req, res);
      });



}