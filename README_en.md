# Test task GREEN API
**Description:**  
This file is a part of a test task.

**Author:**  
Maria - devmria@gmail.com

# README for developers and system administrators

## Description

This application is a web page designed to interact with an API intended for working with WhatsApp via GREEN API. The page allows performing various operations using the API, such as retrieving instance settings, getting instance state, sending messages, and sending files via URL.

## Program logic

The program provides an interface for making requests to the API using HTTP methods (GET, POST). Each API method is executed by clicking the corresponding button, and the result (success or error) is displayed on the page in the "Response" field.

### Main methods:

1. **getSettings** – get the settings of the instance.
2. **getStateInstance** – get the current state of the instance.
3. **sendMessage** – sends a message to the specified `chatId`.
4. **sendFileByUrl** – sends a file via URL to the specified `chatId`.

## Application structure

The application consists of two main parts:
1. **Frontend** — HTML, CSS, and JavaScript.
2. **API** — methods that handle communication with the GREEN API using fetch.

### HTML-page

The HTML-page (`index.html`) contains forms for inputting data and buttons for making API requests. 
The page structure is as follows:
- **Input fields**: for entering `idInstance`, `apiTokenInstance`, `chatId`, `message`, `urlFile`, `fileName`, which are required to work with the API.
- **Buttons**: each button is tied to an API method.
- **Text field**: a text field for displaying the API responses.

### CSS

The `styles.css` file defines the basic styles for the page:
- Styles for containers and forms.
- Styles for buttons and text fields.
- `flexbox`  is used for flexible layout of elements.

### JavaScript

The main functionality of the application is implemented in the `script.js` file. 
This file contains functions for making API requests and event handlers for the buttons. 
API responses and errors are displayed in a text field on the page (`response_field`) and logged to the developer's console.

## Main functions

### General workflow:

1. The user enters the necessary data (`idInstance`, `apiTokenInstance`, `chatId`, `message`, `urlFile`, `fileName`) in the form on the page.
2. When the appropriate button is clicked, a request is sent to the API.
3. Before sending the request, it is verified that all required fields are filled. If any field is empty, the user is shown an alert notifying them to fill in all the fields.
4. he response from the API is displayed in the text field `response_field` on the page.
5. The result of the request is displayed in the text field `response_field`, as well as in the WhatsApp chat (if the request was successful).


### 1. **getSettings(idInstance, apiTokenInstance)**

This method sends a GET request to the API to retrieve instance settings.

```javascript
const url = `${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
```

### 2. **getStateInstance(idInstance, apiTokenInstance)**

This method sends a GET request to the API to retrieve the instance's state.

```javascript
const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
```

### 3. **sendMessage(idInstance, apiTokenInstance, headers, payload)**

This method sends a POST request to the API to send a message to the specified chatId.

```javascript
const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
```

### 4. **sendFileByUrl(idInstance, apiTokenInstance, headers, payload)**

This method sends a POST request to the API to send a file via URL to the specified chatId.

```javascript
const url = `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
```

## Required environment for running the application

- **Web-browser**: a browser that supports JavaScript and works with `fetch`.
- **Internet connection**: for interacting with the API, which is available online.

## How to run

1. Download or clone the repository.
2. Open the `index.html` file in your browser.
3. Enter the necessary connection data for the API (`idInstance` and `apiTokenInstance`).
- **`idInstance`** and **`apiTokenInstance`** can be obtained by registering in the [personal cabinet GREEN API](https://green-api.com/en). After registering and creating an instance, you will be provided with `idInstance` and `apiTokenInstance`, which need to be entered in the appropriate fields.
4. Use the buttons to send requests:
   - `getSettings`
   - `getStateInstance`
   - `sendMessage`
   - `sendFileByUrl`

## Notes

- Make sure you have access to the corresponding services (e.g., WhatsApp) for sending messages and files.
