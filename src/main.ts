import './style.css'

// // Импортируем плагин (если используешь модули)
// import { PushNotifications } from '@capacitor/push-notifications';
// // const span = document.querySelector("span")

// async function setupPushNotifications() {
//     // 1. Запрашиваем разрешение на уведомления (важно для Android 13+)
//     const permStatus = await PushNotifications.checkPermissions();
//     if (permStatus.receive === 'prompt') {
//         await PushNotifications.requestPermissions();
//     }

//     // 2. Регистрируем устройство в системе Push-уведомлений
//     await PushNotifications.register();

//     // 3. Слушаем событие "registration", чтобы получить токен устройства
//     PushNotifications.addListener('registration', (token) => {
//         console.log('Устройство зарегистрировано. Токен:', token.value);
//         // !!! ВАЖНО: Этот токен нужно отправить на твой сервер (NodeTS) !!!
//         fetch('https://api.tutorfive.ru/api/save-token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             // body: token.value
//             body: JSON.stringify({ token: token.value })
//         })
//         // span.innerHTML = "статус: токен(" + token.value + ")"
//         // alert('Токен устройства (отправь его на сервер): ' + token.value);
//     });

//     // 4. Слушаем ошибки при регистрации
//     PushNotifications.addListener('registrationError', (err) => {
//         console.error('Ошибка регистрации:', err.error);
//     });

//     // 5. Слушаем получение уведомления, когда приложение открыто
//     PushNotifications.addListener('pushNotificationReceived', (notification) => {
//         console.log('Уведомление получено:', notification);
//         // span.innerHTML = "статус: новое уведомление"
//         // alert('Новое уведомление: ' + notification.title);
//     });

//     // 6. Слушаем нажатие на уведомление
//     PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
//         console.log('По уведомлению кликнули:', notification);
//         // span.innerHTML = "статус: по уведомлению кликнули"
//         // Здесь можно обработать переход на нужную страницу
//     });
// }

// // Запускаем настройку, когда приложение готово
// setupPushNotifications();






const info_box_el = document.querySelector(".info_box") as HTMLDivElement
const background_menu_el = document.querySelector(".background_menu") as HTMLDivElement
const background_remove_el = document.querySelector(".background_remove") as HTMLDivElement
const copy_el = document.querySelector(".copy") as HTMLDivElement
const call_el = document.querySelector(".call") as HTMLLinkElement
const delete_el = document.querySelector(".delete") as HTMLDivElement
const cancel_el = document.querySelector(".cancel") as HTMLDivElement
const delete_permanently_el = document.querySelector(".delete_permanently") as HTMLDivElement

(async () => {
    let data = await fetch("https://api.tutorfive.ru/api/omega/get", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            ok: true,
        })
    }) as any
    data = await data.json()
    console.log(data);
    info_box_el.innerHTML = ""
    for (let el of data) {
        console.log(el);
        info_box_el.innerHTML += `
        <div class="new_student">
      <span class="name">
        ${el.name}
      </span>
      <!-- <img src="public/menyu.svg" class="but_img" width="100%" id="${el.id}_${el.phone}" alt=""> -->
      <div class="but_img" id="${el.id}_${el.phone}"></div>
      <span class="phone">
        ${el.phone}
      </span>
    </div>
        `
    }
})()


info_box_el?.addEventListener("click", (event) => {
    let target = event.target as HTMLElement
    if (target.classList.contains('but_img')) {
        background_menu_el.classList.add("see_flex")
        let text_id = target.id as any
        localStorage.setItem("id", text_id.split("_")[0])
        localStorage.setItem("phone", text_id.split("_")[1])
    }
})
background_menu_el?.addEventListener("click", (event) => {
    console.log(event.target);
    let target = event.target as HTMLElement
    if (target.classList.contains('background_menu')) {
        background_menu_el.classList.remove("see_flex")
    }
})
copy_el?.addEventListener("click", () => {
    navigator.clipboard.writeText(localStorage.getItem("phone") as string).then(function () {
        console.log('Текст успешно скопирован в буфер обмена');
        copy_el.innerText = "Текст скопирован 👌"

    }, function (err) {
        console.error('Произошла ошибка при копировании текста: ', err);
    });
})
call_el?.addEventListener("click", () => {
    call_el.href = "tel:" + localStorage.getItem("phone")
})
delete_el?.addEventListener("click", () => {
    background_remove_el.classList.add("see_flex")
    background_menu_el.classList.remove("see_flex")
})
background_remove_el?.addEventListener("click", (event) => {
    console.log(event.target);
    let target = event.target as HTMLElement
    if (target.classList.contains('background_remove')) {
        background_remove_el.classList.remove("see_flex")
    }
})
cancel_el?.addEventListener("click", () => {
    background_menu_el.classList.add("see_flex")
    background_remove_el.classList.remove("see_flex")
})
delete_permanently_el?.addEventListener("click", async () => {
    let data = await fetch("https://api.tutorfive.ru/api/omega/del", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            id: +(localStorage.getItem("id") + ""),
        })
    }) as any
    data = await data.json()
    if (data.id == +(localStorage.getItem("id") + "")) {
        let data = await fetch("https://api.tutorfive.ru/api/omega/get", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                ok: true,
            })
        }) as any
        data = await data.json()
        console.log(data);
        info_box_el.innerHTML = ""
        for (let el of data) {
            console.log(el);
            info_box_el.innerHTML += `
        <div class="new_student">
      <span class="name">
        ${el.name}
      </span>
      <!-- <img src="public/menyu.svg" class="but_img" width="100%" id="${el.id}_${el.phone}" alt=""> -->
       <div class="but_img" id="${el.id}_${el.phone}"></div>
      <span class="phone">
        ${el.phone}
      </span>
    </div>
        `
        }
        background_remove_el.classList.remove("see_flex")
    }
})




