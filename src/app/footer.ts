export class Footer {
  footertext: string;

  constructor() {
    console.log(`This is Footer constructor`);
    this.footertext = `Sample text from footer.ts file`;
  }

  getFooterText(): string {
    return this.footertext;
  }
}
