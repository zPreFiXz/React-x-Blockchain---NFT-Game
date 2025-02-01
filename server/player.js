class Player {
    constructor(data = {}) {
        this.id = data.id || '';
        this.coin = data.coin || 0;
        this.timber = data.timber || 0;
        this.bigStone = data.bigStone || 0;
        this.crudeCoal = data.crudeCoal || 0;
        this.crudeOil = data.crudeOil || 0;
        this.crudeGold = data.crudeGold || 0;

        this.wood = data.wood || 0;
        this.stone = data.stone || 0;
        this.coal = data.coal || 0;
        this.oil = data.oil || 0;
        this.gold = data.gold || 0;

        this.land = data.land || [];
        this.factory = data.factory || [];
    }

    addResource(resource, amount) {
        if (this.hasOwnProperty(resource)) {
            this[resource] += amount;
        } else {
            console.warn(`Resource ${resource} does not exist.`);
        }
    }

    subtractResource(resource, amount) {
        if (this.hasOwnProperty(resource)) {
            if (this[resource] >= amount) {
                this[resource] -= amount;
            } else {
                console.warn(`Not enough ${resource} available.`);
            }
        } else {
            console.warn(`Resource ${resource} does not exist.`);
        }
    }

    addLand(landItem) {
        this.land.push(landItem);
    }

    addFactory(factoryItem) {
        this.factory.push(factoryItem);
    }
}

module.exports = Player;