import { ref } from 'vue';
import { Category, Material } from '@/custom_types';

const address = import.meta.env.VITE_API_ADDRESS;
const pyAddress = import.meta.env.VITE_API_PYTHON_API;
const requestOptions = {method: "GET", mode: "cors", redirect: "follow"};
console.log("address", address)
console.log("python address", pyAddress)

export async function getMaterials() {
    return fetch(address + "/api/materials", {method: "GET", mode: "cors", redirect: "follow"})
        .then(response => response.json())        
}

export async function getBrands() {
    return fetch(address + "/api/brands", {method: "GET", mode: "cors", redirect: "follow"})
        .then(response => response.json())        
}

export async function getWashingModes() {
    return fetch(address + "/api/washingModes", {method: "GET", mode: "cors", redirect: "follow"})
        .then(response => response.json())        
}

export async function getUser(username: string) {
    return fetch(address + "/api/auth/" + username, {method: "GET", mode: "cors", redirect: "follow"})
        .then(response => response.json());       
}

export async function getParentCategories() {
    return fetch(address + "/api/parentCategorys", {method: "GET", mode: "cors", redirect: "follow"})
        .then(response => response.json());      
}

export async function getStatus() {
    return fetch(pyAddress + "/status", {method: "GET", mode: "cors", redirect: "follow"})
        .then(response => response.json());
}

export async function getColors() {
    return fetch(pyAddress + "/color", {method: "GET", mode: "cors", redirect: "follow"})
        .then(response => response.json());
}