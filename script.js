const { createApp } = Vue;

createApp({
    data() {
        return {
            changeIcon: false,
            isOpen: false,
            activeIndex: 0,
            newMsg: "",
            todayDate: new Date(),
            searchContact: "",
            deleteAtIndex: "",
            isWriting: false,
            answers: [
                "Nooo!",
                "Tra poco arrivo",
                "Sto cenando",
                "I limoni signoraaaaa!",
                "Diamine",
            ],
            contacts: [
                {
                    name: "Michele",
                    avatar: "./img/avatar_1.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di stendere i panni",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "./img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message:
                                "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "./img/avatar_3.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Alessandro B.",
                    avatar: "./img/avatar_4.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Alessandro L.",
                    avatar: "./img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ricordati di chiamare la nonna",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Va bene, stasera la sento",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Claudia",
                    avatar: "./img/avatar_6.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao Claudia, hai novità?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Non ancora",
                            status: "received",
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "Nessuna nuova, buona nuova",
                            status: "sent",
                        },
                    ],
                },
                {
                    name: "Federico",
                    avatar: "./img/avatar_7.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message:
                                "Fai gli auguri a Martina che è il suo compleanno!",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message:
                                "Grazie per avermelo ricordato, le scrivo subito!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Davide",
                    avatar: "./img/avatar_8.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message:
                                "Ciao, andiamo a mangiare la pizza stasera?",
                            status: "received",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message:
                                "No, l'ho già mangiata ieri, ordiniamo sushi!",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "OK!!",
                            status: "received",
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        selectContact(index) {
            this.activeIndex = index;
        },
        sendMessage(msg, date) {
            if (
                msg.length === 0 ||
                (msg.length > 0 && msg.trim().length === 0)
            ) {
                return;
            } else {
                this.contacts[this.activeIndex].messages.push({
                    date: date,
                    message: msg,
                    status: "sent",
                });
                this.newMsg = "";

                setTimeout(this.sendMessageBack, 1000);
                this.isWriting = true;
            }
        },

        visibleTimeStamp(date) {
            let subString = "";
            if (date.length === 19) {
                subString = date.substr(11, 5);
            } else {
                subString = date.toString().substr(16, 5);
            }
            return subString;
        },

        sendMessageBack() {
            const randomNum = Math.floor(Math.random() * this.answers.length);
            this.isWriting = false;
            this.contacts[this.activeIndex].messages.push({
                date: this.todayDate,
                message: this.answers[randomNum],
                status: "received",
            });
        },

        removeContacts() {
            this.contacts.forEach((contact) => {
                contact.visible = false;
            });
        },
        addContacts() {
            this.contacts.forEach((contact) => {
                contact.visible = true;
            });
        },

        addContactswhenSearching() {
            this.contacts.forEach((contact) => {
                if (
                    contact.name
                        .toLowerCase()
                        .includes(this.searchContact.toLowerCase())
                ) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },
        deleteMessage(index) {
            this.deleteAtIndex = index;
        },

        staysOpen() {
            this.isOpen = true;
        },

        closeAll() {
            this.isOpen = false;
            this.changeIcon = false;
            this.contacts.forEach((contact) => {
                contact.visible = true;
            });
        },
        swapIcons() {
            this.changeIcon = true;
        },
    },
}).mount("#app");
