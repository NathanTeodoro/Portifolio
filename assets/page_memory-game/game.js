let game = {
    
    lockmode:false,
    firstCard:null,
    secondCard:null,

    setCard: function (id){
        let card = this.cards.filter(card => card.id === id)[0]

        if (card.flipped || this.lockmode){
            return false;
        }
        if (!this.firstCard){
            this.firstCard = card;
            return true;
        
        }
        else{
            this.secondCard = card
            this.lockmode=true;
            return true 
        }
    }, 
    checkMatch : function(){
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCard : function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockmode = false;
    },

    parts : [
        '32-bits',
        '64-bits',
        'bios',
        'mouse',
        'keybord',
        'laptop',
        'net-cable',
        'processor', 
        'server',
        'usb',
        'webcam',
        'pc',
        'x86'
    ],
    
    cards : null,
     createCardsFromTecno : function(parts){
        this.cards = [];
        this.parts.forEach((part) =>{
            this.cards.push(this.createPairFromTec(part))
        })
    
        this.cards =  this.cards.flatMap(p=>p)
        this.shuffleCards()
        //return this.cards;
    },
    
    createPairFromTec : function(part){
        
        return [{
            id: this.createIdWithTech(part),
            icon:part,
            flipped:false,
        },{
            id: this.createIdWithTech(part),
            icon:part,
            flipped:false,
        }]
    },
    createIdWithTech : function(part){
        return part + parseInt(Math.random()*1000)
    },

    shuffleCards : function(cards){

        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0){
            randomIndex = Math.floor(Math.random()*currentIndex)
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
        
        }
     
}