var game = {
                gameName: "斗地主",
                /*所有的玩家*/
                players: [new Player("吕布"), new Player("貂蝉"), new Player("关羽")],
                /*这个游戏使用的poker道具*/
                poker: new Poker(),
                /*给当前游戏的所有玩家发牌*/
                sendPoker: function() {
                        // 先洗牌
                        this.poker.shuffle();
                        //把牌一张一张的分给每个玩家
                        for(var i = 0; i < 51; i++){
                                var card = this.poker.cards[i];
                                this.players[i % 3].cards.push(card);
                        }
                },
                /*这个方法是游戏的入口*/
                startGame : function () {
                        //先发牌
                        this.sendPoker();
                        //在页面中显示每个人的牌
                        
                }
                
        }
/*启动游戏·*/
game.startGame();


        /*可以创建玩家对象的构造函数*/
function Player(playerName) {
        this.playerName = playerName;
        /*玩家手中的牌，只有当游戏发牌之后才会有值*/
        this.cards = [];
}
/*扑克牌*/
function Poker() {
        /*一副扑克中card的数量*/
        this.cardCount = 54;
        /*代表一副扑克中的所有的card*/
        this.cards = [];
        /*用一个临时的局部变量存储表示这个poker的数组，为了在后面的自执行函数中执行*/
        var tempCards = this.cards;
        /*这是一个自执行函数：给扑克初始化每张card*/
        (function() {
                var huases = ["♠", "♥", "♣", "♦"];
                var points = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
                for(var i = 0; i < 4; i++) {
                        for(var j = 0; j < 13; j++) {
                                var card = new Card(huases[i], points[j]);
                                tempCards.push(card);
                        }
                }
                tempCards.push(new Card("", "大王"));
                tempCards.push(new Card("", "小王"));

        }());
        /*这副牌的洗牌的功能*/
        this.shuffle = function() {
                for(i = 0; i < 100; i++){
                        //生成两个随机的0-53的整数. 表示pocke中的card的下标
                        var num1 = parseInt(Math.random() * 54);
                        var num2 = Math.floor(Math.random() * 54);
                        var card = this.cards[num1];
                        this.cards[num1] = this.cards[num2];
                        this.cards[num2] = card; 
                        
                }
                /*this.cards.sort(function (a, b) {
                        return Math.random() > 0.5 ? 1 : -1;
                });*/
                
        }
}

function Card(huase, point) {
        this.huase = huase;
        this.point = point;
        this.toString = function () {
                return this.huase + this.point;
        }
}
