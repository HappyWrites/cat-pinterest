export class Api {
  constructor(url) {
    this._url = url;    
  }

  getInitialCards() {
    return fetch(this._url)
      .then(res => this._checkResult(res));
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  }
}

const api = new Api('https://api.thecatapi.com/v1/images/search?limit=25');
export default api;
