

const { createSlice, nanoid } = require("@reduxjs/toolkit")

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
const initialState=
{
    cart:savedCart}

export const slice=createSlice({
name:"todo",
initialState,
reducers:{
    addToCart:(state,action)=>{
       const arr=JSON.parse(JSON.stringify(state));
    //    console.log(state);
       
   const find=state.cart.find((curr)=>{
    // console.log(curr.id,action.payload.id);
    
    return curr.id==action.payload.id
   })
console.log(find);

if(!find){
      const cart=   {
            id:action.payload.id,
            url:action.payload.url,
            name:action.payload.name,
            price:action.payload.price,
            quantity:action.payload.quantity
        

     }

     
     

        state.cart.push(cart);
        localStorage.setItem('cart',JSON.stringify(state.cart))
}else{
    find.quantity+=1;

       localStorage.setItem('cart',JSON.stringify(state.cart))
}

    },

increment:(state,action)=>{
const find=state.cart.find((curr)=>{
    return curr.id==action.payload
})
    
if(find){

   find.quantity+=1 
}


},


decrement:(state,action)=>{
    const find=state.cart.find((curr)=>{
    return curr.id==action.payload
})

if(find){
    find.quantity>0?find.quantity-=1:0
}

},

remove:(state,action)=>{
    const filter=state.cart.filter((curr)=>{
        return curr.id!==action.payload
    })
// console.log(JSON.parse(JSON.stringify(filter)));
state.cart=filter
   localStorage.setItem("cart",JSON.stringify(filter))
}
,

removeAll:(state,action)=>{
    state.cart=[],
    localStorage.removeItem("cart")
}
}
})






export const {addToCart,increment,decrement,remove,removeAll}=slice.actions;
export default slice.reducer
