import { Request, Response } from "express";
import { AboutService } from "./service";

export class AboutController {
    aboutService:any
        constructor({logger}:any){
            this.aboutService = new AboutService()
        }

     async readAboutMe(req:Request, res:Response) {
       const result = await this.aboutService.readAboutMe()
       
    }
}