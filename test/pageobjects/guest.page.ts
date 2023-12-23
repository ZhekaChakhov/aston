import { $ } from "@wdio/globals";

import Page from "./page.ts";

class GuestPage extends Page {
  public get searchBar() {
    return $("aria/Search characters...");
  }

  public get searchButton() {
    return $("#search-button");
  }

  public async search(text: string) {
    await this.searchBar.click();
    await this.searchBar.setValue(text);
    await browser.pause(1000);
    await this.searchButton.click();
  }

  public open() {
    return super.open("/");
  }
}

export default new GuestPage();
