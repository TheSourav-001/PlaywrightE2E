import { test, expect } from "@playwright/test";

import { Search } from "../pages/Search Page/searchProduct";
import { ProductDetlais } from "../pages/Product validation/productDetlais";
import { Addtocart } from "../pages/Add to cart/addToCart";
import { Checkout } from "../pages/Checkout/checkout";
import { OrderSuccess } from "../pages/order success/orderSuccessPage";
import { Logout } from "../pages/Logout/logout";

import { checkoutData } from "../data/checkoutData";
import { products } from "../data/products";

test.use({
  storageState: "playwright/.auth/user.json",
});

test.describe("Complete E2E Journey", () => {
  test("Search → Product → Cart → Checkout → Order Success → Logout", async ({
    page,
  }) => {
    const searchPage = new Search(page);
    const productPage = new ProductDetlais(page);
    const cartPage = new Addtocart(page);
    const checkoutPage = new Checkout(page);
    const orderSuccessPage = new OrderSuccess(page);
    const logoutPage = new Logout(page);

    const product = products[0];

    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });

    await searchPage.clickSearchIcon();
    await searchPage.clickOnSearchBox(product.name);

    await expect(
      page.getByText(product.name).first()
    ).toBeVisible();

    await page.goto(product.url, {
      waitUntil: "domcontentloaded",
    });

    await productPage.verifyProductName(product.name);
    await productPage.verifyProductPrice();
    await productPage.verifyProductSku();
    await productPage.verifyProductDescription();
    await productPage.verifyAddToCartButton();

    try {
      await productPage.verifyProductColor();
      await productPage.selectRandomColor();
    } catch {
      console.log("No color variant available");
    }

    const currentProductNameRaw = await productPage.productName.textContent();
    const finalProductName = currentProductNameRaw ? currentProductNameRaw.trim() : product.name;

    const quantity = 2;
    await productPage.productQuantity.fill(
      quantity.toString()
    );

    await expect(
      productPage.productQuantity
    ).toHaveValue(quantity.toString());

    await productPage.clickButton("ADD TO CART");
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    
    await page.goto("/cart", {
      waitUntil: "domcontentloaded",
    });

    await expect(
      page.getByText("Your cart is empty!")
    ).toHaveCount(0);

    await cartPage.verifyCartNotEmpty();
    await cartPage.verifyCheckoutButton();
    await cartPage.verifyProductNames();
    
    await expect(page.getByText(finalProductName).first()).toBeVisible({ timeout: 15000 });

    await cartPage.clickButton("CHECKOUT");
    await expect(page).toHaveURL(/checkout/);
    
    await page.waitForLoadState("networkidle");

    await checkoutPage.fillShippingAddress(
      checkoutData.fullName,
      checkoutData.telephone,
      checkoutData.address,
      checkoutData.address2,
      checkoutData.city,
      checkoutData.postcode
    );

    await checkoutPage.selectCountry(checkoutData.country);
    await page.waitForTimeout(1500); 
    await checkoutPage.selectProvince(checkoutData.province);

    await checkoutPage.selectSameBillingAddress();

    await checkoutPage.postCodeInput.click();
    await checkoutPage.postCodeInput.press('Tab');
    
    const defaultShippingText = page.getByText('Available shipping methods will appear once you provide your address details');
    await expect(defaultShippingText).toBeHidden({ timeout: 20000 });
    await page.waitForLoadState("networkidle"); 

    await expect(checkoutPage.basicShippingMethod).toBeVisible({ timeout: 15000 });
    await checkoutPage.basicShippingMethod.click();
    
    await page.waitForLoadState("networkidle"); 
    await page.waitForTimeout(2000);

    const codOption = page.getByText('Cash On Delivery', { exact: true });
    await expect(codOption).toBeVisible({ timeout: 15000 });
    await codOption.click();

    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);

    const placeOrderBtn = page.getByRole("button", { name: "Place Order" });
    await expect(placeOrderBtn).toBeEnabled({ timeout: 15000 });
    await placeOrderBtn.click();
    
    await page.waitForURL(
      "**/checkout/success**",
      {
        timeout: 60000,
      }
    );

    await orderSuccessPage.verifyCheckoutSuccessBreadcrumb();
    await orderSuccessPage.verifyOrderNumber();
    await orderSuccessPage.verifyThankYouMessage();
    
    await expect(orderSuccessPage.productName.first()).toBeVisible();
    await expect(orderSuccessPage.productImage.first()).toBeVisible();
    
    await orderSuccessPage.verifyTotalAmount();
    await orderSuccessPage.verifyContinueShoppingButton();

    await page.goto("/account", {
      waitUntil: "domcontentloaded",
    });

    await expect(
      logoutPage.logoutButton
    ).toBeVisible();

    await logoutPage.clickOnLogoutButton();

    await page.waitForURL("**/account/login", { timeout: 15000 });
    await expect(page).toHaveURL(
      /account\/login/
    );
  });
});