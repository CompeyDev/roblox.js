declare global {
    namespace NodeJS {
        interface ProcessEnv {
            universeId: string;
            apiKey: string;
        }
    }
}

export {};