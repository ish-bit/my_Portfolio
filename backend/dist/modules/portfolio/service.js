"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutService = void 0;
class AboutService {
    readAboutMe() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let obj = {
                    desc: "I am a dedicated Full Stack Developer with 2.5+ years of experience, specializing in crafting responsive web applications. Proficient in front-end technologies like HTML, CSS, and JavaScript frameworks, and adept in back-end development with Node.js, Express, and databases. Passionate about delivering innovative solutions and enhancing user experiences through clean and efficient code.",
                };
                return Promise.resolve(obj);
            }
            catch (error) {
            }
        });
    }
}
exports.AboutService = AboutService;
