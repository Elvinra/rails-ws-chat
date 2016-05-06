declare class WebSocketRails
{
    constructor (url: string)

    bind(event_name: string, callback: (message: string|{}) => void) : void

    on_open(callback: (data: any) => void) : void

    trigger(method_name: string, data: {}) : void
}