//액션 type 선언
const APPEND = 'address/APPEND' as const;
const REMOVE = 'address/REMOVE' as const;
const CHANGE = 'address/CHANGE' as const;

//액션 생성 함수 선언
export const append = (fullAddress: string, basicAddress: string) => ({ type: APPEND, fullAddress, basicAddress });
export const remove = (id: number) => ({ type: REMOVE, id });
export const change = (id: number) => ({ type: CHANGE, id });

//리듀서 type 지정
type AddressAction =
    | ReturnType<typeof remove>
    | ReturnType<typeof append>
    | ReturnType<typeof change>;

export type addressType = {
    fullAddress: string;
    basicAddress: string;
    id: number;
}

type AddressState = {
    presentAddress: addressType | null;
    recentAddresses: addressType[];
}

const initialState: AddressState = {
    presentAddress: null,
    recentAddresses: [],
};

//리듀서
function Address(state: AddressState = initialState, action: AddressAction): AddressState {
    switch (action.type) {
        case REMOVE:
            return { ...state, presentAddress: state.presentAddress !== null && state.presentAddress?.id === action.id ? null : state.presentAddress, recentAddresses: state.recentAddresses.filter(val => val.id !== action.id) }
        case APPEND:
            const id = Math.max(...state.recentAddresses.map(val => val.id));
            const newAddress = { fullAddress: action.fullAddress, basicAddress: action.basicAddress, id: id === -Infinity ? 0 : id + 1 }
            return { ...state, recentAddresses: state.recentAddresses.concat(newAddress), presentAddress: newAddress }
        case CHANGE:
            let adr: addressType | null = null;
            for (let i = 0; i < state.recentAddresses.length; i++) {
                if (state.recentAddresses[i].id === action.id) adr = state.recentAddresses[i];
            }
            return { ...state, presentAddress: adr }
        default:
            return state;
    }
}

export default Address;