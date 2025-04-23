const display = document.getElementById('display');
const button = document.getElementById('get-data');
const dogButton = document.getElementById('get-dog');

button.addEventListener('click', async () => {
    try {
        const url = 'https://randomuser.me/api/';
        const response = await fetch(url);
        const data = await response.json();

        const user = data.results[0];
        const fullName = `${user.name.first} ${user.name.last}`;
        const email = user.email;

        display.innerHTML = `名前: ${fullName}<br>メールアドレス: ${email}`;
    } catch (error) {
        display.innerHTML = `エラー：${error.message}`;
    }
});

dogButton.addEventListener('click', async () => {
    try {
        const url = 'https://dog.ceo/api/breeds/image/random';
        const response = await fetch(url);
        const data = await response.json();

        const image = data.message;
        display.innerHTML = `<img src="${image}" alt="Dog Image" style="width: 300px;">`;
    } catch (error) {
        display.innerHTML = `エラー：${error.message}`;
    }
});
