import { ChatHandler, chat_names } from './ChatHandler.js';

onload = function () {

    const chatlist = document.getElementById('chat-list');
    const add = document.getElementById('generate-step');
    const text = document.getElementById('temptext');

    const templates = document.getElementsByTagName('template')[0];
    const chat_item = templates.content.querySelector("li");

    const chatHandler = new ChatHandler(chat_item, chatlist);
    let chats = [];
