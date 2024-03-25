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

const API_URL = 'https://pedidos-pizzaria.glitch.me/admin/pizzas/guiga-dev'

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    // Switch screens buttons setup
    document.querySelectorAll(".btn-switch-screen")
        .forEach(btnSwitchScreen => btnSwitchScreen.addEventListener("click", changeScreen))

    document.getElementById("save-pizza").addEventListener("click", savePizza)
    document.getElementById("take-picture").addEventListener("click", takePicture)
}

function changeScreen(btn) {
    let { nextScreen, originScreen } = btn.srcElement.dataset

    document.getElementById(originScreen).classList.add("hidden")
    document.getElementById(nextScreen).classList.remove("hidden")
}

function savePizza() {
    console.log("SAVING PIZZA")
}

function takePicture() {
    console.log("TAKING PICTURE")
}

function deletePizza() {
    console.log("DELETING PIZZA")
}