class Player {
    constructor(data = {}) {
        this.id = data.id || '';
        this.coin = data.coin || 300000;
        this.cement = data.cement || 0;
        this.iron = data.iron || 0;
        this.timber = data.timber || 0;
        this.bigStone = data.bigStone || 0;
        this.crudeCoal = data.crudeCoal || 0;
        this.crudeOil = data.crudeOil || 0;
        this.crudeGold = data.crudeGold || 0;

        this.wood = data.wood || 100;
        this.stone = data.stone || 300;
        this.coal = data.coal || 200;
        this.oil = data.oil || 100;
        this.gold = data.gold || 200;

        this.land = data.land || [];
        this.factory = data.factory || [];
    }

    buySellGroverment(type, resource, amount, price) {
      if (type === "buy") {
          if (resource in this && this.coin >= price) {
              this[resource] += amount;
              this.coin -= price;
              return { success: true, message: "ซื้อสำเร็จ!", player: this };
          }
          return { success: false, message: "เงินไม่พอ หรือไม่มี resource นี้!", player: this };
      }
  
      if (type === "sell") {
          if (resource in this && this[resource] >= amount) {
              this[resource] -= amount;
              this.coin += price;
              return { success: true, message: "ขายสำเร็จ!", player: this };
          }
          return { success: false, message: "จำนวน resource ไม่เพียงพอ!", player: this };
      }
  
      return { success: false, message: "Invalid transaction type", player: this };
    }

    setOrder(type, resource, amount, price){
        if(type == "buy") {
            if(this.coin >= price){
                this.coin -= price;
                return { success: true, message: "ตั้งรับซื้อสำเร็จ!", player: this };
            }
            return { success: false, message: "จำนวน resource ไม่พอ!", player: this}
            
        }

        if(type == "sell") {
            if(resource in this && this[resource] >= amount) {
                this[resource] -= amount;
                return { success: true, message: "ตั้งขายสำเร็จ!", player: this };
            }
            return { success: false, message: "จำนวน resource ไม่พอ!", player: this}
        }

        return { success: false, message: "Invalid transaction type", player: this };
    }

    cancelOrder(type, resource, amount, price) {
        if(type == "buy") {
            this.coin += price;
            return { success: true, message: "cancel successfuly!", player: this };
        }

        if(type == "sell") {
            if(resource in this) {
                this[resource] += amount;
                return { success: true, message: "cancel successfuly!", player: this };
            }
            return { success: false,  message: "resource not found!" };
        }
        return { success: false, message: "Invalid transaction type", player: this };
    }
    
    addLand(landItem) {
        this.land.push(landItem);
    }

    addFactory(factoryItem) {
        this.factory.push(factoryItem);
    }
}

module.exports = Player;