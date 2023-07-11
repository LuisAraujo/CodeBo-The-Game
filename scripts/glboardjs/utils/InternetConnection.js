import checkInternetConnected from "check-internet-connected";
const config = {
  timeout: 5000,
  retries: 3,
  domain: "google.com",
};

export default class InternetConnection {
  static checkConnection() {
    return checkInternetConnected(config)
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
  }
}
