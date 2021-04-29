import { EncryptionService } from './services/encryption/encryption.service';

import { FirestoreService } from './services/firestore/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ExtensionLoginReactive';

  constructor(private db: FirestoreService, private es: EncryptionService) {}

  ngOnInit(): void {
    this.autologging();



    // let a: any[] = [];
    // this.db.getLikes().subscribe((usersSnapshot) => {
    //   usersSnapshot.forEach((snapshotChanges: any) => {
    //     a.push({
    //       a: snapshotChanges.payload.doc.data(),
    //       b: snapshotChanges.payload.doc.id,
    //     });
    //     console.log(
    //       snapshotChanges.payload.doc.data(),
    //       snapshotChanges.payload.doc.id
    //     );
    //     console.log(a);
    //   });
    // });
  }

  /**
   * Permite identificar al usuario con un codigo unico
   * @returns void
   */
  private autologging(): void {
    const ls: any = localStorage.getItem('uuid');
    // Si el usuario ya existe, actualiza la fecha de ultimo ingreso
    if (ls) {
      const data = JSON.parse(ls);
      this.db.modifyLastSession(data.id);
      return;
    }

    // Si el usuario no existe
    const uuid = this.es.getEncryptedUserID();
    this.db.createUser(uuid);
  }
}
