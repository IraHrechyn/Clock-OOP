import {BaseClockComponent} from "./base-clock.component.js";
export class DigitalClock extends BaseClockComponent{
  constructor(container) {
    super(container);
    this.#createClockElement();
    this.updateTime();
    this.startUpdating();
  }

  #createClockElement() {
    this.clockElement = document.createElement('div');
    this.clockElement.classList.add('clock2');
    this.clockElement.innerHTML = '<div class="time"></div>';
    this.clockContainer.appendChild(this.clockElement);
  }

  updateTime() {
    this.timeDisplay = this.clockElement.querySelector(".time");
    const { hours, minutes, seconds } = this.getCurrentTime();
    this.timeDisplay.textContent = `${this.#formatTimeComponent(hours)}:${this.#formatTimeComponent(minutes)}:${this.#formatTimeComponent(seconds)}`;
  }

  #formatTimeComponent(number) {
    return number < 10 ? `0${number}` : number;
  }
}

new DigitalClock("#digital");
