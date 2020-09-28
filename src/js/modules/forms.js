import checkNumInputs from './checkNumInputs';

const forms = () => {
    const form = document.querySelectorAll('.form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');
          
    const message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с Вами свяжемся',
      failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
      document.querySelector('.status').innerHTML = message.loading;

      let res = await fetch(url, {
        method: 'POST',
        body: data
      });

      return await res.text();
    };

    const clearInputs = () => {
      inputs.forEach(el => {
        el.value = '';
      });
    };

    form.forEach(el => {
      el.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

        el.appendChild(statusMessage);

        const formData = new FormData(el);

        postData('assets/server.php', formData)
          .then(res => {
            console.log(res);
            statusMessage.textContent = message.success;
          })
          .catch(() => {
            statusMessage.textContent = message.failure;
          })
          .finally(() => {
            clearInputs();
            setTimeout(() => {
              statusMessage.remove();
            }, 5000);
          });
      });
    });
};

export default forms;