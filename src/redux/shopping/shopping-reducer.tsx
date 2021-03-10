import * as actionTypes from './shopping-types'

const shoppingState = {
    product:[{
        id:"1",
        image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title:"Europe Street beat",
        description:"www.instagram.com"
    },{
        id:"2",
        image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        title:"Europe Street beat",
        description:"www.instagram.com"
    }],
    cart:[],
    currentProduct:null
}


const shopReducer = (state:any = shoppingState , action:any  ) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return{

            };
        case actionTypes.DELETE_FROM_CART:
            return{

            };
        case actionTypes.INCREASE_QNT:
            return{

            };
        case actionTypes.SHOW_DETAILS:
            return{

            };
        default:
            return state
        
    }
}

export default shopReducer;