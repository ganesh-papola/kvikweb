import io from 'socket.io-client';
import * as TYPE from '../actions/constants';
// import { get_message } from '../actions/messages';

class SocketClient {

  constructor() {
    this.socket = null;
    this.dispatch = null;
  }

  /************* Socket Initializer ************************/
  init = (SOCKET_URL, TOKEN, dispatch) => {
    if (!this.socket) {
      // this.socket = io(SOCKET_URL, { transports: ['websocket'], upgrade: false });
      this.socket = io(SOCKET_URL, { query: `token=${TOKEN}` });
      this.dispatch = dispatch;
    }

    console.log(this.socket);
    /*********** check user authentication ******************** */
    // this.authentication(TOKEN);

    /*********** event for socket connect ******************** */
    this.socket.on('connect', (res) => {
      console.log('connect');
    });

    /*********** event for socket disconnect ******************** */
    this.socket.on('disconnect', (res) => {
      console.log('disconnect');
    });

    /************** event of get messages******* *****************/
    // this.socket.on(`${user_id}-get_message`, (res) => {

    //   this.dispatch(get_message(res));
    // });
  }

  /*********** user authentication before socket connection ******* */
  authentication = (token) => {
    this.socket.emit('authenticate', { token }, (error, res) => {
      console.log(error, res, 'authenticate', this.socket);
    });
  }

  /*********** Handler for emitting events ******* */
  eventHandler = (type, data) => {
    switch (type) {
      case TYPE.LOGOUT_USERS:
        if (this.socket) {
          this.socket.emit('disconnect');
        }
        break;
      case TYPE.SEND_MESSAGE:
        this.socket.emit('send_message', data);
        break;
    }
  }
}

export default new SocketClient();