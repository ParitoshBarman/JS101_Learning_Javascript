// 1st Methode ***************
let SalesObj={
    data:[],
  
    addSales: function(item,stock,original,discount=0){
    let obj={};
    obj.item=item;
    obj.stock=stock;
    obj.original=original;
    obj.discount=discount;
    obj.sale = original-(original*discount);
    obj.total = obj.sale*stock;
    this.data.push(obj);
     
  },
  calculateSalesTotals: function(){
    return this.data;
  }  
  }
  
  
  
  SalesObj.addSales("PS4 Pro",3,399.99);
  SalesObj.addSales("Xbox One X",1,499.99,0.1);
  SalesObj.addSales("Nintendo Switch",4,299.99);
  SalesObj.addSales("PS2 Console",1,299.99,0.8);
  SalesObj.addSales("Nintendo 64",2,199.99,0.65);
  
  console.log(SalesObj.calculateSalesTotals());
  
  
  
  
  
  
  
  
  
  
  
  // 2nd Methode ***************
  // function calculateSalesTotals(sales){
  //   let newArr = [];
  //   let obj = {};
    
  //   for(let el of sales){
  //     obj = {};
  //     obj.item = el.item;
  //     obj.stock = el.stock;
  //     obj.original = el.original;
      
  //     if(el.discount == undefined){
  //       obj.discount = 0;
  //     }
  //     else{
  //       obj.discount = el.discount
  //     }
  
  //     obj.sale = el.original-(el.original*obj.discount);
  //     obj.total = obj.sale*el.stock;
  
  //     newArr.push(obj)    
      
  //   }
  //   return newArr;
  // }
  
  
  // var sales = [
  //   { item: 'PS4 Pro', stock: 3, original: 399.99 },
  //   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  //   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  //   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  //   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  // ];
  
  
  
  // console.log(calculateSalesTotals(sales));