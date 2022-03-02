// import { utilService } from "../../../services/util-service.js";
// import { storageService } from './async-storage-service.js';


const STORAGE_KEY = 'mailDB';
// _createCars();

export const mailService = {
    getTimeStringFromDate,
};


function getTimeStringFromDate(date) {
    var sentDate = new Date(date)
    return sentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}