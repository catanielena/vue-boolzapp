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
                        status: 'sent',
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
                visible: true,
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
                visible: true,
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
                visible: true,
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
        activeChatIndex: 0,
        contactsClickIndex: 0,
        typedMsg: "",
        searchInput:"",
        componentKey: 0
    },
    methods: {
        changeActiveChat: function(i) {
            this.activeChatIndex = i;
        },
        currentDate: function() {
            const d = new Date();
            const date = `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth()+1).toString().padStart(2, "0")}/${d.getFullYear()}`;
            const time = `${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}`;
            return `${date} ${time}`;
        },
        assignInputValue: function() {
            const lines = this.typedMsg.split("\n").filter(e => e!=="" && e!==" ");
            if(lines.length !== 0) {
                // input obj
                let msg = {
                    date: this.currentDate(),
                    message: this.typedMsg,
                    status: 'sent'
                };
                // reset input
                this.typedMsg= "";
                // print input obj
                this.contacts[this.activeChatIndex].messages.push(msg);
                setTimeout(() => {
                    // cpu message obj
                    let msgCpu = {
                        date: this.currentDate(),
                        message: 'Ok',
                        status: 'received'
                    };
                    // print cpu obj
                    this.contacts[this.activeChatIndex].messages.push(msgCpu);
                }, 1000);
            }
        },
        searchIn : function() {
            return this.contacts.filter(e => e.name.toLowerCase().includes(this.searchInput))
        },
        forceRerender() {
            this.componentKey += 1;  
        },
        prova: function(i) {
            this.contacts[this.activeChatIndex].messages[i].menu == 'hide' ? this.contacts[this.activeChatIndex].messages[i].menu = 'show' : this.contacts[this.activeChatIndex].messages[i].menu = 'hide'
        },
        deleteMsg: function(msgIndex) {
            this.contacts[this.activeChatIndex].messages.splice(msgIndex,1);
            this.contacts[this.activeChatIndex].messages[msgIndex].menu = false;
        }
    },
    created() {
            this.contacts.forEach(e => {
                e.messages.forEach((el) => el.menu= 'hide' )      
            });
        }
});
