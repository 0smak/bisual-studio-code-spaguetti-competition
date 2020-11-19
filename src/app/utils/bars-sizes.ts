export class BarsSizes {
  private static get titlebarHeight(): number {
    return document.getElementById('title-bar')?.clientHeight || 0;
  }

  public static get titlebarHeightPX(): string {
    return `${this.titlebarHeight}px`;
  }

  private static get bottombarHeight(): number {
    return document.getElementById('bottom-bar')?.clientHeight || 0;
  }

  public static get bottombarHeightPX(): string {
    return `${this.bottombarHeight}px`;
  }

  private static get sidebarWidth(): number {
    return document.getElementById('sidebar')?.clientWidth || 0;
  }

  public static get sidebarWidthPX(): string {
    return `${this.sidebarWidth}px`;
  }

  public static get heightWithoutBarsPX(): string {
    return `calc(100vh - calc(${this.titlebarHeightPX} + ${this.bottombarHeightPX}))`;
  }

  public static get widthWithoutSidebarPX(): string {
    return `calc(100vw - ${this.sidebarWidthPX})`;
  }
}
