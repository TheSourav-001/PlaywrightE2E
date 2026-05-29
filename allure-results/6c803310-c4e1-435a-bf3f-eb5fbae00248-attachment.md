# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Account\registration.spec.js >> Registration page functionality test suite >> TC10: Validate Show/Hide Password functionality | Expected: User should be able to show or hide the password
- Location: tests\Account\registration.spec.js:101:3

# Error details

```
Error: locator.click: Error: strict mode violation: locator('button:has(svg)') resolved to 3 elements:
    1) <button tabindex="0" type="button" aria-disabled="false" aria-expanded="false" data-slot="navigation-menu-trigger" data-base-ui-navigation-menu-trigger="" class="focus-visible:ring-ring/50 rounded-md px-4 py-2 text-sm font-medium transition-all focus-visible:ring-[3px] focus-visible:outline-1 disabled:opacity-50 group/navigation-menu-trigger inline-flex h-9 items-center disabled:pointer-events-none outline-none group w-full md:w-auto justify-start md:justify-center bg-transparent hover:bg-transparent …>…</button> aka getByRole('button', { name: 'Shop', exact: true })
    2) <button type="button" aria-label="Shopping cart with 0 items" class="mini-cart-icon relative cursor-pointer ">…</button> aka getByRole('button', { name: 'Shopping cart with 0 items' })
    3) <button type="button" tabindex="-1" class="transition-colors">…</button> aka locator('#registerForm').getByRole('button').filter({ hasText: /^$/ })

Call log:
  - waiting for locator('button:has(svg)')

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
  - main [ref=e44]:
    - navigation "breadcrumb" [ref=e47]:
      - list [ref=e48]:
        - listitem [ref=e49]:
          - link "Home" [ref=e50] [cursor=pointer]:
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
        - link "Login" [ref=e107] [cursor=pointer]:
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
  12 |         this.clickOnEyeIconLocator = page.locator("button:has(svg)");
  13 |         //this.clickOnEyeIconLocator = this.page.locator('[type="button"]').last();
  14 |     }
  15 | 
  16 |     async clickOnAccountIcon() {
  17 |         await this.accountIconLocator.click();
  18 |     }
  19 |     async enterFullname(fullname) {
  20 |         await this.fullnameInputLocator.fill(fullname);
  21 |     }
  22 |     async enterEmailInput(email) {
  23 |         await this.emailInputLocator.fill(email);
  24 |     }
  25 |     async enterPasswordInput(password) {
  26 |         await this.passwordInputLocator.fill(password);
  27 |     }
  28 |     async clickOnEyeIcon() {
> 29 |         await this.clickOnEyeIconLocator.click();
     |                                          ^ Error: locator.click: Error: strict mode violation: locator('button:has(svg)') resolved to 3 elements:
  30 |     }
  31 | }
```