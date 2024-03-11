type Messages = typeof import('./messages/en.json')
type PlMessages = typeof import('./src/messages/pl.json');
type UkMessages = typeof import("./src/messages/uk.json");

declare interface IntlMessages extends 
    Messages,
    PlMessages, 
    UKMessages { }