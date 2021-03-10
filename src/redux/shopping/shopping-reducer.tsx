import * as actionTypes from './shopping-types'

const shoppingState = {
    product:[{
        itemID:"1",
        image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title:"Europe Street beat",
        description:"www.instagram.com"
    },{
        itemID:"2",
        image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title:"Europe Street beat",
        description:"www.instagram.com"
    }],
    cart:[],
    currentProduct:null
}


const shopReducer = (state:any = shoppingState , action:any  ) => {

    const inCart = state.cart.find((cartItem:any) => action.payload.itemID===cartItem.itemID) ? true : false

    switch(action.type){
        case actionTypes.ADD_TO_CART:
            //get the item data from the product array

            const product = state.product.find((item:any ) => item.itemID === action.payload.itemID)
            //if the item already exists in the cart increase the number
            //else add the item to the cart
            return{
                ...state,
                cart:inCart ? state.cart.map((cartItem:any)=>
                    cartItem.itemID === action.payload.itemID 
                    ? 
                    {...cartItem , qnt:cartItem.qnt + 1}
                    :cartItem
                )
                :
                [...state.cart, {...product, qnt:1}]

            };
        case actionTypes.DELETE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter((cartItem:any) => cartItem.itemID !== action.payload.itemID)
            };
        case actionTypes.INCREASE_QNT:
            return{
                ...state,
                cart:state.cart.find((cartItem:any) => cartItem.itemID == action.payload.itemID
                ?
                {...cartItem, qnt: action.payload.qnt }
                :cartItem
                )
            };
        case actionTypes.SHOW_DETAILS:
            return{
                ...state,
                currentProduct:action.payload.item 
            };
        default:
            return state
        
    }
}

export default shopReducer;