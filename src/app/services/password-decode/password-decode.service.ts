import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserData } from 'src/app/interfaces/user-data';

@Injectable({
  providedIn: 'root',
})
export class PasswordDecodeService {

  // Determina si se ha iniciado sesión correctamente
  result = false;

  constructor() {}

  /**
   * Inyecta el script de contenido y envia el mensaje con los datos del usuario.
   * @param userData Datos del usuario
   */
  decodePassword(userData: UserData): void {
    this.inyectContentScript();
    this.sendMessageToContentScript(userData);
  }

  /**
   * Envia el mensaje con los datos del usuario.
   * @param userData Datos del usuario
   */
  sendMessageToContentScript(userData: UserData): void {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          username: userData.username,
          password: userData.password,
          rememberCheck: userData.checkRemember,
        },
        (response: any) => {
          console.log('Class: password-decode.service. linea:38. Replicacion de CS: ' + response.replication);
          try {
            switch (response.replication) {
              case 'Done':
                this.done(userData);
                break;
              case 'Error':
                this.error(userData);
            }
          } catch (error) {
            console.log('Se ha generado un error. ', error);
          }
        }
      );
    });
  }

  /**
   * Inyecta el script de contenido a la página
   */
  inyectContentScript(): void {
    chrome.tabs.executeScript({
      file: 'extension/contentScript.js',
    });
  }

  done(userData: UserData): void{
    this.result = true;
  }

  error(userData: UserData): void{
    this.result = false;
  }
}
