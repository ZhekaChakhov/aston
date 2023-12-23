import { $ } from "@wdio/globals";

import Page from "./page.ts";

class UserPage extends Page {
  public get layoutButton() {
    return $("#signup-btn");
  }

  public get favorites() {
    return $("#Favorites");
  }

  public get emailInput() {
    return $("aria/e-mail address");
  }

  public get passwordInput() {
    return $("aria/password");
  }

  public async signup() {
    await browser.pause(1000);
    (await this.layoutButton).click();
    (await this.emailInput).click();
    (await this.emailInput).setValue("brobrobro@vertide.mr");
    (await this.passwordInput).click();
    (await this.passwordInput).setValue("wwwwww");
    await browser.pause(1000);
    await browser.keys("Enter");
  }

  public open() {
    return super.open("/");
  }
}

export default new UserPage();
