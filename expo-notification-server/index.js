const Expo = require("expo-server-sdk").default;
const expo = new Expo();

const params = process.argv;
console.log(params);
const TOKEN = process.argv[2];

async function sendNotification(token) {
  if (Expo.isExpoPushToken(token)) {
    const notificationResponse = await expo.sendPushNotificationsAsync([
      {
        to: token,
        title: "Hello!",
        body: "This is an expo notification",
        data: { blabla: 123 },
      },
    ]);
    console.log("Notification sent: ", notificationResponse);
  } else {
    console.log(`${token} is not an Expo token`);
  }
}

sendNotification(TOKEN);
