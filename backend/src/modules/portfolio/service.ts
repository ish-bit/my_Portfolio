import { logger } from "../../common/logger"

export class AboutService {
    async readAboutMe() {
        try{
        let obj = {
            desc: "I am a dedicated Full Stack Developer with 2.5+ years of experience, specializing in crafting responsive web applications. Proficient in front-end technologies like HTML, CSS, and JavaScript frameworks, and adept in back-end development with Node.js, Express, and databases. Passionate about delivering innovative solutions and enhancing user experiences through clean and efficient code.",
        }
         return Promise.resolve(obj)
        }catch(error:any){

        }
    }
}