class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  _handleError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._handleError)
  }

  setUserInfo(userInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: userInfo.name,
        about: userInfo.about,
      })
    })
    .then(this._handleError)
  }

  editAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        avatar: link.avatar,
      }),
    })
    .then(this._handleError)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._handleError)
  }

  addCard(card) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      }),
    })
    .then(this._handleError)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._handleError)
  }

  likeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._handleError)
  }

  dislikeCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._handleError)
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.likeCard(id);
    } else {
      return this.dislikeCard(id);
    }
  }
}

const api = new Api({
  baseUrl: 'https://api.tutvamne.mesto.nomoredomains.club',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
