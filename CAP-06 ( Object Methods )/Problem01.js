let obj = {
    length:50,
    width:70,
    area: function(){
      return this.length * this.width;
    
  },
    perimeter: function(){
      return 2*(this.length + this.width);
    }
  }
  
  
  
  console.log("Area:", obj.area());
  console.log("Perimeter:", obj.perimeter());