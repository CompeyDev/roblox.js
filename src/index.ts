import { Datastore } from "./datastore/class";
import { MessagingService } from "./messagingservice/class";
const ERROR_TYPES: { [errorCode: number]: string } =  {
    400: "INVALID_ARGUMENT",
    403: "INSUFFICIENT_SCOPE",
    404: "NOT_FOUND",
    409: "ABORTED",
    429: "RESOURCE_EXHAUSTED",
    499: "CANCELLED", 
    500: "INTERNAL", 
    501: "NOT_IMPLEMENTED", 
    503: "UNAVAILABLE"
} as const;

export { Datastore, MessagingService, ERROR_TYPES }