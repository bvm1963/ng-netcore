import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-magazines-route-page',
  templateUrl: './magazines-route-page.component.html',
  styleUrls: ['./magazines-route-page.component.css']
})
export class MagazinesRoutePageComponent implements OnInit {

		constructor(
				private router: Router,
				private activatedRoute: ActivatedRoute
		) { }

		ngOnInit() {
				let menuId = this.activatedRoute.snapshot.params['id'];
				this.router.navigate(['/main/magazines/' + menuId]);
  }
}
