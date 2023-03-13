export interface Environment {
    production: boolean;
    URL: string;
    firebase: {
        projectId: string;
        appId: string;
        storageBucket: string;
        locationId: string;
        apiKey: string;
        authDomain: string;
        messagingSenderId: string;
    };
}