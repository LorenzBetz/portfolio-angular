export class BaseComponent {
    constructor() { }

    onBackButtonClick(): void {
        window.history.back();
    }
}