import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';


const STORAGE_KEY = 'mail_db';
// _createCars();

export const mailService = {
    getTimeStringFromDate,
    query,
    getMailsHardCoded,
    saveMailsToStorage,
    remove,
    updateMail,
    postNewMail,
    getMailById,
    onDeleteMail
};

function onDeleteMail() {

}

function getMailById(mailId) {
    return storageService.get(STORAGE_KEY, mailId)
        .then(mail => { return mail })
}

function postNewMail(newComposeMail) {
    const newMail = _getEmptyMail()
    newMail.from = newComposeMail.from
    newMail.subject = newComposeMail.subject
    newMail.body = newComposeMail.body
    newMail.to = newComposeMail.to
    return storageService.post(STORAGE_KEY, newMail)
        .then(newMail => { return newMail })

}

function getTimeStringFromDate(date) {
    var sentDateString = new Date(date)

    return sentDateString.toLocaleString("en-US", { day: 'numeric', month: 'short', hour: '2-digit', hour12: false, minute: '2-digit', timeZone: 'Asia/Jerusalem' });
}

function updateMail(mail) {
    return storageService.put(STORAGE_KEY, mail)
}

function query() {
    // return getMailsHardCoded()
    return storageService.query(STORAGE_KEY);
}

function getMailsHardCoded() {
    return [{
            id: 'e102',
            from: 'ron',
            subject: 'Miss you! Lorem ipsum dolor sit.',
            body: '12check Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ducimus?',
            isRead: false,
            sentAt: 155164560594,
            to: 'momo@momo.com',
            isView: false,
            isStar: false,
            removeAt: null

        },
        {
            id: 'e1013',
            from: 'or',
            subject: 'shiva! shiva! Lorem, ipsum dolor.',
            body: '78check Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, cum!',
            isRead: false,
            sentAt: 15511339645694,
            to: 'momo@momo.com',
            isView: false,
            isStar: false,
            removeAt: null
        },
        {
            id: 'e104',
            from: 'dor',
            subject: 'dsadsu! dsadsu! dsadsu!dsadsu!',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nisi consequatur facilis ipsam.',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com',
            isView: false,
            isStar: false,
            removeAt: null
        },
    ]
}

function saveMailsToStorage(mails) {
    utilService.saveToStorage(STORAGE_KEY, mails)
}

function remove(mailId) {
    //remove from model

    return storageService.remove(STORAGE_KEY, mailId);
}

function _getEmptyMail() {
    return {
        id: null,
        from: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: Date.now(),
        to: '',
        isView: false,
        isStar: false,
        removeAt: null
    };
}


// function get(carId) {
//     return storageService.get(STORAGE_KEY, carId)
//     .then(car => {
//         return _setNextPrevCarId(car)
//     })
// }

// function save(car) {
//     if (car.id) return storageService.put(STORAGE_KEY, car);
//     else return storageService.post(STORAGE_KEY, car);
// }

// function _setNextPrevCarId(car) {
//     return storageService.query(STORAGE_KEY).then(cars => {
//         const carIdx = cars.findIndex(currCar => currCar.id === car.id)
//         car.nextCarId = (cars[carIdx+1])? cars[carIdx+1].id : cars[0].id
//         car.prevCarId = (cars[carIdx-1])? cars[carIdx-1].id : cars[cars.length-1].id
//         return car
//     })
// }

// // Factory Method:
// function getEmptyCar(vendor = '', maxSpeed = 0) {
//     return {
//         id: '',
//         vendor,
//         maxSpeed,
//         prevOwners: []
//     };
// }

// function _createCars() {
//     let cars = utilService.loadFromStorage(STORAGE_KEY);
//     if (!cars || !cars.length) {
//         cars = [];
//         cars.push(_createCar('audu', 300));
//         cars.push(_createCar('fiak', 120));
//         cars.push(_createCar('subali', 100));
//         cars.push(_createCar('mitsi', 150));
//         utilService.saveToStorage(STORAGE_KEY, cars);
//     }
//     return cars;
// }

// function _createCar(vendor, maxSpeed = 250) {
//     const car = getEmptyCar(vendor, maxSpeed)
//     car.id = utilService.makeId()
//     return car;
// }