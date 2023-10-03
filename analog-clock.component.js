import {BaseClockComponent} from "./base-clock.component.js";

class AnalogClock extends BaseClockComponent{
    constructor(containerSelector) {
        super(containerSelector);
        this.#createClockElements();
        this.#initializeClockHands();
        this.updateTime();
        this.startUpdating();
    }

    #createClockElements() {
        this.clock = document.createElement('div');
        this.clock.classList.add('clock');
        this.clock.innerHTML = `
          <div class="hour-hand"></div>
          <div class="minute-hand"></div>
          <div class="second-hand"></div>
          <div class="clock-center"></div>
        `;
        this.clockContainer.appendChild(this.clock);
    }

    #initializeClockHands() {
        this.hourHand = this.clock?.querySelector('.hour-hand');
        this.#validateClockHand('.hour-hand', this.hourHand);
        this.minuteHand = this.clock?.querySelector('.minute-hand');
        this.#validateClockHand('.minute-hand', this.minuteHand);
        this.secondHand = this.clock?.querySelector('.second-hand');
        this.#validateClockHand('.second-hand', this.secondHand);
    }

    #validateClockHand(selector, variable) {
        if (!variable) throw new Error(`Clock hand with selector "${selector}" not found.`);
    }


    updateTime() {
        const { hours, minutes, seconds } = this.getCurrentTime();
        const hourRotation = (hours % 12) * 30 + minutes / 2;
        const minuteRotation = minutes * 6 + seconds / 10;
        const secondRotation = seconds * 6;

        this.hourHand.style.transform = `rotate(${hourRotation}deg)`;
        this.minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
        this.secondHand.style.transform = `rotate(${secondRotation}deg)`;
    }

}

new AnalogClock('#analog');
