import { MouseEvent } from 'react';

export const toggleAccordion = (element: HTMLElement) => {
  element.classList.toggle(`accordion_closed`);
  element.classList.toggle(`accordion_opened`);
};

export const onAccorderonTogglerClick = (evt: MouseEvent) => {
  const accordionElement = evt.currentTarget.closest(`.accordion`) as HTMLElement;
  toggleAccordion(accordionElement);
};

export const initAccordion = (element: HTMLElement) => {
  if (element.classList.contains(`accordion_inited`)) {
    return;
  }
  const content = element.querySelector(`.accordion__content`) as HTMLElement;

  // Записываем в атрибут style высоту контента в раскрытом виде
  if (content) {
    content.style.height = `${content.scrollHeight}px`;
    element.classList.add(`accordion_inited`);
    element.classList.add(`accordion_closed`);
  }
};

export const destroyAccordion = (element: HTMLElement | null) => {
  if (element && !element.classList.contains(`accordion_inited`)) {
    return;
  }

  if (element) {
    const content: HTMLElement | null = element.querySelector(`.accordion__content`);
    if (content) {
      // Записываем в атрибут style высоту контента в раскрытом виде
      content.style.height = '';
      element.classList.remove(`accordion_closed`);
      element.classList.remove(`accordion_inited`);
    }
  }
};
