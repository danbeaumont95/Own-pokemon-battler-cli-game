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
    constructor(trainer1, trainer2, pokemon1, pokemon2) {
        this.trainer1 = trainer1;
        this.trainer2 = trainer2;
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.turn = pokemon1;
    }
    fight() {
        if (this.turn === this.pokemon1) {
            this.turn === this.pokemon2;
            if (this.pokemon1.strongAgainst === this.pokemon2.type) {
                this.pokemon2.health = this.pokemon2.health - (this.pokemon1.attackDamage * 1.25)
                if (this.pokemon2.health <= 0) {
                    return `Goodbye, you have been defeated`
                }
                else {
                    return `I will get you next time`
                }
            }
            else if (this.pokemon1.weakAgainst === this.pokemon2.type) {
                this.pokemon2.health = this.pokemon2.health - (this.pokemon1.attackDamage * 0.75)
                if (this.pokemon2.health <= 0) {
                    return `Goodbye, you have been defeated`
                }
                else {
                    return `I will get you next time`
                }
            }
            else {
                this.pokemon2.health = this.pokemon2.health - this.pokemon1.attackDamage;
                if(this.pokemon2.health <= 0) {
                    return "Goodbye, I have beaten you"
                }
                else {
                    return "I will get you next time"
                }
            }
        }
        else if (this.turn === this.pokemon2) {
            if(this.pokemon2.strongAgainst === this.pokemon1.type) {
                this.pokemon1.health = this.pokemon1.health - (this.pokemon2.attack * 1.25)
            
            if(this.pokemon1.health <= 0) {
                return "Goodbye, I have beaten you"
            }
            else {
                return "I will get you next time"
            }
        }
        else if(this.pokemon2.weakAgainst === this.pokemon1.type) {
            this.pokemon1.health = this.pokemon1.health - (this.pokemon2.attack * 0.75)
            if(this.pokemon1.health <=0) {
                return "Goodbye, I have beaten you"
            }
            else {
                return "I will get you next time"
            }
        }
        else {
            this.pokemon1.health = this.pokemon1.health - this.pokemon2.attack
            if(this.pokemon1.health <= 0) {
                return "Goodbye, I have beaten you"
            }
            else {
                return "I will get you next time"
            }
        }
        }
    }
}
const Charizard = new Pokemon (
'Charizard',
100,
20,
'Raaaaawr',
'Flamethrower',
'Fire'
)

const Blastoise = new Pokemon (
    'Blastoise',
    100,
    20,
    'Squirttt',
    'Hydro Cannon',
    'water'
)

const Venusaur = new Pokemon (
    'Venusaur',
    100,
    20,
    'Venusss',
    'Ripple',
    'grass'
)

const Pikachu = new Pokemon (
    'Pikachu',
    100,
    15,
    'Pika pika',
    'Lightning Bolt',
    'normal'
)

