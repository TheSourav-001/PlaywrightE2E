import { test, expect } from "@playwright/test";
import { Addtocart } from "../../pages/Add to cart/addToCart";

test.describe("Add To Cart page functionality test suite", () => {

    let addtocart;

    test.beforeEach(async ({ page }) => {
        addtocart = new Addtocart(page);

        await page.goto("/cart", {
            waitUntil: "domcontentloaded",
            timeout: 60000,
        });
    });

    test("TC01: Verify shopping cart page title | Expected: Shopping cart title should be visible", async () => {

        await addtocart.verifyPageTitle();
    });

    test("TC02: Verify product names | Expected: Product names should be visible", async () => {

        await addtocart.verifyProductNames();
    });

    test("TC03: Verify product images | Expected: Product images should be visible", async () => {

        await addtocart.verifyProductImages();
    });

    test("TC04: Verify product colors | Expected: Product colors should be visible", async () => {

        await addtocart.verifyProductColors();
    });

    test("TC05: Verify product quantity | Expected: Product quantity should be visible", async () => {

        await addtocart.verifyProductQuantity();
    });

    test("TC06: Verify remove buttons | Expected: Remove button should be visible for every product", async () => {

        await addtocart.verifyRemoveButtons();
    });

    test("TC07: Verify subtotal section | Expected: Subtotal should be visible", async () => {

        await addtocart.verifySubTotalVisible();
    });

    test("TC08: Verify total section | Expected: Total should be visible", async () => {

        await addtocart.verifyTotalVisible();
    });

    test("TC09: Verify checkout button | Expected: Checkout button should be visible and enabled", async () => {

        await addtocart.verifyCheckoutButton();
    });

    test("TC10: Verify product price calculation | Expected: Product total should equal unit price × quantity", async () => {

        await addtocart.verifyPriceCalculation();
    });

    test("TC11: Verify complete cart page | Expected: All cart page components should work correctly", async () => {

        await addtocart.verifyCartPage();
    });

       test("TC12: Verify cart is not empty | Expected: Cart should contain at least one product", async () => {

    await addtocart.verifyCartNotEmpty();
});

test("TC13: Verify product name | Expected: Product name should be visible", async () => {

    await addtocart.verifyProductNames();
});

test("TC14: Verify remove functionality | Expected: Product should be removed successfully", async () => {

    await addtocart.removeFirstProduct();
});

test("TC15: Verify checkout navigation | Expected: User should be redirected to checkout page", async () => {

    await addtocart.verifyCheckoutNavigation();
});

test("TC16: Verify cart persistence after reload | Expected: Product should remain in cart after page refresh", async () => {

    await addtocart.verifyCartPersistence();
  });

  test("TC17: Click CHECK OUT Button", async () => {

    await addtocart.clickButton("CHECKOUT");
  });
});