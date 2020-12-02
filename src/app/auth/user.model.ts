export class User {
  public userData:any;
  public _token: string;
    constructor( userData, _token) {
      this._token=_token;
      this.userData = userData;
    }
  
    get token() {
      if (!this._token ) {
        return null;
      }
      console.log(this._token);
      return this._token;
    }
  }
  