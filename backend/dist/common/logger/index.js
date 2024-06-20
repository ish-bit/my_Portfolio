"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const bunyan_1 = __importDefault(require("bunyan"));
const bunyan_format_1 = __importDefault(require("bunyan-format"));
const bunyan_rotating_file_stream_1 = __importDefault(require("bunyan-rotating-file-stream"));
const formatOut = (0, bunyan_format_1.default)({ outputMode: 'short' });
// var dir = './src/logs';
// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
// }
const bunyanOpts = {
    name: 'portfolio-logs',
    src: true,
    streams: [
        {
            level: 'trace',
            stream: formatOut // log TRACE and above to stdout
        },
        {
            level: 'trace',
            stream: new bunyan_rotating_file_stream_1.default({
                path: 'src/logs/%d-%b-%y.log',
                period: '1d',
                rotateExisting: true,
                threshold: '2m',
                totalSize: '20m',
                gzip: true, // Compress the archive log files to save space
            })
        }
    ]
};
exports.logger = bunyan_1.default.createLogger(bunyanOpts);
