import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { UserCreential } from 'src/app/interfaces/user-credential';
import { CredentialsManagerService } from 'src/app/services/credentials-manager/credentials-manager.service';

@Component({
  selector: 'app-credencial-manager',
  templateUrl: './credencial-manager.component.html',
  styleUrls: ['./credencial-manager.component.scss'],
})
export class CredencialManagerComponent implements OnInit {
  userCredentials: UserCreential[] = [];
  @ViewChildren('cardUser') cardUser!: QueryList<ElementRef>;
  /* variable for show icon select */
  show = true;
  userSelect = 0;
  constructor(private credentialsManagerService: CredentialsManagerService) {}

  ngOnInit(): void {
    /*  this.credentialsManagerService.getUsers().subscribe((usersSnapshot) => {
      this.userCredentials = [];
      usersSnapshot.forEach((userCredentials: any) => {
        console.log(userCredentials.payload.doc.data());
        this.userCredentials.push({
          $key: userCredentials.payload.doc.id,
          username: userCredentials.payload.doc.data().username,
          password: userCredentials.payload.doc.data().password,
          date: userCredentials.payload.doc.data().date,
          defaultUser: userCredentials.payload.doc.data().defaulUser
        });
      });
    }); */
    this.userCredentials = this.credentialsManagerService.getUsers();

    /* Add event mousemove to cardUser */
  }

  /*  deleteUser(event: any, user: {}): void {
    event.preventDefault();

    /*     let string: Promise<string> = Object.values(user)[0];
    this.credentialsManagerService.deleteUser(user, 'Wilmer');
  } */

  console(event: Event): void {
    event.preventDefault();
    /* this.cardUser.toArray().forEach((element) => {
      element.nativeElement.addEventListener('mousemove', () => {
        console.log('encima');
      });
    })  console.log(
      event.target
    );
     this.cardUserEvent(); */
  }

  /* Add event mousemove to cardUser */
  /* cardUserEvent():void{
    this.cardUser.nativeElement.addEventListener('mousemove',()=>{
      console.log('encima')
    })
  } */

  selectUser(element: number): boolean {
    if (element === this.userSelect) {
      return true;
    }
    return false;
  }

  selectNewUser(event: Event, element: number): void {
    event.preventDefault();
    this.userSelect = element;
  }

  Prueba(event: Event): void {
    event.preventDefault();
    console.log(event.target);
  }
}
