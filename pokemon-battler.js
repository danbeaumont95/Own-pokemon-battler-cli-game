class Pokemon {
    constructor(name, health, attackDamage, sound, move, type) {
        this.name = name;
        this.health = health;
        this.attackDamage = attackDamage;
        this.sound = sound;
        this.move = move;

        if (!type) {
            this.type = 'normal'
        }
        else {
            this.type = type;
        }
        if (this.type === 'grass') {
            this.strength = 'grass';
            this.strongAgainst = 'water';
            this.weakAgainst = 'fire';
        }
        else if (this.type === 'water') {
            this.strength = 'water';
            this.strongAgainst = 'fire';
            this.weakAgainst = 'grass';
        }
        else if (this.type === 'fire') {
            this.strength = 'fire';
            this.strongAgainst = 'grass';
            this.weakAgainst = 'water';
        }
        else {
            this.strength === 'none';
        }
    }
    sound() {
        return this.sound;
    }
    useMoves() {
        return this.move;
    }
}

class Trainer {
    constructor(name, store) {
        this.name = name;
        this.store = store;
        this.quantity = 0;
        this.myPokemon = {};
    }
    catch(testPokemon) {
        this.quantity++;
        return (this.myPokemon[this.quantity] = testPokemon);
    }
}

class Battle {
    
}