import { FirestoreService } from './../../../services/firestore/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.scss'],
})
export class SocialBarComponent implements OnInit {
  isLike = false;
  constructor(private db: FirestoreService) {}

  ngOnInit(): void {
    this.onLike();
  }

  handleClickLike(e: Event): any {
    e.preventDefault();
    this.db.setLike(this.isLike);
  }

  handleClickShare(e: Event): any {
    e.preventDefault();
  }

  handleClickLMore(e: Event): any {
    e.preventDefault();
  }

  onLike(): any {
    // Saber si el usuario ya dio like
    this.db.getMyLike().subscribe((doc: any) => {
      this.isLike = doc.type === 'added' || doc.type === 'modified';
    });
  }
}
