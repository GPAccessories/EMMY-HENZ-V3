//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01oSDg2b0NQcUpEMjE1cFFOa2Q4UWlpc0ZZVmhQOThBZ3dxQTE1OCtYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZS84Yk5oZmxER3dsS0J2dHBEL3JDY28xdE9TaU1oUXp2S1RLTG1Zd1VEMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ0lkSWVkbkRFUllVWEFCQUhYVlNDd0VWMHh3andBb2tVNGZLcEdKT2tBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDb1Y4eWJQRkN5V0ZmR1kyRmkvczNLSVo4RmhhS0lXejlaVGRlYmNGbDJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndIMFJGaXdCYVczUTNGbGlnVUMrSDNDeUs4enluRW9DNmpuV2NRM3FHM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitTd2VUNTVPeXpLWlVBVEsyL1QzRFI2WXZ3dUVCdFlhVFhPV2wwMkx1ejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERQbXNKbnZrUUN5Mk9uNmtVQnJDVnE4UXJUekwzSmJ3ODJFWjBwb3NIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnlOV1FuODZra0lPR0FXU2pNZjFneU9CRkdHNjNJbGhtRW9WdjZYNkVncz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZmVU02WjBiR0l1TDVUVnhPV1A4VEtaK053YXpkSGJGbG5hUVBzSXhaOTlEQ3daU3d5Uy9mSE5ibXA0eDZKMVFJWkJlaG9uS3I2YUx1NVBNdGNHMEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6IkZHcVE0QkNJcWdpNkRYZ2FaSFBHd0phR0k4dVpLdzZrc0ZCUElScWNoM2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Inl3amM2RnkzVF9HcVNxSGw3aHBITnciLCJwaG9uZUlkIjoiMDQ5ZWNiYmItMjE0MC00NDY4LWI0OTItYjc5ZmRhOWYyY2Y3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img4aFVIUVZKYzBrOE5wVWNMTzFqVStKK3dkST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHNlBMSk5NVHNKeHJmTm50bzVraEwySngyeXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNk03N002WVAiLCJtZSI6eyJpZCI6IjI1NDc5MDA5NDQyODozM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZWA8J2VkvCdlZ7wnZWX8J2Vo/CdlZbwnZWW8J2Vq/CdlZYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01MMXVNY0hFUDM1dWJzR0dCOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlppT1hTMW5VMTRiTkFEazNPL0RvQ0p3QVN6cndZNEY3d2QvQjlhWHQ4MXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjhCVzRZeU9vSUR6NFh0SFZvSk5wSnRhKzg5YjNwbTJ1aTlwcUE3Z3lUSXV6VktrbUtrMW5sbE55NGdSZFZBenpHMHgyanMwUkxoN21CN0RqamZ4U0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4VlFONDZiN056NWVKTXdXeUY2TFdUTit4WkVJckZyTUJaY0JPdzlzbDk5MmxQelcva3YyMEx4UWVOdTNBTnBxbzlwQVM0UXZjWHVUK1I0NHp0QlpDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5MDA5NDQyODozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXWWpsMHRaMU5lR3pRQTVOenZ3NkFpY0FFczY4R09CZThIZndmV2w3Zk5iIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1Mjk0MjE5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdlZiJ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
