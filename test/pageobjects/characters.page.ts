import { $ } from "@wdio/globals";

import Page from "./page.ts";

class CharactersPage extends Page {
  public get loader() {
    return $("#loader");
  }

  public get characterList() {
    return $("#character-list");
  }

  public get characterCards() {
    return browser.react$$("CharacterCard");
  }

  public async loadData() {
    try {
      await this.open();
      (await this.loader).waitForDisplayed({ timeout: 2000 });
      (await this.characterList).waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      throw new Error("Не удалось загрузить персонажей");
    }
  }

  public open() {
    return super.open("search");
  }
}

export default new CharactersPage();
