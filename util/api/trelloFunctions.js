import { API_KEY, BASE_URL } from "@env";

export const getDataFromTrello = async (url, signal = false) => {
  try {
    const response = await fetch(url, {
      signal: signal && signal,
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      // console.log('data', data);
      return data;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.log("GetAllBoards", error);
  }
};

export const createBoard = async ({ boardName, token: token, func }) => {
  fetch(`${BASE_URL}/boards/?name=${boardName}&key=${API_KEY}&token=${token}`, {
    method: "POST",
  })
    .then((response) => {
      // console.log(`Response: ${response.status} ${response.statusText}`);
      func && func();
      return true;
    })
    // .then((text) => console.log(text))
    .catch((err) => console.error(err));
};
export const deleteBoard = async (boardId, token) => {
  return fetch(`${BASE_URL}/boards/${boardId}?key=${API_KEY}&token=${token}`, {
    method: "DELETE",
  })
    .then((response) => {
      // console.log(`Response: ${response.status} ${response.statusText}`);
      return response.status;
    })
    .catch((err) => console.error("deleteBoard ", err));
};

export const updateBoard = async (boardId, newName, token) => {
  return fetch(
    `${BASE_URL}/boards/${boardId}?name=${newName}&key=${API_KEY}&token=${token}`,
    {
      method: "PUT",
    }
  )
    .then((response) => {
      return response.status;
    })
    .catch((err) => console.error("updateBoard ", err));
};

export const createNewList = async (boardID, listName, token) => {
  return fetch(
    `${BASE_URL}/boards/${boardID}/lists?name=${listName}&key=${API_KEY}&token=${token}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      return response.status;
    })
    .catch((err) => console.error(err));
};

export const deleteList = async (listID, token) => {
  return fetch(
    `${BASE_URL}/lists/${listID}/closed?key=${API_KEY}&token=${token}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: true }),
    }
  )
    .then((response) => {
      return response.status;
    })
    .catch((err) => console.error("deleteList ", err));
};

export const getLists = async (boardID, apiKey, token) => {
  const url = `${BASE_URL}/boards/${boardID}/lists?key=${apiKey}&token=${token}`;
  // console.log(url);
  const data = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      // console.log("response", response);
      return response.json();
    })
    .catch((err) => console.error(err));
  return data;
};

export const createNewCard = async (listID, cardName, token) => {
  return fetch(
    `${BASE_URL}/cards?idList=${listID}&name=${cardName}&key=${API_KEY}&token=${token}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      return response.status;
    })
    .catch((err) => console.error(err));
};
export const deleteCard = async (cardID, token) => {
  return fetch(`${BASE_URL}/cards/${cardID}?key=${API_KEY}&token=${token}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.status;
    })
    .catch((err) => console.error("deleteCard ", err));
};
export const updateCard = async (cardID, newName, token) => {
  return fetch(
    `${BASE_URL}/cards/${cardID}?name=${newName}&key=${API_KEY}&token=${token}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      return response.status;
    })
    .catch((err) => console.error("updateCard ", err));
};

export const getCards = async (url) => {
  const data = await fetch(
    `${BASE_URL}/lists/${listID}/cards?key=${API_KEY}&token=${token}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
  return data;
};
