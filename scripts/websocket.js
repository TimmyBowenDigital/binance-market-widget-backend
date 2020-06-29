
class webSocket {
    connectInterval;
    timeout = 200;
    ws = new WebSocket(`wss://stream.binance.com/stream?streams=!miniTicker@arr`);

    connect = () => {
        return new Promise((resolve, reject) => {

            this.ws.onopen = () => {
                console.log("Attempted connection to websocket");

                clearTimeout(connectInterval);
                resolve()
            };
        })
    }

    onClose = () => {
        return new Promise((resolve, reject) => {
            this.ws.onclose = event => {
                console.log(`Socket closed. Reconnect will be attempted ${connectInterval} second.`, event.reason);

                this.timeout += timeout;
                this.connectInterval = Math.min(timeout);
                resolve(event)
            }
        })
    }

    onError = err => {
        return new Promise((reject) => {
            this.ws.onerror = err => {
                reject("Socket encountered error: ", err.message, "Closing socket");

                this.ws.close();
            };
        });
    };
}

export default webSocket;