const app = new Vue ({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: false,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: false,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: false,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        activeChat :[],
        typedMsg: ""
    },
    methods: {
        changeActiveChat: function(i) {
            this.activeChat= {};
            this.contacts.forEach((e) => e.visible = false);
            this.activeChat = this.contacts.filter((e, index) => {
                if(index==i) {
                    e.visible = true;
                    return {
                        ...e
                    }
                }
            });
        },
        currentDate: function() {
            const d = new Date();
            const date = `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth()+1).toString().padStart(2, "0")}/${d.getFullYear()}`;
            const time = `${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}`;
            return `${date} ${time}`;
        },
        assignInputValue: function() {
            // input obj
            let msg = {
                date: this.currentDate(),
                message: this.typedMsg,
                status: 'sent'
            };
            // reset input
            this.typedMsg= "";
            // print input obj
            this.activeChat[0].messages.push(msg);
            setTimeout(() => {
                // cpu message obj
                let msgCpu = {
                    date: this.currentDate(),
                    message: 'Ok',
                    status: 'received'
                };
                // print cpu obj
                this.activeChat[0].messages.push(msgCpu);
            }, 1000);
        },
        getValue: function(value) {
            return value
        }
    },
    created: function() {
        this.activeChat.push(this.contacts[0])
    },
    // mounted: {
    //     calcHeight: function(value) {
    //         let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    //         // min-height + lines x line-height + padding + border
    //         let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    //         return newHeight;
    //     }
    // }
});
