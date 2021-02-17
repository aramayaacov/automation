export const LOGIN = {
    USERNAME_INPUT: '#user-name',
    PASSWORD_INPUT: '#password',
    LOGIN_BUTTON: '#login-button',
    standard_username: 'standard_user',
    PASSWORD: 'secret_sauce',
    STRING_FOR_URL_LOGIN: 'index'
}

export const BASEPAGE = {
    MENU_BUTTON: '.bm-burger-button > button',
    INVENTORY_BUTTON: '#inventory_sidebar_link',
    ABOUT_BUTTON: '#about_sidebar_link',
    LOGOUT_BUTTON: '#logout_sidebar_link',
    RESET_DATA_BUTTON: '#reset_sidebar_link',
    CART_BUTTON: '.svg-inline--fa',
    STRING_FOR_TITLE_ABOUT: 'Cross Browser Testing, Selenium Testing, Mobile Testing | Sauce Labs'
}

export const PRODUCTSPAGE = {
    LIST_OF_ITEMS: '.inventory_item .inventory_item_name',
    LIST_OF_ADD_TO_CART_BUTTON: '.inventory_item .btn_primary',
    LIST_OF_SORT_OPTIONS: '.product_sort_container',
    STRING_FOR_URL_PRODUCTS: 'inventory',
    FIRST_ELEMENT_OF_SORT: '.inventory_list > .inventory_item:first-child',
    TEXT_CHECK_A_Z: 'Sauce Labs Backpack',
    TEXT_CHECK_Z_A: 'Test.allTheThings() T-Shirt (Red)',
    FIRST_ITEM_PRICE_SORT: '.inventory_list > .inventory_item:first-child > .pricebar >.inventory_item_price',
    LAST_ITEM_PRICE_SORT: '.inventory_list > .inventory_item:last-child > .pricebar >.inventory_item_price',
    SORT_A_Z: 'az',
    SORT_Z_A: 'za',
    SORT_L_H: 'lohi',
    SORT_H_L: 'hilo'
}

export const ITEMPAGE = {
    ADD_TO_CART_BUTTON: '.btn_primary',
    REMOVE_FROM_CART_BUTTON: '.btn_secondary',
    BACK_BUTTON: '.inventory_details_back_button'
}

export const CARTPAGE = {
    CONTINUE_SHOPPING_BUTTON: '.cart_footer > .btn_secondary',
    CHECKOUT_BUTTON: '.btn_action',
    LIST_OF_ITEMS: '.cart_list .cart_item',
    REMOVE_FROM_CART_BTN: '.cart_item .btn_secondary',
    STRING_FOR_URL_CART: 'cart'
}

export const CHECKOUTINFO = {
    FIRSTNAME_INPUT: '[data-test=firstName]',
    LASTNAME_INPUT: '[data-test=lastName]',
    POSTALCODE_INPUT: '[data-test=postalCode]',
    CANCEL_BUTTON: '.cart_cancel_link',
    CONTINUE_BUTTON: '.btn_primary',
    STRING_FOR_URL_INFO: 'checkout-step-one'
}

export const CHECKOUTOVERVIEW = {
    FINISH_BUTTON: '.btn_action',
    FINAL_PRICE: '.summary_total_label',
    STRING_FOR_FINAL_URL: 'checkout-complete'
}