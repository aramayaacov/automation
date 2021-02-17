import { PRODUCTSPAGE } from '../../fixtures/constants/selectors';
import GeneralFunctions from '../../fixtures/constants/functions';
const generalFunctions = new GeneralFunctions();

class ProductsPage {

    randomAddItemAndClick() {
        const item_index = generalFunctions.randomNumberGenerator(5);
        cy.get(PRODUCTSPAGE.LIST_OF_ADD_TO_CART_BUTTON).eq(item_index).click()
        cy.get(PRODUCTSPAGE.LIST_OF_ITEMS).eq(item_index).click()
    }

    clickRandomItem() {
        const item_index = generalFunctions.randomNumberGenerator(5);
        cy.get(PRODUCTSPAGE.LIST_OF_ITEMS).eq(item_index).click()
    }

    clickRandomAddCart(itemsNum) {
        let number = 5;
        for (let i = 0; i < itemsNum; i++) {
            const ADD_BUTTON_INDEX = generalFunctions.randomNumberGenerator(number);
            cy.get(PRODUCTSPAGE.LIST_OF_ADD_TO_CART_BUTTON).eq(ADD_BUTTON_INDEX).click()
            number -= 1;
        }
    }

    verifyIfSortedByName(elementToCheck, textToCheck) {
        cy.get(elementToCheck).contains(textToCheck);
    }

    verifyIfSortedByLowPrice() {
        let bool = false;
        cy.get(PRODUCTSPAGE.FIRST_ITEM_PRICE_SORT).invoke('text').then((price) => {
            const PRICE_OF_FIRST_ITEM = +(price.slice(1, price.length));
            cy.get(PRODUCTSPAGE.LAST_ITEM_PRICE_SORT).invoke('text').then((price) => {
                const PRICE_OF_LAST_ITEM = +(price.slice(1, price.length));
                if (PRICE_OF_FIRST_ITEM < PRICE_OF_LAST_ITEM) {
                    bool = true;
                }
                expect(bool).to.be.true;
            })
        })
    };

    verifyIfSortedByHighPrice() {
        let bool = false;
        cy.get(PRODUCTSPAGE.FIRST_ITEM_PRICE_SORT).invoke('text').then((price) => {
            const PRICE_OF_FIRST_ITEM = +(price.slice(1, price.length));
            cy.get(PRODUCTSPAGE.LAST_ITEM_PRICE_SORT).invoke('text').then((price) => {
                const PRICE_OF_LAST_ITEM = +(price.slice(1, price.length));
                if (PRICE_OF_FIRST_ITEM > PRICE_OF_LAST_ITEM) {
                    bool = true;
                }
                expect(bool).to.be.true;
            })
        })
    };


    sortItemsA_Z() {
        cy.get(PRODUCTSPAGE.LIST_OF_SORT_OPTIONS).select(PRODUCTSPAGE.SORT_A_Z);
        this.verifyIfSortedByName(PRODUCTSPAGE.FIRST_ELEMENT_OF_SORT, PRODUCTSPAGE.TEXT_CHECK_A_Z)
    }

    sortItemsZ_A() {
        cy.get(PRODUCTSPAGE.LIST_OF_SORT_OPTIONS).select(PRODUCTSPAGE.SORT_Z_A);
        this.verifyIfSortedByName(PRODUCTSPAGE.FIRST_ELEMENT_OF_SORT, PRODUCTSPAGE.TEXT_CHECK_Z_A)
    }

    sortItemsL_H() {
        cy.get(PRODUCTSPAGE.LIST_OF_SORT_OPTIONS).select(PRODUCTSPAGE.SORT_L_H);
        this.verifyIfSortedByLowPrice();
    }

    sortItemsH_L() {
        cy.get(PRODUCTSPAGE.LIST_OF_SORT_OPTIONS).select(PRODUCTSPAGE.SORT_H_L);
        this.verifyIfSortedByHighPrice();
    }

    verifyUrlHomePage() {
        generalFunctions.generalAssert(PRODUCTSPAGE.STRING_FOR_URL_PRODUCTS);
    }
}
export default ProductsPage;