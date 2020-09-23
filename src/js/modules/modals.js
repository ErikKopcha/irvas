const modals = () => {
  function bindModal(triggerSelector, modalSecector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSecector),
          close = document.querySelector(closeSelector);

    trigger.forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
  
        modal.style.display = `block`;
        document.body.classList.add('modal-open');
      });
    });

    close.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }

      modal.style.display = `none`;
      document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = `none`;
        document.body.classList.remove('modal-open');
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = `block`;
      document.body.classList.add('modal-open');
    }, time);
  }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');

    showModalByTime('.popup', 60000);
};

export default modals;