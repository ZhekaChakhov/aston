import { $ } from "@wdio/globals";

import Page from "./page.ts";

class CharactersPage extends Page {
  public get loader() {
    return $("#loader");
  }

  public get characterContainer() {
    return $("#character-container");
  }

  public get characterCards() {
    return browser.react$$("CharacterCard");
  }

  public async loadData() {
    try {
      await this.open();
      (await this.loader).waitForDisplayed({ timeout: 2000 });
      (await this.characterContainer).waitForDisplayed({ timeout: 2000 });
    } catch (error) {
      throw new Error("Не удалось загрузить персонажей");
    }
  }

  public async loadCards() {
    try {
      await this.open();
      (await this.characterCards).map((card) =>
        card.waitForDisplayed({ timeout: 2000 }),
      );
    } catch (error) {
      throw new Error("Не удалось загрузить карточки");
    }
  }

  public open() {
    return super.open("/");
  }
}

export default new CharactersPage();
