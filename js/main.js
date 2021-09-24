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
        typedMsg: "",
        searchInput:"",
        componentKey: 0,
    },
    methods: {
        currentDate: function() {
            const d = new Date();
            const date = `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth()+1).toString().padStart(2, "0")}/${d.getFullYear()}`;
            const time = `${d.getHours()}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}`;
            return `${date} ${time}`;
        },
        assignInputValue: function() {
            const lines = this.typedMsg.split("\n").filter(e => e!=="" && e!==" ");
            if(lines.length !== 0) {
                // print input obj
                this.contacts[this.activeChatIndex].messages.push({
                    date: this.currentDate(),
                    message: this.typedMsg,
                    status: 'sent',
                    menu: 'hide'
                });
                // reset input
                this.typedMsg= "";
                setTimeout(() => {
                    // print cpu obj
                    this.contacts[this.activeChatIndex].messages.push({
                        date: this.currentDate(),
                        message: 'Ok',
                        status: 'received',
                        menu: 'hide'
                    })}, 1000);
            }
        },
        searchIn : function() {
            return this.contacts.filter(e => e.name.toLowerCase().includes(this.searchInput.toLowerCase()))
        },
        forceRerender() {
            this.componentKey += 1;  
        },
        deleteMsg: function(msgIndex) {
            var n = this.contacts[this.activeChatIndex].messages;
            n.splice(msgIndex,1);
            n[msgIndex].menu = 'hide';
            this.forceRerender()
        },
        voiceNote: function() {
            let recognition = new SpeechRecognition();
            recognition.start();
        }
    }, 
    created() {
            this.contacts.forEach(e => {
                e.messages.forEach((el) => el.menu= 'hide' )      
            });
        }
});
