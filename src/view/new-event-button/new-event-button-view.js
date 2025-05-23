import AbstractView from '../../framework/view/abstract-view';
import { createNewEventButtonTemplate } from './new-event-button-template';

export default class NewEventButtonView extends AbstractView {
  #handleClick = null;

  constructor({onclick}) {
    super();
    this.#handleClick = onclick;
    this.element.addEventListener('click', this.#clickHandler);
  }

  get template() {
    return createNewEventButtonTemplate();
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}
