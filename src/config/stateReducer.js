  
export default function (state, action) {
    switch(action.type) {
        case "setLoggedInUser": {
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case 'setAdmin':
			return {
				...state,
				adminUser: action.data,
			};
        case "setGigs": {
            return {
                ...state,
                gigs: action.data
            }
        }
        case "addGig":
            return {
                ...state,
                gigs: [action.data, ...state.gigs]
            }
        case "updateGig":
            return {
                ...state,
                gigs: action.data
            }
        case "deleteGig":
            const updatedGig = state.gigs.filter((gig) => gig._id !== parseInt(action.data))
            return {
                ...state,
                gigs: updatedGig
            }
        default: 
            return state
    }
}