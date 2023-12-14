// import { expect } from "@wdio/globals";

import CharactersPage from "../pageobjects/characters.page.ts";

describe("Character page", async () => {
  it("load data", async () => {
    await CharactersPage.loadData();
  });
});
