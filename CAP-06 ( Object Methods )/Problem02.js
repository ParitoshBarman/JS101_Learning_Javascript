let ProductsCartObject = {
    data : [],
    addProduct : function(name, quantity, price){
      let obj = {name, quantity, price};
      this.data.push(obj);
    },
    total : function(){
      let sum = 0;
      for(let el of this.data){
        sum += el.quantity * el.price;
      }
      return sum;
    }
  }
  
  
  ProductsCartObject.addProduct("Rice", 2, 60);
  ProductsCartObject.addProduct("Dal", 3, 50);
  ProductsCartObject.addProduct("Salt", 1, 20);
  
  
  console.log(ProductsCartObject.total());