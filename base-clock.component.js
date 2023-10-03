export class BaseClockComponent{
    /**
     * @type {HTMLDivElement}
     * */
    clock;

    constructor(containerSelector) {
        this.#checkAndSetClockContainer(containerSelector);
    }

    /**
     * @param containerSelector {string}
     * @returns {void}
     * */
    #checkAndSetClockContainer(containerSelector) {
        this.clockContainer = document.querySelector(containerSelector);
        if (!this.clockContainer) {
            throw new Error(`Clock container with selector "${containerSelector}" not found.`);
        }
    }

    /**
     * @returns {{ hours: number, minutes: number, seconds: number }}
     * */
    getCurrentTime() {
        const current = new Date();
        const hours = current.getHours();
        const minutes = current.getMinutes();
        const seconds = current.getSeconds();
        return { hours, minutes, seconds };
    }

    /**
     * @returns {void}
     * */
    startUpdating() {
        this.updateTime();
        setInterval(() => this.updateTime(),1000);
    }

    /**
     * @returns {void}
     * */
    updateTime(){}
}