
class Settings {
    static getMessagingSenderId() {
        return process.env.REACT_APP_MESSAGING_SENDER_ID;
    }
    static getStorageBucket() {
        return process.env.REACT_APP_STORAGE_BUCKET;
    }
    static getAppId() {
        return process.env.REACT_APP_APP_ID;
    }
    static getProjectId() {
        return process.env.REACT_APP_PROJECT_ID;
    }
    static getAPIKey() {
        return process.env.REACT_APP_API_KEY;
    }
    static getAuthDomain() {
        return process.env.REACT_APP_AUTH_DOMAIN;
    }
}
export default Settings;
