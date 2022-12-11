export class TypeWriter {
    aText: String[];
    iIndex = 0;
    iArrLength: number;
    iScrollAt = 20;

    iTextPos = 0;
    sContents = '';
    iRow = 0;
    destination: any;
    elemnet: string;

    constructor(element: string, text: string[]) {
        this.elemnet = element;
        this.aText = text;
        this.iArrLength = text[0].length;
    }

    async typewriter() {
        this.sContents = ' ';
        this.iRow = Math.max(0, this.iIndex - this.iScrollAt);
        this.destination = document.getElementById(this.elemnet);

        while (this.iRow < this.iIndex) {
            this.sContents += this.aText[this.iRow++] + '<br />';
        }
        this.destination.innerHTML = this.sContents + this.aText[this.iIndex].substring(0, this.iTextPos) + "_";
        if (this.iTextPos++ == this.iArrLength) {
            this.iTextPos = 0;
            this.iIndex++;
            if (this.iIndex != this.aText.length) {
                this.iArrLength = this.aText[this.iIndex].length;
                setTimeout(() => this.typewriter(), this.randomIntFromInterval(20, 250));
            }
        } else {

            setTimeout(() => this.typewriter(), this.randomIntFromInterval(20, 250));
        }
    }

    randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}


