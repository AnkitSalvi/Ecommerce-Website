import * as actionTypes from './shopping-types'
import { ShopState, Product, Cart } from '../../Model/ReduxShopState';


const shoppingState:ShopState = {
    product:[{
        itemID:"1",
        image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title:"Europe Street beat",
        description:"www.instagram.com",
        price:10
    },{
        itemID:"2",
        image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title:"Europe Street beat",
        description:"www.instagram.com",
        price:20
    },{
        itemID:"3",
        image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title:"Europe Street beat",
        description:"www.instagram.com",
        price:20
    },{
        itemID:"4",
        image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title:"Europe Street beat",
        description:"www.instagram.com",
        price:20
    }],
    cart:[],
    currentProduct:null
}


const shopReducer = (state:ShopState = shoppingState , action:any  ):ShopState => {

    const inCart = state.cart.find((cartItem:any) => action.payload.itemID===cartItem.itemID) ? true : false

    switch(action.type){
        case actionTypes.ADD_TO_CART:
            //get the item data from the product array

            const product = state.product.find((item:Product ) => item.itemID === action.payload.itemID)
            //if the item already exists in the cart increase the number
            //else add the item to the cart
            const cart:Cart[] = inCart ? state.cart.map((cartItem:any)=>cartItem.itemID === action.payload.itemID 
            ? 
            {...cartItem , qnt:cartItem.qnt + 1}
            :cartItem
        )
        :
        [...state.cart, {...product, qnt:1}]
            return{
                ...state,
                cart:cart

            };
        case actionTypes.DELETE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter((cartItem:Cart) => cartItem.itemID !== action.payload.itemID)
            };
        case actionTypes.INCREASE_QNT:
            return{
                ...state,
                cart:state.cart.map((cartItem:Cart) => cartItem.itemID === action.payload.itemID
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