//This file will consist the javascript code
export { ChatHandler, chat_names}

const chat_names = ["Prateek Bhaiya", "Arnav Bhaiya", "Munna Bhaiya", "Aarnav Jindal", "Shriya Chhabra", "Akul Jindal", "Abhinav Duggal"];
const chat_names_length = chat_names.length;
const chat_msg = ["Why didn't he come and talk to me himse...",
    "Perfect, I am really glad to hear that!...",
    "This is what I understand you're telling me..",
    "I’m sorry, I don’t have the info on that.."];
const chat_msg_length = chat_msg.length;
const chat_img_length = 7;

class ChatHandler{

    constructor(chat_template, chat_list){
        this.hashmap = new Map();
        this.linked_list = null;
        this.chat_template = chat_template;
        this.chat_list = chat_list;
        let clock = new Date();
        this.hours = clock.getHours();
        this.mins = clock.getMinutes();
    }
    
    getTime(){
        // Time Stamp creation for messages
        this.mins += 1;
        if(this.mins === 60){
            this.hours += 1;
            this.mins = 0;
        }
        
        return ("0" + this.hours).slice(-2)+":"+("0" + this.mins).slice(-2);
    }

    createNode(id){
        // Creating node element
        let node = {};
        // Pointers to prev and next
        node['next'] = null;
        node['prev'] = null;
