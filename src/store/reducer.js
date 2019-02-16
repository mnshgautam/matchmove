const initialState = {
    newProduct: {
        title: '',
        category: '',
        brand: '',
        color: ''
    },
    productsList: JSON.parse(localStorage.getItem('itemsList')) || [],
    sortClass: '',
    sortType: '',
    filter: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDPRODUCT':
            action.event.preventDefault();
            let product = state.newProduct;

            let list = [...state.productsList];
            list.push(product);

            // saving in localstorage
            localStorage.setItem('itemsList', JSON.stringify(list));

            return {
                ...state,
                newProduct: {
                    title: '',
                    category: '',
                    brand: '',
                    color: ''
                },
                productsList: list
            }

        case 'INPUTCHANGE':
            let temp = { ...state.newProduct };
            temp[action.event.target.name] = action.event.target.value;

            return {
                ...state,
                newProduct: temp
            }

        case 'ON_SORT':
            let unSortedList = [...state.productsList];
            let updatedSortClasses = '';
            let updatedSortType = '';


            if (state.sortType === '' || state.sortType === 'desc') {
                updatedSortClasses = "ascending sorted";
                updatedSortType = 'asc';
            } else {
                updatedSortClasses = "descending sorted";
                updatedSortType = 'desc';
            }

            let sortedList = unSortedList.sort((obj1, obj2) => {
                if (updatedSortType === 'asc') {
                    if (obj1[action.column] < obj2[action.column]) return -1;
                    else if (obj1[action.column] > obj2[action.column]) return 1;
                    return 0;
                } else {
                    if (obj1[action.column] < obj2[action.column]) return 1;
                    else if (obj1[action.column] > obj2[action.column]) return -1;
                    return 0;
                }
            });

            return {
                ...state,
                sortClass: updatedSortClasses,
                sortType: updatedSortType,
                productsList: sortedList
            }

        case 'ON_FILTER':
            let filterValue = action.filter.toLowerCase();
            let filterColumn = action.filterColumn;
            let unFilteredList = JSON.parse(localStorage.getItem('itemsList')) || [];

            let filteredList = unFilteredList.filter((obj) => {
                return obj[filterColumn].toLowerCase().indexOf(filterValue) > -1;
            });

            return {
                ...state,
                filter: filterValue,
                productsList: filteredList
            }

        default:
            return {
                ...state
            }

    }
}

export default reducer;