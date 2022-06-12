import React from 'react';
import {devices, categories, parameters} from './dataArrays';

export function getCategoryById(categoryId) {
  let category;
  categories.map(data => {
    if (data.id === categoryId) {
      category = data;
    }
  });
  return category;
}

export function getParameterName(parameterId) {
  let name;
  parameters.map(data => {
    if (data.id === parameterId) {
      name = data.name;
    }
  });
  return name;
}

export function getParameterUrl(parameterId) {
  let url;
  parameters.map(data => {
    if (data.id === parameterId) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id === categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getDevices(categoryId) {
  const devicesArray = [];
  devices.map(data => {
    if (data.categoryId === categoryId) {
      devicesArray.push(data);
    }
  });
  return devicesArray;
}

// modifica
export function getDevicesByParameter(parameterId) {
  const devicesArray = [];
  devices.map(data => {
    data.parameters.map(index => {
      if (index[0] === parameterId) {
        devicesArray.push(data);
      }
    });
  });
  return devicesArray;
}

export function getNumberOfDevices(categoryId) {
  let count = 0;
  devices.map(data => {
    if (data.categoryId === categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllParameters(idArray) {
  const parametersArray = [];
  idArray.map(index => {
    parameters.map(data => {
      if (data.id === index[0]) {
        parametersArray.push([data, index[1]]);
      }
    });
  });
  return parametersArray;
}

// functions for search
export function getDevicesByParameterName(parameterName) {
  const nameUpper = parameterName.toUpperCase();
  const devicesArray = [];
  parameters.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() === nameUpper
      const devices = getDevicesByParameter(data.id);
      const unique = [...new Set(devices)];
      unique.map(item => {
        devicesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(devicesArray)];
  return uniqueArray;
}

export function getDevicesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const devicesArray = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const devices = getDevices(data.id); // return a vector of devices
      devices.map(item => {
        devicesArray.push(item);
      });
    }
  });
  return devicesArray;
}

export function getDevicesByDeviceName(deviceName) {
  const nameUpper = deviceName.toUpperCase();
  const devicesArray = [];
  devices.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      devicesArray.push(data);
    }
  });
  return devicesArray;
}
