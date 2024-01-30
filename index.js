const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

const whatsapp = new Client({
  authStrategy: new LocalAuth(),
});

whatsapp.on("qr", (qr) => {
  qrcode.generate(qr, {
    small: true,
  });
});

whatsapp.on("chat", async (chat) => {
  Chat
  chat.isG
});

whatsapp.on("message", async (message) => {
  if (message.body === "test") {
    // message.reply("Hey ini ChatBot hasil Test");
    await whatsapp.sendMessage(message.from, "Hallo");
  } else if (message.body === "1") {
    message.reply("Itu Angka satu");
  } else if (message.body === "2") {
    message.reply("Itu Angka dua");
  } else {
    message.reply("Command tidak dimengerti");
  }
});

whatsapp.on("ready", () => {
  console.log("Client is ready");
});

whatsapp.initialize();
