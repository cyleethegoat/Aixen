//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cadillaccylee111@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/errrbodyhatescylee/Queen_Kylie-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/yeu6a8.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/tovha7.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.auto_bio = process.env.AUTO_BIO || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kylie-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEQ2dno2TmVlTXpoWmNLVGo0MmR4ZzZmclJrYjVyUGNGbG5mUTRwVWNWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTRQQjNZamVqUHRwL1gwNDE4SDJpNDRNVFF4UU9wSXRyVCtMRHY1RHZoST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSm52Tm1ob2o2cEtuUkdHOEY4QXVWUGhqZ2gzUC9QU2IyRE15R1o1QUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCSS9wZnU0Ymx4L0FHb0JtUFgxemZrWW5rMEkrRnV0OE95R2p0REo0azFjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOYUF1MTNOWXh3VDJhY2ZGRmJwaHRLRFFPUm0xcUZ1cHBGbkc2QmdSbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFIZkNubWFmV1pmOElXWFZOQ3VrT25ZNFVVSVdBcnhOc3M1bUxlNWtPSE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUk3SHZhbWVXdnpoVG51THVmZHE4MjhQSGtsNVlDQlkxaFczZkxkYzJGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGdRcHVOQU45L0lsYVBDMGt2OTJBQXhBT245NHI0UVFQVXJnV2ZxK2pSWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im95SEtuSHlYR2NzcGFmcEJEUVVGR0VQSFNXS2JxSTNZTGdhSTE4S3EyWHJIMUhjZ20rblE1M2laWWdTUjNKRFNPbzUwcHYxU0drQkZXUlQ3NzZnVWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJRVEh3dCtjMjBUSE96QVRMU201M2ExSjA3K0o3bEp3NWdUdkxYOXNFRGJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDLWVkR0RfSlR1S29IXzRfblU5cGN3IiwicGhvbmVJZCI6ImQwNjdlMGI3LTg4YzctNDliZS05OTliLTBiYmVkMjJkNjFlZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEclE2dVhlbkk3TGtPYXZWc0VUYnVmaDFFc3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczdYOGl2NjgwbXdQZlFBOW5Cc0VYWmt5ZjVVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ1VE5HWkRDIiwibWUiOnsiaWQiOiIyMzQ4MDgyOTY2OTYzOjI3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsKr5Y2CwrtBaXplbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVdqc3ZzQ0VQU0hyYm9HR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibWxvdGxkeEZCMlhuSlg2QjJRa3NkOEkyRGdleVpHWGRCcGpGQjNDemVRRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidS9OamkyOHNmdm93YU1SS1JWR3RGaHJldUQyRmJKSVZOWTgvUU1IMEpGb0d4K3hkOVNJakIvRHhCQVNzd3JUa0dieHVhU0NWcFZTQy93U0g5aFpzQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjlIbkNjSjJlYWhGT3ZKcjhFaUsvMG1DV1ltZDRqU1dMTW9xWDBCRkpKSDV6a0xyNkNyTlNTUlJTQy9aOXJiWWJmRDBBQ3V2ekdJQmtDR05KUDZGbWlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA4Mjk2Njk2MzoyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJacGFMWlhjUlFkbDV5VitnZGtKTEhmQ05nNEhzbVJsM1FhWXhRZHdzM2tCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyOTg1ODU4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNoQSJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE-V1👸❤️🧸❄️™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "Sir Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
