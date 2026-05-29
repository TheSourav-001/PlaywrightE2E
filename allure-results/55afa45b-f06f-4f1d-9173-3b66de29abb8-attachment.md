# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Account\registration.spec.js >> Account page functionality test >> TC10: Validate Show/Hide Password functionality
- Location: tests\Account\registration.spec.js:103:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.lucide-eye')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - navigation [ref=e9]:
        - navigation [ref=e12]:
          - list [ref=e13]:
            - listitem [ref=e14]:
              - button "Shop" [ref=e15]:
                - text: Shop
                - img [ref=e16]
            - listitem [ref=e18]:
              - link "About us" [ref=e19] [cursor=pointer]:
                - /url: /page/about-us
      - link [ref=e22] [cursor=pointer]:
        - /url: /
        - img [ref=e23]
      - generic [ref=e27]:
        - link [ref=e29] [cursor=pointer]:
          - /url: "#"
          - img [ref=e30]
        - link [ref=e34] [cursor=pointer]:
          - /url: https://demo.evershop.io/account/login
          - img [ref=e35]
        - button "Shopping cart with 0 items" [ref=e40] [cursor=pointer]:
          - img [ref=e41]
  - main [ref=e45]:
    - navigation "breadcrumb" [ref=e48]:
      - list [ref=e49]:
        - listitem [ref=e50]:
          - link "Home" [ref=e51] [cursor=pointer]:
            - /url: /
        - listitem [ref=e52]:
          - img [ref=e53]
        - listitem [ref=e55]:
          - link "Create an account" [disabled] [ref=e56]
    - generic [ref=e58]:
      - generic [ref=e62]:
        - heading "Create an account" [level=1] [ref=e63]
        - paragraph [ref=e64]: Join us for exclusive offers and order tracking
        - group [ref=e66]:
          - generic [ref=e67]:
            - group [ref=e68]:
              - generic [ref=e69]:
                - text: Full Name
                - generic [ref=e70]: "*"
              - group [ref=e71]:
                - textbox "Full Name *" [ref=e72]:
                  - /placeholder: Full Name
                - group [ref=e73]:
                  - img [ref=e74]
            - group [ref=e77]:
              - generic [ref=e78]:
                - text: Email
                - generic [ref=e79]: "*"
              - group [ref=e80]:
                - textbox "Email *" [ref=e81]:
                  - /placeholder: Email
                - group [ref=e82]:
                  - img [ref=e83]
            - group [ref=e86]:
              - generic [ref=e87]:
                - text: Password
                - generic [ref=e88]: "*"
              - group [ref=e89]:
                - textbox "Password *" [active] [ref=e90]:
                  - /placeholder: Password
                  - text: sourav123
                - group [ref=e91]:
                  - img [ref=e92]
                - group [ref=e96]:
                  - button [ref=e97]:
                    - img [ref=e98]
            - button "Sign Up" [ref=e105]
      - generic [ref=e107]:
        - text: Already have an account?
        - link "Login" [ref=e108] [cursor=pointer]:
          - /url: https://demo.evershop.io/account/login
  - contentinfo [ref=e109]:
    - generic [ref=e111]:
      - generic [ref=e113]:
        - img [ref=e115]
        - img [ref=e120]
        - img "PayPal" [ref=e127]
      - generic [ref=e134]: © 2022 Evershop. All Rights Reserved.
    - region "Notifications alt+T"
```

# Test source

```ts
  1  | import {BasePage} from "./basePage";
  2  | 
  3  | export class Account extends BasePage {
  4  |     constructor(page) {
  5  |         super(page);
  6  | 
  7  |         this.accountIconLocator = this.page.locator('a[href="/account/login"]');
  8  |         this.accountLinkLocator = this.page.getByRole("link", { name: "Create an account" });
  9  |         this.fullnameInputLocator =  this.page.locator('#field-full_name');
  10 |         this.emailInputLocator = this.page.locator('#field-email');
  11 |         this.passwordInputLocator = this.page.locator('#field-password');
  12 |         this.clickOnEyeIconLocator = this.page.locator(".lucide-eye");
  13 |     }
  14 | 
  15 |     async clickOnAccountIcon() {
  16 |         await this.accountIconLocator.click();
  17 |     }
  18 |     async enterFullname(fullname) {
  19 |         await this.fullnameInputLocator.fill(fullname);
  20 |     }
  21 |     async enterEmailInput(email) {
  22 |         await this.emailInputLocator.fill(email);
  23 |     }
  24 |     async enterPasswordInput(password) {
  25 |         await this.passwordInputLocator.fill(password);
  26 |     }
  27 |     async clickOnEyeIcon() {
> 28 |         await this.clickOnEyeIconLocator.click();
     |                                          ^ Error: locator.click: Test timeout of 60000ms exceeded.
  29 |     }
  30 | }
```