# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Account\registration.spec.js >> Account page functionality test >> TC10: Validate Show/Hide Password functionality
- Location: tests\Account\registration.spec.js:105:3

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
              - link "About us" [ref=e19]:
                - /url: /page/about-us
      - link [ref=e22]:
        - /url: /
        - img [ref=e23]
      - generic [ref=e27]:
        - link [ref=e29]:
          - /url: "#"
          - img [ref=e30]
        - link [ref=e34]:
          - /url: https://demo.evershop.io/account/login
          - img [ref=e35]
        - button "Shopping cart with 0 items" [ref=e40] [cursor=pointer]:
          - img [ref=e41]
  - main [ref=e44]:
    - navigation "breadcrumb" [ref=e47]:
      - list [ref=e48]:
        - listitem [ref=e49]:
          - link "Home" [ref=e50]:
            - /url: /
        - listitem [ref=e51]:
          - img [ref=e52]
        - listitem [ref=e54]:
          - link "Create an account" [disabled] [ref=e55]
    - generic [ref=e57]:
      - generic [ref=e61]:
        - heading "Create an account" [level=1] [ref=e62]
        - paragraph [ref=e63]: Join us for exclusive offers and order tracking
        - group [ref=e65]:
          - generic [ref=e66]:
            - group [ref=e67]:
              - generic [ref=e68]:
                - text: Full Name
                - generic [ref=e69]: "*"
              - group [ref=e70]:
                - textbox "Full Name *" [ref=e71]:
                  - /placeholder: Full Name
                - group [ref=e72]:
                  - img [ref=e73]
            - group [ref=e76]:
              - generic [ref=e77]:
                - text: Email
                - generic [ref=e78]: "*"
              - group [ref=e79]:
                - textbox "Email *" [ref=e80]:
                  - /placeholder: Email
                - group [ref=e81]:
                  - img [ref=e82]
            - group [ref=e85]:
              - generic [ref=e86]:
                - text: Password
                - generic [ref=e87]: "*"
              - group [ref=e88]:
                - textbox "Password *" [active] [ref=e89]:
                  - /placeholder: Password
                  - text: sourav123
                - group [ref=e90]:
                  - img [ref=e91]
                - group [ref=e95]:
                  - button [ref=e96]:
                    - img [ref=e97]
            - button "Sign Up" [ref=e104]
      - generic [ref=e106]:
        - text: Already have an account?
        - link "Login" [ref=e107]:
          - /url: https://demo.evershop.io/account/login
  - contentinfo [ref=e108]:
    - generic [ref=e110]:
      - generic [ref=e112]:
        - img [ref=e114]
        - img [ref=e119]
        - img "PayPal" [ref=e126]
      - generic [ref=e133]: © 2022 Evershop. All Rights Reserved.
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