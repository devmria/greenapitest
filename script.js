/*
* @fileoverview This file contains the functionality for handling API requests.
* @author Maria <devmria@gmail.com>
* Description: This script was written as part of a test test. 
*/


// Mocked data for testing purposes
// {
//     idInstance: 7103145949,
//     apiTokenInstance: 85bdabcf39df428ba16a0d0478f8de00f1b72d05643640bf87,
//     chatId: 995551001353,
//     message: "Test message",
//     urlFile: "https://drive.google.com/uc?export=download&id=1CiD5aOSiRkHrwxLjtA0zyv2yPhbe925t",
//     fileName: "green.png"
// }
 

// Base URL for all API requests used throughout the application
const apiUrl = 'https://7103.api.greenapi.com';
 

// Function to get settings of the instance
function getSettings(idInstance, apiTokenInstance) {
    const url = `${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при получении getSettings');
            }
            return response.json();
        })
        .then(data => {
            console.log('Ответ от API:', data);
            document.getElementById('response_field').value = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            document.getElementById('response_field').value = `Ошибка: ${error.message}`;
        });
}
// Event handler for the "getSettingsBtn" button click
document.getElementById('getSettingsBtn').addEventListener('click', function() {
    // Get values from the input fields and remove extra spaces
    const idInstance = document.getElementById('idInstance').value.trim();
    const apiTokenInstance = document.getElementById('apiTokenInstance').value.trim();

    // Check if all required fields are filled in
    if (!idInstance || !apiTokenInstance) {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
    }
    // Call the getSettings method to fetch the settings
    getSettings(idInstance, apiTokenInstance);
});



// Function to get the state of the instance
 function getStateInstance(idInstance, apiTokenInstance) {
    const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при получении StateInstance');
            }
            return response.json();
        })
        .then(data => {
            console.log('Ответ от API:', data);
            document.getElementById('response_field').value = JSON.stringify(data, null, 2); 
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            document.getElementById('response_field').value = `Ошибка: ${error.message}`;
        });
}
// Event handler for the "getStateInstanceBtn" button click
document.getElementById('getStateInstanceBtn').addEventListener('click', function() {
    // Get values from the input fields and remove extra spaces
    const idInstance = document.getElementById('idInstance').value.trim();
    const apiTokenInstance = document.getElementById('apiTokenInstance').value.trim();

    // Check if all required fields are filled in
    if (!idInstance || !apiTokenInstance) {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
    }
    // Call the getStateInstance method to fetch the state
    getStateInstance(idInstance, apiTokenInstance);
});



// Function to send message
function sendMessage(idInstance, apiTokenInstance, headers, payload) {
    const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(`Ошибка от сервера: ${err.message || 'Неизвестная ошибка'}`);
            });
        }
        return response.json();
    })
    .then(data => {
        console.log('Ответ от API:', data);
        document.getElementById('response_field').value = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
        document.getElementById('response_field').value = `Ошибка: ${error.message}`;
    });
}
// Event handler for the "sendMessageBtn" button click
document.getElementById('sendMessageBtn').addEventListener('click', function() {
    // Get values from the input fields and remove extra spaces
    const idInstance = document.getElementById('idInstance').value.trim();
    const apiTokenInstance = document.getElementById('apiTokenInstance').value.trim();
    const chatId = document.getElementById('chatId_sendMessage').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if all required fields are filled in
    if (!idInstance || !apiTokenInstance || !chatId || !message) {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
    }
    // Create the payload with necessary parameters
    const payload = {
        chatId: `${chatId}@c.us`,
        message: message
    };
    // Set the request headers (Content-Type is JSON)
    const headers = {
        'Content-Type': 'application/json'
    };
    // Call the sendMessage function to send the message
    sendMessage(idInstance, apiTokenInstance, headers, payload);
});



// Function to send file by URL
function sendFileByUrl(idInstance, apiTokenInstance, headers, payload) {
    const url = `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
    fetch(url,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        }
    )
        .then(response => response.json())
        .then(data => {
            console.log('Ответ от API:', data);
            document.getElementById('response_field').value = JSON.stringify(data, null, 2); 
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            document.getElementById('response_field').value = `Ошибка: ${error.message}`;
        });
}
// Event handler for the "sendFileByUrl" button click
document.getElementById('sendFileByUrl').addEventListener('click', function() {
    // Get values from the input fields and remove extra spaces
    const idInstance = document.getElementById('idInstance').value.trim();
    const apiTokenInstance = document.getElementById('apiTokenInstance').value.trim();
    const chatId = document.getElementById('chatId_sendFile').value.trim();
    const urlFile =  document.getElementById('fileUrl').value.trim();
    const fileName =  document.getElementById('fileName').value.trim();

    // Create the payload with necessary parameters
    const payload = {
        chatId: `${chatId}@c.us`,
        urlFile: urlFile, 
        fileName: fileName, 
    };
    // Set the request headers (Content-Type is JSON)
    const headers = {
        'Content-Type': 'application/json'
    };
    // Check if all required fields are filled in
    if (!idInstance || !apiTokenInstance || !chatId || !urlFile || !fileName) {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
    }
    // Call the function to send the file by URL
    sendFileByUrl(idInstance, apiTokenInstance, headers, payload);
});