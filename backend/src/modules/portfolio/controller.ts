import { Request, Response } from "express";
import { AboutService } from "./service";
import { respHndlr } from "../../common/respHandler/index"
import { logger } from "../../common/logger";

export class AboutController {
    aboutService: any
    constructor() {
        this.aboutService = new AboutService()
    }

    async readAboutMe(req: Request, res: Response) {
        try {
            logger.info("code is here")
            const result = await this.aboutService.readAboutMe()
            logger.info(result)
            respHndlr.sendSuccess(res, result, RESPONSE_STATUS.SUCCESS);
        } catch (e:any) {

        }
    }
}