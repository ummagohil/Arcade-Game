// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (300 * dt); 
    if(this.x >= 505) {
      this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (){
    this.sprite = 'images/char-cat-girl.png';
    this.x = 200;
    this.y = 400;
};

// Handles the collision between player and bugs, and sends the player back to orignial position 
Player.prototype.update = function(){
    for (let i = 0; i < allEnemies.length; i++) {
    const enemy = allEnemies[i];
    if (enemy.y == this.y && enemy.x + 30 >= this.x - 50  && enemy.x - 30 <= this.x + 50) {
    this.x = 200;
    this.y = 400;
    }
  }
};

// Draw the player on the screen, required method for the game
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handles arrow key inputs of left, right, up
Player.prototype.handleInput = function (allowedKeys){
    if(allowedKeys == 'left' && this.x > 30){
        this.x -= 85;
    }
    else if(allowedKeys == 'down' && this.y < 400){
        this.y += 85;
    }
    else if(allowedKeys == 'up' && this.y > 0){
        this.y -= 85;
    }
    else if(allowedKeys == 'right' && this.x < 370){
        this.x += 85;
    }
    if (this.y < -20) {
        this.x = 200;
        this.y = 400;
        alert("you win");
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const enemy1 = new Enemy(-50, 60);
const enemy2 = new Enemy(-150, 145);
const enemy3 = new Enemy(-250, 230);
const enemy4 = new Enemy(-500, 100);
const enemy5 = new Enemy(-350, 145);
const enemy6 = new Enemy(-450, 230);
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
