/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

let PIZZERIA_ID, currImgData;

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    // Switch screens buttons setup
    document.querySelectorAll(".btn-switch-screen")
        .forEach(btnSwitchScreen => btnSwitchScreen.addEventListener("click", changeScreen))

    document.getElementById("save-pizza").addEventListener("click", savePizza)
    document.getElementById("take-picture").addEventListener("click", takePicture)

    currImgData = ""
    PIZZERIA_ID = "guiga"
}

function changeScreen(btn) {
    let { nextScreen, originScreen } = btn.srcElement.dataset

    document.getElementById(originScreen).classList.add("hidden")
    document.getElementById(nextScreen).classList.remove("hidden")

    currImgData = "";
}

function savePizza() {
    console.log("SAVING PIZZA")
    let pizzaName = document.querySelector("#pizza-name").value
    let pizzaPrice = Number.parseFloat(document.querySelector("#pizza-price").value)

    console.log({ PIZZERIA_ID, pizzaName, pizzaPrice, currImgData })

    cordova.plugin.http.setDataSerializer('json');

    cordova.plugin.http.post("https://pedidos-pizzaria.glitch.me/admin/pizza",
        {
            pizzaria: PIZZERIA_ID,
            pizza: pizzaName,
            preco: pizzaPrice,
            // imagem: currImgData
            imagem: "TODO: REMOVE PLACEHOLDER"
        },
        {},
        function (okResponse) {
            console.log({ okResponse })
            alert("Successfuly saved pizza")
        },
        function (errResponse) {
            console.log({ errResponse })
            alert("Error saving pizza")
        })
}

function takePicture() {
    let preview = document.getElementById("pizza-preview")

    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 1,
        destinationType: Camera.DestinationType.DATA_URL
    });

    function onSuccess(imageData) {
        currImgData = "'data:image/jpeg;base64," + imageData + "'"
        preview.style.backgroundImage = "url(" + currImgData + ")";
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

function deletePizza() {
    console.log("DELETING PIZZA")
}