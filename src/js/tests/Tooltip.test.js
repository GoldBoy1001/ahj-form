/**
 * @jest-environment jsdom
 */

import checkTooltip, { createTooltip } from '../Tooltip';

test('should create a new tooltip', () => {
  document.body.innerHTML = '<div class="container_tooltip"><header class="header_tooltip"><p class="title_tooltip">Вот и птичка ;)</p></header><div class="content_tooltip"><p class="message_tooltip">Спасибо, что выпустил птичку на волю!</p></div></div>';
  const expected = document.querySelector('.container_tooltip');
  const result = createTooltip();
  expect(result).toEqual(expected);
});

test('should remove block error', () => {
  document.body.innerHTML = `
  <form class="form">
    <div class="container">
      <button class="button">Нажми, и вылетит птичка!</button>
      <div class="container_tooltip">
        <header class="header_tooltip">
          <p class="title_tooltip">Вот и птичка ;)</p>
        </header>
        <div class="content_tooltip">
          <p class="message_tooltip">Спасибо, что выпустил птичку на волю!</p>
        </div>
      </div>
    </div>
  </form>`;

  const button = document.querySelector('.button');
  checkTooltip(button);
  const result = document.querySelector('.container_tooltip');
  expect(result).toBeNull();
});
