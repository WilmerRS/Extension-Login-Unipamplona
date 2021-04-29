import { CredentialsManagerService } from 'src/app/services/credentials-manager/credentials-manager.service';
import { CredencialManagerComponent } from './../../pages/credencial-manager/credencial-manager.component';
import { Injectable } from '@angular/core';
import { UserData } from 'src/app/interfaces/user-data';

@Injectable({
  providedIn: 'root',
})
export class PasswordDecodeService {
  // User data
  userData!: UserData;

  // Determina si se ha iniciado sesión correctamente
  result = false;

  constructor(private credencialMng: CredentialsManagerService) {}

  /**
   * Inyecta el script de contenido y envia el mensaje con los datos del usuario.
   * @param userData Datos del usuario
   */
  public decodePassword(userData: UserData): void {
    this.userData = userData;
    this.inyectContentScript('ContentScript');
    this.inyectContentScript('Response');
    this.sendMessageToContentScript();
    this.listenerLoggedIn();
  }

  /**
   * Envia el mensaje con los datos del usuario.
   * @param userData Datos del usuario
   */
  private sendMessageToContentScript(): void {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          username: this.userData.username,
          password: this.userData.password,
        } // ,
        // (response: any) => {
        //   console.log('Class: password-decode.service. linea:38. Replicacion de CS: ' + response.replication);
        //   try {
        //     switch (response.replication) {
        //       case 'Done':
        //         this.done(userData);
        //         break;
        //       case 'Error':
        //         this.error(userData);
        //     }
        //   } catch (error) {
        //     console.log('Se ha generado un error. ', error);
        //   }
        // }
      );
    });
  }

  /**
   * Inyecta el script de contenido a la página
   */
  private inyectContentScript(script: string): void {
    chrome.tabs.executeScript({
      file: `extension/${script}.js`,
    });
  }

  private listenerLoggedIn(): any {
    chrome.runtime.onMessage.addListener(
      (request: any, sender: any, sendResponse: any) => {
        // console.log('Response del reques', request.loggedIn);
        if (this.userData.checkRemember && request.loggedIn) {
          this.credencialMng.savePassword(this.userData);
        }
        return true;
      }
    );
  }

  // done(userData: UserData): void{
  //   this.result = true;
  // }

  // error(userData: UserData): void{
  //   this.result = false;
  // }
}
